import styles from './styles.module.css'
import Comp_Control from './comp_control'
import Comp_Tab from './comp_tab'
import Comp_Add_Tab from './comp_add_tab'
import { useContext } from 'react'
import { App_Context } from '@/utils/modules'

export default function Comp_Header() {

    const { appData, setAppData } = useContext(App_Context)

    return (

        <div className={styles.container}>

            <Comp_Control />

            <div className={styles.container_tabs}>

                {
                    appData.map(workspace => {

                        return <Comp_Tab workspace={workspace} key={workspace.id} />

                    })
                }

                <Comp_Add_Tab />

            </div>

        </div>

    )

}