import styles from '@/styles/Workspace.module.css'
import { useContext } from 'react'
import { Context } from '@/component/context'
import Frame from '@/component/frame'
import Add from '@/component/add'

export default function Workspace() {

  const [workspace] = useContext(Context)

  return (

    <div className={styles.container}>

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