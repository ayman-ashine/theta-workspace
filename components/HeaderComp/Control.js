import { memo, useState } from 'react'
import {
    IconComp,
    MenuConrol
} from '@/utils/modules'

const Control = ({ disAppData, disAppSettings }) => {

    const [ldt, setLdt] = useState({ menu: null })

    const closeMenu = () => setLdt(state => ({ ...state, menu: null }))

    const openMenu = (e) => {

        if (ldt.menu) closeMenu()
        else setLdt(state => ({
            menu:
                <MenuConrol
                    closeMenu={closeMenu}
                    posX={e.target.offsetLeft}
                    posY={e.target.offsetParent.offsetHeight}
                    disAppData={disAppData}
                    disAppSettings={disAppSettings}
                />
        }))

    }

    return (
        <>
            <div className='flex v-center h-center relative bkg-dark light-border-right' style={{ width: 60 }}>
                <div onClick={openMenu}>
                    <IconComp type='menu-1' styles={['md-i', 'light-i']} />
                </div>
            </div>
            {ldt.menu}
        </>
    )

}

export default memo(Control)