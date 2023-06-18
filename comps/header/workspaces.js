import { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WORKSPACE_ACTIONS } from '@/data/modules'
import { Icon } from '@/comps/modules'


const Workspaces = () => {

    const workspace = useSelector(state => state.workspace ? state.workspace.workspaces : null)

    return (
        <>
            {
                workspace?.map((dt, index) => {
                    return <Workspace dt={dt} key={index} />
                })
            }
        </>
    )

}

const Workspace = ({ dt }) => {

    const [ldt, setLdt] = useState({ displayInput: false, displayOptions: false })
    const dispatch = useDispatch()
    const workspaceCurrent = (id) => {

        dispatch(WORKSPACE_ACTIONS.CURRENT({ id }))

    }
    const workspaceRename = (e, id) => {

        dispatch(WORKSPACE_ACTIONS.UPDATE({ id, props: { name: e.target.value } }))

    }
    const workspaceRemove = (e, id) => {

        if (e && e.stopPropagation) e.stopPropagation()
        dispatch(WORKSPACE_ACTIONS.REMOVE({ id }))

    }
    const switchToEditMode = () => {

        setLdt(state => ({ ...state, displayInput: !state.displayInput }))

    }
    const showOptions = () => {

        setLdt(state => ({ ...state, displayOptions: true }))

    }
    const hideOptions = () => {

        setLdt(state => ({ ...state, displayOptions: false }))

    }

    return <>

        <div
            className={`${dt.current ? 'bkg-dark' : null} row v-center light-border-right sm-p sm-g`}
            style={{ width: 200 }}
            onClick={() => workspaceCurrent(dt.id)}
            onMouseLeave={hideOptions}
            onMouseEnter={showOptions}
        >

            <input
                className={`col-8 ${ldt.displayInput ? 'light-border-bottom' : ''}`}
                defaultValue={dt.name}
                onInput={(e) => workspaceRename(e, dt.id)}
                disabled={ldt.displayInput ? null : 'disabled'}
            />

            <div className={`col-1 ${ldt.displayOptions ? null : 'hide'}`}>
                <div onClick={switchToEditMode}>
                    {
                        ldt.displayInput ?
                            <Icon type={'checkmark'} styles={['sm-i', 'light-i']} />
                            : <Icon type={'edit'} styles={['sm-i', 'light-i']} />
                    }
                </div>
            </div>

            <div className={`col-1 ${ldt.displayOptions ? null : 'hide'}`}>
                <div onClick={(e) => workspaceRemove(e, dt.id)}>
                    <Icon type={'remove'} styles={['sm-i', 'light-i']} />
                </div>
            </div>

        </div>

    </>

}

export default memo(Workspaces)