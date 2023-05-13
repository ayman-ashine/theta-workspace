import styles from '@/styles/Workspace.module.css'
import { useContext } from 'react'
import { Add, Frame, Context } from '@/utils/modules'

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

      <Add/>

    </div>

  )

}