import styles from './styles.module.css'
import { useState } from 'react'
import { Comp_Icon } from '@/utils/modules'    

export default function Comp_Menu_Option({ name, icon_data, func, sub_menu }) {

    const [subMenu, setSubMenu] = useState(false)

    return (

            <div
                className={styles.option}
                onClick={func}
                onMouseEnter={() => setSubMenu(true)}
                onMouseLeave={() => setSubMenu(false)}
            >
                {
                    icon_data?
                    <Comp_Icon data={icon_data} />
                    :
                    null
                }

                <div className={styles.option_name}>
                    {name}
                </div>

                <div className={[styles.option_extend, sub_menu?'':'hide'].join(' ')}>▶</div>
                
                <div className={[styles.option_sub_menu, subMenu?'':'hide'].join(' ')}>

                    {sub_menu}
                    
                </div>

            </div>

    )

}