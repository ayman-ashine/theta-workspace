import { useDispatch } from 'react-redux'
import { Menu, Option } from './format/modules'
import { SETTINGS_ACTIONS, MENU_ACTIONS, WORKSPACE_ACTIONS, ASIDE_ACTIONS } from '@/data/modules'

const MenuControl = ({ dt }) => {

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
    const actionOpenProfile = () => { dispatch(ASIDE_ACTIONS.OPEN({ type: 'ASIDE_PROFILE' })), closeMenu() }
    const actionOpenAchrive = () => { dispatch(ASIDE_ACTIONS.OPEN({ type: 'ASIDE_ARCHIVE' })), closeMenu() }

    const actionCleanCurrent = () => { dispatch(WORKSPACE_ACTIONS.CLEAN_CURRENT()), closeMenu() }
    const actionCleanAll = () => { dispatch(WORKSPACE_ACTIONS.CLEAN_ALL()), closeMenu() }
    const actionDarkTheme = () => { dispatch(SETTINGS_ACTIONS.THEME_DARK()), closeMenu() }
    const actionLightTheme = () => { dispatch(SETTINGS_ACTIONS.THEME_LIGHT()), closeMenu() }

    return (

        <>

            <Menu posX={dt.posX} posY={dt.posY} side={dt.side}>
                <Option name={'Profile'} icon={'profile'} action={actionOpenProfile} />
                <Option name={'Archive'} icon={'archive'} action={actionOpenAchrive} />
                <Option name={'Clean'} icon={'clean'} subMenu={subMenuClean()} /> 
                <hr className='col-10 light-border-t sm-my'/>
                <Option name={'Theme'} icon={'theme'} subMenu={subMenuTheme()} />
            </Menu>

        </>

    )

}

export default MenuControl