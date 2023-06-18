import { memo } from "react"
import { useDispatch } from "react-redux"
import { MENU_ACTIONS, WORKSPACE_ACTIONS } from "@/data/modules"
import { Menu, Option } from './format/modules'


const MenuFrame = ({ posX, posY, dt }) => {

    const dispatch = useDispatch()
    const funcChangeTitleFrame = (e) => {dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({id: dt.id, props: { title: e.target.value }}))}
    const funcArchiveFrame = () => {null /* Archive Frame Data */, funcRemoveFrame(), dispatch(MENU_ACTIONS.CLOSE())}
    const funcRemoveFrame = () => {dispatch(WORKSPACE_ACTIONS.REMOVE_TOOL({id: dt.id})), dispatch(MENU_ACTIONS.CLOSE())}

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
            <Option name={'Archive'} action={funcArchiveFrame} />
            <Option name={'Delete'} action={funcRemoveFrame} />
        </Menu>

    )

}

export default memo(MenuFrame)