import styles from '@/styles/Add.module.css'
import { useState, useRef } from 'react'
import { Generator } from '@/utils/generator'
import M_Workspace from '@/component/m_workspace'

const LOCAL_DATA = {

  TOOLS: [
    {
      id: 'note',
      name: 'Note',
      icon_url: 'https://img.icons8.com/ios-filled/25/FFFFFF/note.png'
    },
    {
      id: 'todo',
      name: 'To Do List',
      icon_url: 'https://img.icons8.com/metro/25/FFFFFF/to-do.png'
    },
    {
      id: 'timer',
      name: 'Timer',
      icon_url: 'https://img.icons8.com/ios-filled/25/FFFFFF/time.png'
    }
  ],
  ADD: {
    id: 'add_new_tool',
    name: 'add new tool',
    icon_url: 'https://img.icons8.com/ios/25/FFFFFF/plus-math--v1.png'
  }

}

export default function Add(params) {

  const [display, setDisplay] = useState('hide')
  const add = useRef()

  const create_frame = (_tool) => {

    setDisplay('hide')

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
  
  return (

    <>

      <div className={styles.container} onClick={() => setDisplay(display ? '' : 'hide')} ref={add}>

        <div className={[styles.tools, display].join(' ')}>

          {
            LOCAL_DATA.TOOLS.map( tool => {

              return (

                <span
                  className={styles.btn}
                  key={tool.id}
                  title={tool.name}
                  onClick={() => create_frame(tool)}>
                  <img src={tool.icon_url} />
                </span>

              )

            })
          }

        </div>

        <span className={styles.btn}>

          <img src={LOCAL_DATA.ADD.icon_url} />

        </span>

      </div>

    </>

  )

}