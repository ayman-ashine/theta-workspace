import { memo } from "react"
import { useSelector } from "react-redux"
import MenuControl from './types/menuControl'
import MenuTool from './types/menuTool'
import MenuFrame from './types/menuFrame'
import MenuClip from './types/menuClip'

const Menu = () => {

    const menu = useSelector(state => state.menu)

    if(!menu) return

    switch (menu.type) {

        case 'MENU_CONTROL':
            return <MenuControl dt={menu} />
        case 'MENU_TOOL':
            return <MenuTool dt={menu} />
        case 'MENU_FRAME':
            return <MenuFrame dt={menu} />
        case 'MENU_CLIP':
            return <MenuClip dt={menu} />

    }

}

export default memo(Menu)