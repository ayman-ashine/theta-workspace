import styles from '@/styles/Home.module.css'
import Link from "next/link"

export default function Home() {

    return (

        <div className='flex-center'>

            <div className={styles.container}>

                <h1 className={styles.title}>
                    <img className={styles.logo} src="/logo.png"/>
                    Theta Workspace
                </h1>
                
                <p className={styles.description}>
                    Welcome to Theta Workspace,
                    Boost your productivity by effortlessly creating, organizing, and prioritizing tasks.
                    Take control of your day and embark on a journey towards a more efficient and productive future.
                    Get started now and unlock your true potential.
                </p>

                <Link href='/app'>
                    <button className={styles.btn}>get started</button>
                </Link>
                
            </div>

            <div className={styles.container}>
                <img className={styles.workspace} src="/workspace.png"/>
            </div>

        </div>

    )

}