import styles from '@/styles/Loader.module.css'
const Loader = () => {

    return (

        <div className='full flex v-center h-center absolute bkg-dark'>
            <div className={styles.loader}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </div>
        
    )

}

export default Loader