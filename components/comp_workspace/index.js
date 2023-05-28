import styles from './styles.module.css'
import { useState, useContext, useEffect } from 'react'
import Menu from './menu'
import { App_Context, Comp_Frame } from '@/utils/modules'

export default function Comp_Workspace() {

  const {appData} = useContext(App_Context)
  const [menu, setMenu] = useState(null)

  const open_menu = (e) => {

    e.preventDefault()
    
    if(menu) setMenu(null)
    else setMenu(<Menu
      pos_x={e.offsetX}
      pos_y={e.offsetY}
      close={close_menu}
    />)

  }

  const close_menu = () => {

    setMenu(null)

  }

  useEffect(() => {

    document.addEventListener('contextmenu', open_menu)

  }, [])

  return (

    <>
    
      <div className={styles.container}>

      {
        appData.map(workspace => {

          if (workspace.current) {
            
            return workspace.frames.map(frame => {
              return <Comp_Frame data={frame} key={frame.id} />
            })

          }

        })
      }

      </div>

      {menu}

    </>

  )

}

/*
{
  appData.map(workspace => {

    if (workspace.current) {
      
      return workspace.frames.map(frame => {
        return <Frame data={frame} key={frame.id} />
      })

    }

  })
}

<MenuWs />
*/