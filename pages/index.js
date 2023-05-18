import styles from '@/styles/Home.module.css'
import Link from "next/link"

export default function Home() {

    return (
        <div className={styles.container}>

            <div className={styles.frame_1}>

                <h1 className={styles.title}>
                    <img className={styles.logo} src="/logo.png"/>
                    Theta Workspace
                </h1>
                
                <p className={styles.description}>
                    Theta Workspace is a web application dedicated to those who want to manage their time and daily tasks for more productivity and efficiency.
                </p>

                <Link href='/app'>
                    <button className={styles.btn}>
                        Get started
                    </button>
                </Link>
                
            </div>

            <div className={styles.frame_2}>
                <img className={styles.workspace} src="/workspace.png"/>
            </div>

        </div>
    )

}