import { memo, useState } from 'react'
import { IconComp } from '@/utils/modules'

const Workspaces = ({ appData, disAppData }) => {

    return <>{appData?.map((ws, index) => { return <Workspace dt={ws} disAppData={disAppData} key={index} /> })}</>

}

const Workspace = ({ dt, disAppData }) => {

    const [ldt, setLdt] = useState({ displayInput: false, displayOptions: false })

    const currentWorkspace = (id) => {

        disAppData({type: 'CURRENT_WORKSPACE', id})

    }

    const removeWorkspace = (e, id) => {

        if (e && e.stopPropagation) e.stopPropagation();
        disAppData({type: 'REMOVE_WORKSPACE', id})

    }

    const renameWorkspace = (e, id) => {

        disAppData({type: 'UPDATE_WORKSPACE', id, props: {name: e.target.value}})

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
            onClick={() => currentWorkspace(dt.id)}
            onMouseLeave={hideOptions}
            onMouseEnter={showOptions}
        >

            <input
                className={`col-8 ${ldt.displayInput ? 'light-border-bottom' : ''}`}
                defaultValue={dt.name}
                onInput={(e) => renameWorkspace(e, dt.id)}
                disabled={ldt.displayInput ? null : 'disabled'}
            />

            <div className={`col-1 ${ldt.displayOptions ? null : 'hide'}`}>
                <div onClick={switchToEditMode}>
                    {
                        ldt.displayInput ?
                            <IconComp type={'checkmark'} styles={['sm-i', 'light-i']} />
                            : <IconComp type={'edit'} styles={['sm-i', 'light-i']} />
                    }
                </div>
            </div>

            <div className={`col-1 ${ldt.displayOptions ? null : 'hide'}`}>
                <div onClick={(e) => removeWorkspace(e, dt.id)}>
                    <IconComp type={'remove'} styles={['sm-i', 'light-i']} />
                </div>
            </div>

        </div>

    </>

}

export default memo(Workspaces)