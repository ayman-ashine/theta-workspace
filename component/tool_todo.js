import styles from '@/styles/Tool_Todo.module.css'
import M_Workspace from '@/component/m_workspace'

export default function Tool_Todo(params) {

    const id = params.id
    const data = params.data

    const update = ( e ) => {

        M_Workspace.frame_update()

    }

    return (

        <div className={styles.container}>



        </div>

    )

}