import { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WORKSPACE_ACTIONS } from '@/data/modules'
import { Icon } from '@/comps/modules'


const Tabs = () => {

    const workspace = useSelector(state => state.workspace ? state.workspace.workspaces : null)
    const [gWs, setGWs] = useState(null)
    const dispatch = useDispatch()

    const workspaceCurrent = (e, dt) => {

        if (e && e.stopPropagation) e.stopPropagation()
        dispatch(WORKSPACE_ACTIONS.CURRENT({ id: dt.id }))

    }

    const workspaceRename = (e, dt) => {

        if (e && e.stopPropagation) e.stopPropagation()
        dispatch(WORKSPACE_ACTIONS.UPDATE({ id: dt.id, props: { name: e.target.value } }))

    }

    const workspaceRemove = (e, dt) => {

        if (e && e.stopPropagation) e.stopPropagation()
        dispatch(WORKSPACE_ACTIONS.REMOVE({ id: dt.id }))

    }

    const workspaceEdit = (e, dt) => {

        if (e && e.stopPropagation) e.stopPropagation()
        dispatch(WORKSPACE_ACTIONS.UPDATE({ id: dt.id, props: { edit: !dt.edit } }))

    }

    const grabWorkspace = (e, dt) => {

        if (e && e.stopPropagation) e.stopPropagation()

        setGWs(dt)

        const rest = () => {

            document.removeEventListener('mouseup', rest)
            setGWs(null)

        }

        document.addEventListener('mouseup', rest)

    }

    const switchWorkspace = (dt) => {

        if (gWs && gWs.id !== dt.id) {

            dispatch(WORKSPACE_ACTIONS.SWITCH({ ws1: {...gWs, current: true}, ws2: dt }))

        }

    }

    return (
        <>
            {
                workspace?.map(dt => {

                    return (
                        <div
                            id={dt.id}
                            className={`${!dt.current ? 'low-5' : 'bright'} ${gWs && gWs.id === dt.id ? 'translate bright' : null} row relative z-index v-center hover bg-dark light-border-r animation-translateX sm-p sm-g`}
                            style={{
                                width: 200,
                                zIndex: gWs && gWs.id === dt.id ? 0 : null
                            }}
                            onMouseDown={(e) => {
                                workspaceCurrent(e, dt)
                                grabWorkspace(e, dt)
                            }}
                            onMouseEnter={() => switchWorkspace(dt)}
                            key={dt.id}
                        >

                            <input
                                className={`col-8 title ${dt.edit ? 'light-border' : null}`}
                                defaultValue={dt.name}
                                onInput={(e) => workspaceRename(e, dt)}
                                type='text'
                                disabled={!dt.edit ? 'disabled' : null}
                            />

                            <div className={`col-1 child`}>
                                <div onMouseDown={(e) => workspaceEdit(e, dt)}>
                                    {
                                        dt.edit ?
                                            <Icon type={'checkmark'} styles={['sm-i', 'light-i']} />
                                            : <Icon type={'edit'} styles={['sm-i', 'light-i']} />
                                    }
                                </div>
                            </div>

                            <div className={`col-1 child`}>
                                <div onMouseDown={(e) => workspaceRemove(e, dt)}>
                                    <Icon type={'remove'} styles={['sm-i', 'light-i']} />
                                </div>
                            </div>

                        </div>
                    )

                })
            }
        </>
    )

}

export default memo(Tabs)