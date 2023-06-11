import { memo } from "react"
import { MenuFormat, OptionFormat } from './modules'

const MenuFrame = ({ dt, disAppData, closeMenu, posX, posY }) => {

    const funcChangeTitleFrame = (e) => {disAppData({type:'UPDATE_FRAME', id: dt.id, props: { title: e.target.value }})}
    const funcArchiveFrame = () => {null /* Archive Frame Data */, funcRemoveFrame(), closeMenu()}
    const funcRemoveFrame = () => {disAppData({type:'REMOVE_FRAME', id: dt.id}), closeMenu()}

    return (

        <MenuFormat posX={posX} posY={posY} closeMenu={closeMenu}>
            <div className='col relative v-center h-space-between sm-py md-px'>
                <input
                    className='full br light-border sm-p'
                    type='text'
                    placeholder='Title'
                    defaultValue={dt.title}
                    onInput={funcChangeTitleFrame}
                />
            </div>
            <OptionFormat name={'Archive'} action={funcArchiveFrame} />
            <OptionFormat name={'Delete'} action={funcRemoveFrame} />
        </MenuFormat>

    )

}

export default memo(MenuFrame)