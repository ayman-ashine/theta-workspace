import { memo } from "react"
import { useDispatch } from "react-redux"
import { MENU_ACTIONS, WORKSPACE_ACTIONS } from "@/data/modules"
import { Menu, Option } from './format/modules'

const MenuFrame = ({ posX, posY, dt }) => {

    const dispatch = useDispatch()
    const subMenuColors = () => {

        return (
            <Menu>
                <div className='col row sm-py md-px'>
                    <div className={`col-1 hover-effect-brightness bkg-red lg-py`} color="bkg-red" onClick={funcChangeColorFrame}></div>
                    <div className={`col-1 hover-effect-brightness bkg-pink`} color="bkg-pink" onClick={funcChangeColorFrame}></div>
                    <div className={`col-1 hover-effect-brightness bkg-purple`} color="bkg-purple" onClick={funcChangeColorFrame}></div>
                    <div className={`col-1 hover-effect-brightness bkg-indigo`} color="bkg-indigo" onClick={funcChangeColorFrame}></div>
                    <div className={`col-1 hover-effect-brightness bkg-blue`} color="bkg-blue" onClick={funcChangeColorFrame}></div>
                    <div className={`col-1 hover-effect-brightness bkg-cyan`} color="bkg-cyan" onClick={funcChangeColorFrame}></div>
                    <div className={`col-1 hover-effect-brightness bkg-teal`} color="bkg-teal" onClick={funcChangeColorFrame}></div>
                    <div className={`col-1 hover-effect-brightness bkg-green`} color="bkg-green" onClick={funcChangeColorFrame}></div>
                    <div className={`col-1 hover-effect-brightness bkg-yellow`} color="bkg-yellow" onClick={funcChangeColorFrame}></div>
                    <div className={`col-1 hover-effect-brightness bkg-orange`} color="bkg-orange" onClick={funcChangeColorFrame}></div>
                </div>
            </Menu>
        )

    }
    const funcChangeTitleFrame = (e) => {
        dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({
            id: dt.id,
            workspaceId: dt.workspaceId,
            props: { title: e.target.value }
        }))
    }
    const funcChangeColorFrame = (e) => {
        dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({
            id: dt.id,
            props: { color: e.target.getAttribute('color') }
        }))
    }
    const funcMinimizeFrame = () => {
        dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({
            id: dt.id,
            props: { minimize: !dt.minimize }
        }))
        dispatch(MENU_ACTIONS.CLOSE())
    }
    const funcArchiveFrame = () => {
        /* Archive Frame Data */
        funcRemoveFrame()
        dispatch(MENU_ACTIONS.CLOSE())
    }
    const funcRemoveFrame = () => {
        dispatch(MENU_ACTIONS.CLOSE())
        dispatch(WORKSPACE_ACTIONS.REMOVE_TOOL({id: dt.id, workspaceId: dt.workspaceId,}))
    }

    return (

        <Menu posX={posX} posY={posY}>
            <div className='col relative v-center h-space-between sm-py md-px'>
                <input
                    className='full br light-border sm-p'
                    type='text'
                    placeholder='Title'
                    defaultValue={dt.title}
                    onInput={funcChangeTitleFrame}
                />
            </div>
            <Option name={'Color'} subMenu={subMenuColors()} />
            <Option name={dt.minimize ? 'Expand' : 'Minimize'} action={funcMinimizeFrame} />
            <Option name={'Archive'} action={funcArchiveFrame} />
            <Option name={'Delete'} action={funcRemoveFrame} />
        </Menu>

    )

}

export default memo(MenuFrame)