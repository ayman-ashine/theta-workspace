import styles from './styles.module.css'
import { useContext } from 'react'
import { Manager_Data, LocalSaveData, Context, Generator } from '@/utils/modules'

export default function Bar() {

    const [workspace, setWorkspace] = useContext(Context)

    const add_workspace = () => {

        Manager_Data.select_workspace('')

        Manager_Data.add_workspace( {
            id: Generator(),
            name: 'new tab',
            select: true,
            frames: [],
        })

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
                    <img src="https://img.icons8.com/material-outlined/20/FFFFFF/tab.png" />
                    <div className={styles.name}>{ws.name}</div>
                    <div className={styles.remove}>
                        <div className="circle" onClick={(e) => remove_workspace(e, ws.id, index)}>
                            <img src="https://img.icons8.com/windows/20/FFFFFF/delete-sign.png"/>
                        </div>
                    </div>
                </div>

            )

        })

    }

    return (

        <div className={styles.container}>

            <div className={[styles.tab, styles.control].join(' ')}>

                <div className='square' onClick={() => LocalSaveData(workspace)}>
                    <img src="https://img.icons8.com/fluency-systems-regular/25/FFFFFF/menu--v1.png"/>
                </div>

            </div>

            { tabs() }

            <div className={styles.add}>

                <div className='square' onClick={add_workspace}>
                    <img src="https://img.icons8.com/ios/25/FFFFFF/plus-math--v1.png"/>
                </div>

            </div>

        </div>

    )

}