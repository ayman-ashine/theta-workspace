import styles from './styles.module.css'

export default function Comp_Loader({ loader }) {

    if(loader) return null

    return (

        <div className={styles.container}>
            <img className={styles.logo} src="/logo.png"/>
        </div>

    )

}