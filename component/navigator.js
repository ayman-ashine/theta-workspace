import styles from '@/styles/Navigator.module.css'
import { useContext } from 'react'
import { Manager_Data, LocalSaveData, Context, Generator } from '@/utils/modules'

export default function Navigator() {

    const [workspace, setWorkspace] = useContext(Context)

    const workspace_add = () => {

        Manager_Data.select_workspace('')

        Manager_Data.add_workspace(
            {
                id: Generator(),
                select: true,
                name: 'new tab',
                frames: [],
            }
        )

    }

    const workspace_remove = (e, _id, _index) => {

        if (e && e.stopPropagation) e.stopPropagation();

        if (workspace[_index].select && workspace.length > 1) {
            if (_index) Manager_Data.select_workspace(workspace[0].id)
            else Manager_Data.select_workspace(workspace[1].id)
        }

        Manager_Data.remove_workspace(_id)


    }

    return (

        <div className={styles.container}>

            <div className={styles.container_tab}>

                <div className={styles.menu}>

                    <img
                        className={styles.icon}
                        onClick={() => LocalSaveData(workspace)}
                        src="https://img.icons8.com/ios-glyphs/25/FFFFFF/bookmark-ribbon.png"
                    />

                </div>

                {
                    workspace.map((ws, index) => {

                        return (

                            <div
                                className={[styles.tab, ws.select ? styles.select : ''].join(' ')}
                                key={ws.id}
                                onClick={() => Manager_Data.select_workspace(ws.id)}
                            >
                                <img className={styles.icon} src="https://img.icons8.com/material-outlined/20/FFFFFF/tab.png" />
                                <div className={styles.name}>{ws.name}</div>
                                <div className={styles.remove}>
                                    <img
                                        className={styles.icon}
                                        onClick={(e) => workspace_remove(e, ws.id, index)}
                                        src="https://img.icons8.com/windows/20/FFFFFF/delete-sign.png"
                                    />
                                </div>
                            </div>

                        )

                    })
                }

                <div className={styles.add}>
                    <img
                        className={styles.icon}
                        onClick={workspace_add}
                        src="https://img.icons8.com/ios/25/FFFFFF/plus-math--v1.png"
                    />
                </div>

            </div>

        </div>

    )

}