import { useState } from 'react'
import { IconsComp, AppDataManager } from '@/utils/modules'

export default function TabsComp({ appData }) {

    return (
        <>
            {
                appData?.map(ws => {

                    return <TabComp workspace={ws} key={ws.id} />

                })
            }
        </>
    )

}

export function TabComp({ workspace }) {

    const [localData, setLocalData] = useState({ editMode: false, showOptions: false })

    const currentWorkspace = (id) => {

        AppDataManager.currentWorkspace(id)

    }

    const removeWorkspace = (e, id) => {

        if (e && e.stopPropagation) e.stopPropagation();
        AppDataManager.removeWorkspace(id)

    }

    const renameWorkspace = (e, id) => {

        AppDataManager.renameWorkspace(id, e.target.value)

    }

    const switchToEditMode = () => {

        setLocalData(state => ({ ...state, editMode: !state.editMode }))

    }

    const showOptions = () => {

        setLocalData(state => ({ ...state, showOptions: true }))

    }

    const hideOptions = () => {

        setLocalData(state => ({ ...state, showOptions: false }))

    }

    return (

        <div
            className={`row v-center sm-p sm-g light-border-right ${workspace.current ? 'bkg-dark' : 'hover-effect-opacity'}`}
            style={{ width: 200 }}
            onClick={() => currentWorkspace(workspace.id)}
            onMouseLeave={hideOptions}
            onMouseEnter={showOptions}
        >

            <input
                className={`col-8 ${localData.editMode ? 'light-border-bottom' : null}`}
                defaultValue={workspace.name}
                onInput={(e) => renameWorkspace(e, workspace.id)}
                disabled={localData.editMode ? null : 'disabled'}
            />

            <div className={`col-1 ${localData.showOptions?null:'hide'}`}>
                <div onClick={switchToEditMode}>
                    {
                        localData.editMode ?
                            <IconsComp data={{ icon_type: 'checkmark', icon_styles: ['sm-i', 'light-i'] }} />
                            :
                            <IconsComp data={{ icon_type: 'edit', icon_styles: ['sm-i', 'light-i'] }} />
                    }
                </div>
            </div>

            <div className={`col-1 ${localData.showOptions?null:'hide'}`}>
                <div onClick={(e) => removeWorkspace(e, workspace.id)}>
                    <IconsComp data={{ icon_type: 'remove', icon_styles: ['sm-i', 'light-i'] }} />
                </div>
            </div>

        </div>

    )

}