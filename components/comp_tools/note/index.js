import styles from './styles.module.css'
import { Manager_Data } from '@/utils/modules'

export default function Note({ id, data }) {

    const update = ( e ) => {

        let text = e.target.value
        Manager_Data.update_frame(id, { tool_data: { text } })

    }

    return (

        <textarea
            className={styles.textarea}
            value={data.text}
            placeholder="..."
            onChange={update}
        >
        </textarea>

    )

}