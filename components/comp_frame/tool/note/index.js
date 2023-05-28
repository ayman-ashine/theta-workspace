import styles from './styles.module.css'
import { Manager_Data } from '@/utils/modules'

export default function Note(params) {

    const update = ( e ) => {

        Manager_Data.update_frame(params.id, { tool_data: { text: e.target.value } })

    }

    return (

        <textarea className={styles.textarea} value={params.data.text} placeholder="..." onChange={update}></textarea>

    )

}