import styles from './styles.module.css'
import { useContext } from 'react'
import { Context, Frame, MenuWs } from '@/utils/modules'

export default function Workspace() {

  const [workspace] = useContext(Context)

  return (

    <div className={styles.container} id='workspace'>

      {
        workspace.map( workspace => {
          if(workspace.select) return workspace.frames.map( (frame, index) => {
            return <Frame data={frame} key={index}/>
          })
        })
      }

      <MenuWs/>

    </div>

  )

}