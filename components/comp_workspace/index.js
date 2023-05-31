import styles from './styles.module.css'
import { useState, useContext, useEffect } from 'react'
import Menu from './menu'
import { Comp_Frame, Comp_Info, App_Context } from '@/utils/modules'

export default function Comp_Workspace() {

  const { appData } = useContext(App_Context)
  const [menu, setMenu] = useState(null)
  const [act, setAct] = useState(false)

  useEffect( () => document.addEventListener('contextmenu', open_menu), [])

  const open_menu = (e) => {

    e.preventDefault()
    setAct(true)

    if (menu) setMenu(null)
    else setMenu(
      <Menu
        pos_x={e.offsetX}
        pos_y={e.offsetY}
        close={close_menu}
      />
    )

  }

  const close_menu = () => setMenu(null)

  return (

    <>

      <div className={styles.container}>

        <Comp_Info act={act}/>

        {
          appData.map(workspace => {

            if (workspace.current) {

              return workspace.frames.map(frame => {
                
                return <Comp_Frame data={frame} key={frame.id} />

              })

            }

          })
        }

        { menu }

      </div>

    </>

  )

}