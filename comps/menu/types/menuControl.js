import { useDispatch } from 'react-redux'
import { Menu, Option } from './format/modules'
import { SETTINGS_ACTIONS, MENU_ACTIONS, WORKSPACE_ACTIONS } from '@/data/modules'

const MenuControl = ({ posX, posY }) => {

    const dispatch = useDispatch()
    const closeMenu = () => dispatch(MENU_ACTIONS.CLOSE())
    const subMenuTheme = () => {

        return (

            <Menu>
                <Option name={'Dark Theme'} action={actionDarkTheme} />
                <Option name={'Light Theme'} action={actionLightTheme} />
            </Menu>

        )

    }
    const subMenuClean = () => {

        return (

            <Menu>
                <Option name={'Clean Current'} action={actionCleanCurrent} />
                <Option name={'Clean All'} action={actionCleanAll} />
            </Menu>

        )

    }

    // !
    const actionOpenProfile = () => { null, closeMenu() }
    const actionOpenAchrive = () => { null, closeMenu() }

    const actionCleanCurrent = () => { dispatch(WORKSPACE_ACTIONS.CLEAN_CURRENT()), closeMenu() }
    const actionCleanAll = () => { dispatch(WORKSPACE_ACTIONS.CLEAN_ALL()), closeMenu() }
    const actionDarkTheme = () => { dispatch(SETTINGS_ACTIONS.THEME_DARK()), closeMenu() }
    const actionLightTheme = () => { dispatch(SETTINGS_ACTIONS.THEME_LIGHT()), closeMenu() }

    return (

        <>

            <Menu posX={posX} posY={posY}>
                <Option name={'Profile'} action={actionOpenProfile} />
                <Option name={'Archive'} action={actionOpenAchrive} />
                <Option name={'Clean'} subMenu={subMenuClean()} /> 
                <Option name={'Theme'} subMenu={subMenuTheme()} />
            </Menu>

        </>

    )

}

export default MenuControl