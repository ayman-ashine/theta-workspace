import { memo } from "react"
import { useDispatch } from "react-redux"
import { MENU_ACTIONS, WORKSPACE_ACTIONS } from "@/data/modules"
import { Menu, Option } from './format/modules'


const MenuFrame = ({ dt }) => {

    const dispatch = useDispatch()
    const funcChangeTitleFrame = (e) => {dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({id: dt.dt.id, props: { title: e.target.value }}))}
    const funcRemoveFrame = () => {dispatch(WORKSPACE_ACTIONS.REMOVE_TOOL({id: dt.dt.id})), dispatch(MENU_ACTIONS.CLOSE())}

    return (

        <Menu posX={dt.posX} posY={dt.posY}>
            <Option name={dt.dt.title} icon={'edit'} type={'input'} action={funcChangeTitleFrame} />
            <Option name={'Delete'} icon={'delete'} action={funcRemoveFrame} />
        </Menu>

    )

}

export default memo(MenuFrame)