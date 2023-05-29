import styles from './styles.module.css'
import { useState } from 'react'
import Control_Menu from './control_menu'
import { Comp_Icon } from '@/utils/modules'

export default function Comp_Control() {

    const [menu, setMenu] = useState(null)

    const open_menu = (e) => {

        if (menu) setMenu(null)
        else setMenu(<Control_Menu
            pos_x={e.target.offsetParent.offsetLeft}
            pos_y={e.target.offsetParent.offsetHeight}
            close={close_menu}
        />)

    }

    const close_menu = () => setMenu(null)

    return (

        <div className={styles.control}>

            <div onClick={open_menu}>
                <Comp_Icon data={{ icon_type: 'menu-1', icon_styles: ['md-icon', 'light-icon'] }} />
            </div>
            
            {menu}

        </div>

    )

}