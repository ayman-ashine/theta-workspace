import { memo } from "react"
import { useDispatch } from "react-redux"
import { MENU_ACTIONS, WORKSPACE_ACTIONS } from "@/data/modules"
import { Menu, Option } from './format/modules'

const MenuFrame = ({ posX, posY, dt }) => {

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
            <div className='col-10 relative v-center h-space-between sm-py md-px'>
                <input
                    className='full br light-border light-placeholder sm-p'
                    type='text'
                    placeholder='Write your title...'
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