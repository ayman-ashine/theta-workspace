import styles from './styles.module.css'

export default function Loading() {

    return (

        <div className={styles.container}>
  
            <div className={styles.loader}>
                <div className={styles.scanner}>
                    <span className={styles.word}>Loading...</span>
                </div>
            </div>

        </div>

    )

}