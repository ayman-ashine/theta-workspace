import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { HEADER_DATA, MENU_ACTIONS } from '@/data/modules' 
import { Icon } from '@/comps/modules'

const MENU_TYPE = 'MENU_CONTROL'

const Control = () => {

    const dispatch = useDispatch()
    const openMenu = (e) => {
        dispatch(MENU_ACTIONS.OPEN({
            type: MENU_TYPE,
            posX: e.target.offsetLeft,
            posY: e.target.offsetParent.offsetHeight,
        }))
    }

    return (

        <div className='flex v-center h-center relative bkg-dark light-border-right' style={{ width: HEADER_DATA.control.width }}>
            <div onClick={openMenu}>
                <Icon type='menu-1' styles={['md-i', 'light-i']} />
            </div>
        </div>

    )

}

export default memo(Control)