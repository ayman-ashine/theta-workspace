import styles from './Loader.module.css'

const Loader = () => {

    return (

        <div className='full flex v-center h-center absolute t-0 l-0 bg-dark'>
            <div className={styles.loader}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </div>
        
    )

}

export default Loader