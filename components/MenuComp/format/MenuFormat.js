import { memo } from "react"
import { AppDefaultData } from "@/utils/modules"

const MenuFormat = ({ posX, posY, closeMenu, children }) => {

    return <>

        <div className='full absolute z-index' onMouseDown={closeMenu}></div>
        <div
            className='row absolute z-index br bkg-dark-primary light-border sm-py'
            style={{ left: posX + 'px', top: posY + 'px', width: AppDefaultData.MENU.width}}
        >
            {children}
        </div>

    </>

}

export default memo(MenuFormat)