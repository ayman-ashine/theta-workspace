import styles from './styles.module.css'
import { useState } from 'react'    

export default function Comp_Menu_Option(params) {

    const [subMenu, setSubMenu] = useState(false)

    return (

            <div
                className={styles.option}
                onClick={params.func}
                onMouseEnter={() => setSubMenu(true)}
                onMouseLeave={() => setSubMenu(false)}
            >
                {
                    params.icon?
                    <img className='sm-icon' src={params.icon}/>
                    :
                    null
                }

                <div className={styles.option_name}>
                    {params.name}
                </div>

                <div className={[styles.option_extend, params.sub_menu?'':'hide'].join(' ')}>▶</div>
                
                <div className={[styles.option_sub_menu, subMenu?'':'hide'].join(' ')}>

                    {params.sub_menu}
                    
                </div>

            </div>

    )

}