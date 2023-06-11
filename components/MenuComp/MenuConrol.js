import { memo } from 'react'
import { MenuFormat, OptionFormat } from './modules'

const MenuConrol = ({ disAppData, disAppSettings, closeMenu, posX, posY }) => {

    const subMenuMode = () => {

        return (

            <MenuFormat posX={0} posY={0} closeMenu={closeMenu}>
                <OptionFormat name={'Dark Mode'} action={actionDarkMode} />
                <OptionFormat name={'Light Mode'} action={actionLightMode} />
            </MenuFormat>

        )

    }

    const subMenuClean = () => {

        return (

            <MenuFormat posX={0} posY={0} closeMenu={closeMenu}>
                <OptionFormat name={'Clean Current'} action={actionCleanCurrent} />
                <OptionFormat name={'Clean All'} action={actionCleanAll} />
            </MenuFormat>

        )

    }

    // !
    const actionOpenProfile = () => { null, closeMenu() }
    const actionOpenAchrive = () => { null, closeMenu() }

    const actionDarkMode = () => { disAppSettings({ type: 'DARK_MODE' }), closeMenu() }
    const actionLightMode = () => { disAppSettings({ type: 'LIGHT_MODE' }), closeMenu() }
    const actionCleanCurrent = () => { disAppData({ type: 'CLEAN_CURRENT' }), closeMenu() }
    const actionCleanAll = () => { disAppData({ type: 'CLEAN_ALL' }), closeMenu() }

    return <>

        <MenuFormat posX={posX} posY={posY} closeMenu={closeMenu}>
            <OptionFormat name={'Profile'} action={actionOpenProfile} />
            <OptionFormat name={'Archive'} action={actionOpenAchrive} />
            <OptionFormat name={'Clean'} subMenu={subMenuClean()} />
            <OptionFormat name={'Lighing'} subMenu={subMenuMode()} />
        </MenuFormat>

    </>

}

export default memo(MenuConrol)