import styles from './styles.module.css'

export default function Comp_Info({ act }) {

    if(act) return null

    return (

        <div className={styles.container}>

            <div>
                Add New Workspace
                <br/>
                Right Click To Open Tool Menu
            </div>
            
        </div>

    )

}