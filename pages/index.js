import styles from '@/styles/Home.module.css'
import Link from "next/link"
import { useRouter } from 'next/router'

export default function Home() {

    const app_router = useRouter()

    return (

        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.title}>
                    <img className='md-icon' src="/logo.png"/>
                    <span className='title sm-mx'>Theta Workspace</span>
                </div>
                <div className={styles.links}>
                    <span className={styles.btn}>Contact</span>
                    <span className={styles.btn}>Info</span>
                    <span className={styles.btn}>Login</span>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.aside}>
                    <h1 className='title'>Theta Workspace</h1>
                    <br/>
                    Welcome to Theta Workspace,
                    Boost your productivity by effortlessly creating, organizing, and prioritizing tasks.
                    Take control of your day and embark on a journey towards a more efficient and productive future.
                    Get started now and unlock your true potential.
                    <br/><br/>
                    <span className={styles.btn} onClick={() => app_router.push('/app')}>Get Started</span>
                </div>
                <div className={styles.aside}>
                    <img className={styles.illustration} src="/workspace.png"/>
                </div>
            </div>
            <div className={styles.light_section}>
                <div className={styles.light_aside}>
                    <img className={styles.illustration} src="/work-deadline-concept-3d-illustration.jpg"/>
                </div>
                <div className={styles.light_aside}>
                    We provide you with a range of powerful tools to help you effectively manage your time and boost your productivity.
                </div>
            </div>
        </div>

    )

}

/*
<div className={styles.container}>

            <div className={styles.header}>

                <div className={styles.title}>
                    <img className={styles.logo} src="/logo.png"/>
                    Theta Workspace
                </div>

                <div className={styles.container_links}>
                    <span className={styles.btn}>Info</span>
                    <span className={styles.link}>login</span>
                </div>

            </div>

            <div className={styles.aside}>
                
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

            <div className={styles.aside}>

                <img className={styles.workspace} src="/workspace.png"/>
            
            </div>

        </div>
*/