import styles from '@/styles/Home.module.css'
import Link from "next/link"

export default function Home() {

    return (
        <div className={styles.container}>

            <h1 className={styles.title}>Theta Workspace</h1>
            
            <p className={styles.description}>
                Theta Workspace is a web application dedicated to those who want to manage their time and daily tasks for more productivity and efficiency.
            </p>

            <Link href='/app'>
                <button className={styles.btn}>Get started</button>
            </Link>
            
        </div>
    )

}