import styles from './styles.module.css'

export default function Loading() {

    return (

        <div className={styles.container}>
            <div className={styles.loader}>
                <img className={styles.logo} src="/logo.png"/>
            </div>
        </div>

    )

}