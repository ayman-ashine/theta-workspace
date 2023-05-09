import styles from '@/styles/Tool_Note.module.css'
import M_Workspace from '@/component/m_workspace'

export default function Tool_Note(params) {

    const id = params.id
    const data = params.data

    const update = ( e ) => {

        M_Workspace.update_frame(id, { tool_data: { text: e.target.value } })

    }

    return (

        <div className={styles.container}>
            <textarea className={styles.textarea} value={data.text} placeholder="..." onChange={update}></textarea>
        </div>

    )

}