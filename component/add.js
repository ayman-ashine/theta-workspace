import styles from '@/styles/Add.module.css'
import { useState, useRef, useEffect } from 'react'
import { Generator } from '@/utils/generator'
import M_Workspace from '@/component/m_workspace'

const LOCAL_DATA = {

  TOOLS: [
    {
      id: 'note',
      name: 'Note',
      icon_url: 'https://img.icons8.com/material-outlined/30/FFFFFF/note.png'
    },
    {
      id: 'todo',
      name: 'To Do List',
      icon_url: 'https://img.icons8.com/material-outlined/30/FFFFFF/todo-list--v2.png'

    },
    {
      id: 'timer',
      name: 'Timer',
      icon_url: 'https://img.icons8.com/material-outlined/30/FFFFFF/retro-alarm-clock.png'
    },
    {
      id: 'chrono',
      name: 'Chrono',
      icon_url: 'https://img.icons8.com/material-outlined/30/FFFFFF/time.png'
    }
  ],

}

export default function Add(params) {

  const add = useRef()
  const [data, setData] = useState({
    display: false,
    pos_x: 0,
    pos_y: 0
  })

  const create_frame = (_tool) => {

    M_Workspace.add_frame({

      id: Generator(),
      title: _tool.name,
      color: 'bkg-purple',
      width: 350,
      height: 350,
      parent: {},
      pos_x: add.current.parentNode.offsetWidth / 2 - (350 / 2),
      pos_y: add.current.parentNode.offsetHeight / 2 - (350 / 2),
      tool_id: _tool.id,
      tool_data: {},
      menu: null,

    })

  }

  const init = () => {

    const open_menu = (e) => {

      e.preventDefault()

      if (e.target.id === 'workspace') {

        setData(state => {
          return { ...state, display: true, pos_x: e.offsetX, pos_y: e.offsetY }
        })

      }

    }

    const rest = () => {

      setData(state => {
        return { ...state, display: false }
      })

    }

    document.addEventListener('contextmenu', open_menu)
    document.addEventListener('mousedown', rest)

  }

  useEffect(() => init(), [])

  return (

    <>

      <div
        className={[styles.container, data.display ? '' : 'hide'].join(' ')}
        style={{
          left: data.pos_x,
          top: data.pos_y
        }}
        ref={add}
      >

        {
          LOCAL_DATA.TOOLS.map(tool => {

            return (

              <div
                className={styles.option}
                key={tool.id}
                onMouseDown={() => create_frame(tool)}>
                <img src={tool.icon_url} />
                <div>{tool.name}</div>
              </div>

            )

          })
        }

      </div>

    </>

  )

}