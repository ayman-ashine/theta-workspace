import { memo } from "react"
import { MenuFormat, OptionFormat } from './modules'

const MenuFrame = ({ dt, disAppData, closeMenu, posX, posY }) => {

    const subMenuColors = () => {

        return (
            <MenuFormat>
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
            </MenuFormat>
        )

    }

    const funcChangeTitleFrame = (e) => {disAppData({type:'UPDATE_FRAME', id: dt.id, props: { title: e.target.value }})}
    const funcChangeColorFrame = (e) => {disAppData({type:'UPDATE_FRAME', id: dt.id, props: { color: e.target.getAttribute('color') }})}
    const funcMinimizeFrame = () => {disAppData({type:'UPDATE_FRAME', id: dt.id, props: { minimize: !dt.minimize }}), closeMenu()}
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
            <OptionFormat name={'Color'} subMenu={subMenuColors()} />
            <OptionFormat name={dt.minimize ? 'Expand' : 'Minimize'} action={funcMinimizeFrame} />
            <OptionFormat name={'Archive'} action={funcArchiveFrame} />
            <OptionFormat name={'Delete'} action={funcRemoveFrame} />
        </MenuFormat>

    )

}

export default memo(MenuFrame)