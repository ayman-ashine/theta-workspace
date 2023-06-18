import { memo } from "react"
import MenuControl from './types/menuControl'
import MenuTool from './types/menuTool'
import MenuFrame from './types/menuFrame'
import MenuClip from './types/menuClip'

const Menu = ({ menu }) => {

    switch (menu.type) {

        case 'MENU_CONTROL':
            return <MenuControl posX={menu.posX} posY={menu.posY} dt={menu.dt} />
        case 'MENU_TOOL':
            return <MenuTool posX={menu.posX} posY={menu.posY} dt={menu.dt} />
        case 'MENU_FRAME':
            return <MenuFrame posX={menu.posX} posY={menu.posY} dt={menu.dt} />
        case 'MENU_CLIP':
            return <MenuClip posX={menu.posX} posY={menu.posY} dt={menu.dt} />

    }

}

export default memo(Menu)