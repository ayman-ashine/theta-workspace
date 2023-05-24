import styles from './styles.module.css'
import { useContext, useState } from 'react'
import { Manager_Data, Context, Menu_Main } from '@/utils/modules'

export default function Bar() {

    const [workspace, setWorkspace] = useContext(Context)
    const [mainMenu, setMainMenu] = useState({menu: null, display: false})
    
    const add_workspace = () => {

        Manager_Data.select_workspace('')
        Manager_Data.add_workspace()

    }

    const remove_workspace = (e, _id, _index) => {

        if (e && e.stopPropagation) e.stopPropagation();

        if (workspace[_index].select && workspace.length > 1) {
            if (_index) Manager_Data.select_workspace(workspace[0].id)
            else Manager_Data.select_workspace(workspace[1].id)
        }

        Manager_Data.remove_workspace(_id)

    }

    const grab = (_id) => {

        const rest = () => {

            document.removeEventListener('mousemove', grab)
            document.removeEventListener('mouseup', rest)

        }

        document.addEventListener('mouseup', rest)

    }

    const select_grab_workspace = (_id) => {

        Manager_Data.select_workspace(_id)
        document.addEventListener('mousemove', grab)

    }

    const tabs = () => {

        return workspace.map( (ws, index) => {

            return (

                <div
                    className={[styles.tab, ws.select ? styles.select : ''].join(' ')}
                    onClick={() => select_grab_workspace(ws.id)}
                    key={ws.id}
                >
                    <img className='sm-icon' src="https://img.icons8.com/material-outlined/50/FFFFFF/tab.png" />
                    <div className={styles.name}>{ws.name}</div>
                    <div className={styles.remove}>
                        <div className='hover-effect-circle' onClick={(e) => remove_workspace(e, ws.id, index)}>
                            <img className='sm-icon' src="https://img.icons8.com/windows/50/FFFFFF/delete-sign.png"/>
                        </div>
                    </div>
                </div>

            )

        })

    }

    /* Open Main Menu */
    const open_menu = (e) => {

        if(!mainMenu.display) {

            let pos_x = e.target.offsetLeft
            let pos_y = e.target.offsetParent.offsetHeight

            setMainMenu({
                menu: <Menu_Main pos_x={pos_x} pos_y={pos_y} display={true} close={close_menu}/>,
                display: true
            })

        } else close_menu()
      
    }

    const close_menu = () => {

        setMainMenu({
            menu: null,
            display: false
        })

    }

    return (

        <div className={styles.container}>

            <div className={[styles.control].join(' ')}>

                <div className='flex-start'>
                    <div className='hover-effect-square' onClick={open_menu}>
                        <img className='md-icon' src="https://img.icons8.com/fluency-systems-regular/50/FFFFFF/menu--v1.png"/>
                    </div>
                </div>

                <div className='flex-start'>
                    <label class={styles.switch}>
                        <input type="checkbox"/>
                        <span class={styles.slider}></span>
                    </label>
                </div>

            </div>

            { tabs() }

            <div className='flex-start sm-p'>

                <div className='hover-effect-square' onClick={add_workspace}>
                    <img className='md-icon' src="https://img.icons8.com/ios/50/FFFFFF/plus-math--v1.png"/>
                </div>

            </div>

            { mainMenu.menu }

        </div>

    )

}