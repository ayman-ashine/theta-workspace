import styles from '@/styles/Navigator.module.css'
import { useContext } from 'react'
import { Generator } from '@/utils/generator'
import { Context } from '@/component/context'
import { LocalSaveData } from '@/utils/local_data'
import M_Workspace from '@/component/m_workspace'

export default function Navigator() {

    const [workspace, setWorkspace] = useContext(Context)

    const add_workspace = () => {

        M_Workspace.select_workspace('')

        M_Workspace.add_workspace(
            {
                id: Generator(),
                name: 'new workspace',
                frames: [],
                select: true
            }    
        )

    }

    const workspace_remove = (e, _id, _index) => {

        if (e && e.stopPropagation) e.stopPropagation();

        if (workspace[_index].select && workspace.length > 1) {
            if (_index) M_Workspace.select_workspace(workspace[0].id)
            else M_Workspace.select_workspace(workspace[1].id)
        }

        M_Workspace.remove_workspace(_id)


    }

    return (

        <div className={styles.container}>

            <div className={styles.tabs}>

                {
                    workspace.map((ws, index) => {

                        return (

                            <div
                                className={[styles.tab, ws.select ? styles.select : ''].join(' ')}
                                key={ws.id}
                                onClick={() => M_Workspace.select_workspace(ws.id)}
                            >
                                <div className={styles.name}>{ws.name}</div>
                                <div className={styles.remove}>
                                    <img
                                        className={styles.remove_icon}
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
                        className={styles.add_icon}
                        onClick={add_workspace}
                        src="https://img.icons8.com/ios/25/FFFFFF/plus-math--v1.png"
                    />
                </div>

            </div>

            <div className={styles.save}>
                <img
                    className={styles.add_icon}
                    onClick={() => LocalSaveData(workspace)}
                    src="https://img.icons8.com/ios-glyphs/25/FFFFFF/bookmark-ribbon.png"
                />
            </div>

        </div>

    )

}