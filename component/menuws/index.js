import styles from './styles.module.css'
import { useState, useRef, useEffect } from 'react'
import { Manager_Data, Generator } from '@/utils/modules'

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

export default function MenuWs(params) {

  const add = useRef()
  const [data, setData] = useState({
    display: false,
    info: true,
    pos_x: 0,
    pos_y: 0
  })

  const create_frame = (_tool) => {

    setData(state => {
      return { ...state, info: false}
    })

    Manager_Data.add_frame({

      id: Generator(),
      title: null,
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
          return { ...state, display: true, pos_x: e.offsetX, pos_y: e.offsetY}
        })

      }

    }

    const rest = () => {

      setData(state => {
        return { ...state, display: false }
      })

    }

    document.addEventListener('contextmenu', open_menu)
    document.addEventListener('touchstart', open_menu)
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
                <div className={styles.name}>{tool.name}</div>
              </div>

            )

          })
        }

      </div>

      {/* <img className={[styles.info, data.info ? '' : 'hide'].join(' ')} src="https://img.icons8.com/ios/100/FFFFFF/mouse-right-click.png"/> */}

    </>

  )

}