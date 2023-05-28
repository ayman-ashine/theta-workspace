import styles from './styles.module.css'
import { useState } from 'react'
import Control_Menu from './control_menu'

export default function Comp_Control() {

    const [menu, setMenu] = useState(null)

    const open_menu = (e) => {

        if(menu) setMenu(null)
        else setMenu(<Control_Menu
            pos_x={e.target.offsetParent.offsetLeft}
            pos_y={e.target.offsetParent.offsetHeight}
            close={close_menu}
        />)

    }

    const close_menu = () => setMenu(null)

    return (

        <div className={styles.control}>

            <div className='flex-start' onClick={open_menu}>
                <div className='hover-effect-square'>
                    <img
                        className='md-icon'
                        src="https://img.icons8.com/fluency-systems-regular/50/FFFFFF/menu--v1.png"
                    />
                </div>
            </div>

            {menu}

        </div>

    )

}