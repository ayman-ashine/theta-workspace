import { useState } from 'react'
import {
    IconsComp,
    OptionFormatComp,
    MenuFormatComp,
    AppDataManager,
    AppSettingsManager,
} from '@/utils/modules'

export default function ControlComp() {

    const [localData, setLocalData] = useState({ menu: null })

    const closeMenu = () => setLocalData(state => ({ ...state, menu: null }))

    const openMenu = (e) => {

        if (localData.menu) closeMenu()
        else setLocalData(state => ({
            ...state,
            menu: <MenuComp
                closeFunc={closeMenu}
                pos_x={e.target.offsetLeft}
                pos_y={e.target.offsetParent.offsetHeight}
            />
        }))

    }

    return (
        <>
            <div className='flex v-center h-center relative bkg-dark light-border-right' style={{ width: 60 }}>
                <div onClick={openMenu}>
                    <IconsComp data={{ icon_type: 'menu-1', icon_styles: ['md-i', 'light-i'] }} />
                </div>
            </div>
            {localData.menu}
        </>
    )

}

export function MenuComp({ pos_x, pos_y, closeFunc }) {

    const menuClean = () => {

        return (
            <MenuFormatComp>
                <OptionFormatComp name={'Clean Current'} func={funcCleanCurrentWorkspace} />
                <OptionFormatComp name={'Clean All'} func={funcCleanAllWorkspaces} />
            </MenuFormatComp>
        )

    }

    const menuLighing = () => {

        return (
            <MenuFormatComp>
                <OptionFormatComp name={'Dark Mode'} func={funcSetDarkMode} />
                <OptionFormatComp name={'Light Mode'} func={funcSetLightMode} />
            </MenuFormatComp>
        )

    }

    const menuAppearance = () => {

        return (
            <MenuFormatComp>
                <OptionFormatComp name={'Low Appearance'} />
                <OptionFormatComp name={'Height Appearance'} />
            </MenuFormatComp>
        )

    }

    const funcCleanCurrentWorkspace = () => {

        AppDataManager.cleanCurrentWorkspace()
        callback(closeFunc)

    }

    const funcCleanAllWorkspaces = () => {

        AppDataManager.cleanAllWorkspaces()
        callback(closeFunc)

    }

    const funcSetDarkMode = () => {

        AppSettingsManager.setDarkMode()
        callback(closeFunc)

    }

    const funcSetLightMode = () => {

        AppSettingsManager.setLightMode()
        callback(closeFunc)

    }

    const callback = (func) => func()

    return (
        <MenuFormatComp pos_x={pos_x} pos_y={pos_y} closeFunc={closeFunc}>
            <OptionFormatComp name={'Profile Settings'} />
            <OptionFormatComp name={'Clean'} subMenu={menuClean()} />
            <OptionFormatComp name={'Theme'} subMenu={menuLighing()} />
            <OptionFormatComp name={'Appearance'} subMenu={menuAppearance()} />
        </MenuFormatComp>
    )

}