import { memo } from "react"
import { useDispatch } from "react-redux"
import { MENU_ACTIONS, WORKSPACE_ACTIONS, ARCHIVE_ACTIONS } from "@/data/modules"
import { Menu, Option } from './format/modules'


const MenuFrame = ({ dt }) => {

    const dispatch = useDispatch()
    const subMenuColors = () => {

        return (
            <Menu>
                <div className='col-10 row sm-py md-px'>
                    <div className={`col-10 effect-brightness bg-red sm-p`} color="bg-red" onClick={funcChangeColorFrame}></div>
                    <div className={`col-10 effect-brightness bg-pink sm-p`} color="bg-pink" onClick={funcChangeColorFrame}></div>
                    <div className={`col-10 effect-brightness bg-purple sm-p`} color="bg-purple" onClick={funcChangeColorFrame}></div>
                    <div className={`col-10 effect-brightness bg-indigo sm-p`} color="bg-indigo" onClick={funcChangeColorFrame}></div>
                    <div className={`col-10 effect-brightness bg-blue sm-p`} color="bg-blue" onClick={funcChangeColorFrame}></div>
                    <div className={`col-10 effect-brightness bg-cyan sm-p`} color="bg-cyan" onClick={funcChangeColorFrame}></div>
                    <div className={`col-10 effect-brightness bg-teal sm-p`} color="bg-teal" onClick={funcChangeColorFrame}></div>
                    <div className={`col-10 effect-brightness bg-green sm-p`} color="bg-green" onClick={funcChangeColorFrame}></div>
                    <div className={`col-10 effect-brightness bg-yellow sm-p`} color="bg-yellow" onClick={funcChangeColorFrame}></div>
                    <div className={`col-10 effect-brightness bg-orange sm-p`} color="bg-orange" onClick={funcChangeColorFrame}></div>
                </div>
            </Menu>
        )

    }
    const funcChangeTitleFrame = (e) => {
        dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({
            id: dt.dt.id,
            workspaceId: dt.dt.workspaceId,
            props: { title: e.target.value }
        }))
    }
    const funcChangeColorFrame = (e) => {
        dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({
            id: dt.dt.id,
            props: { color: e.target.getAttribute('color') }
        }))
    }
    const funcMinimizeFrame = () => {

        dispatch(MENU_ACTIONS.CLOSE())

        dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({
            id: dt.dt.id,
            props: { minimize: !dt.dt.minimize }
        }))

    }
    const funcArchiveFrame = () => {
        
        dispatch(MENU_ACTIONS.CLOSE())

        if(dt.dt.archive) {
            funcRestoreFrame()
            return
        }
        dispatch(ARCHIVE_ACTIONS.ADD({ tl: {...dt.dt, posX: 0, posY: 0, archive: true, minimize: false, position: 'relative'} }))
        funcRemoveFrame()
        
    }
    const funcRestoreFrame = () => {
        dispatch(MENU_ACTIONS.CLOSE())
        dispatch(WORKSPACE_ACTIONS.ADD_TOOL({...dt.dt, posX: 0, posY: 0, archive: false, minimize: false, position: 'absolute'}))
        dispatch(ARCHIVE_ACTIONS.POP({ tl: dt.dt }))
    }
    const funcRemoveFrame = () => {
        dispatch(MENU_ACTIONS.CLOSE())
        dispatch(WORKSPACE_ACTIONS.REMOVE_TOOL({ id: dt.dt.id, workspaceId: dt.dt.workspaceId, }))
    }

    return (

        <Menu posX={dt.posX} posY={dt.posY}>
            <Option name={dt.dt.title} icon={'edit'} type={'input'} action={funcChangeTitleFrame} />
            <Option name={'Color'} icon={'color'} subMenu={subMenuColors()} />
            <Option name={dt.dt.minimize ? 'Expand' : 'Minimize'} icon={dt.dt.minimize ? 'expand' : 'minimize'} action={funcMinimizeFrame} />
            <Option name={dt.dt.archive ? 'Restore' : 'Archive'} icon={'archive'} action={funcArchiveFrame} />
            <Option name={'Delete'} icon={'delete'} action={funcRemoveFrame} />
        </Menu>

    )

}

export default memo(MenuFrame)