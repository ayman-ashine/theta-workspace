import styles from '@/styles/Tool_Note.module.css'
import { Manager_Data } from '@/utils/modules'

export default function Tool_Note(params) {

    const _id = params.id
    const _data = params.data

    const update = ( e ) => {

        Manager_Data.update_frame(_id, { tool_data: { text: e.target.value } })

    }

    return (

        <div className={styles.container}>
            <textarea className={styles.textarea} value={_data.text} placeholder="..." onChange={update}></textarea>
        </div>

    )

}