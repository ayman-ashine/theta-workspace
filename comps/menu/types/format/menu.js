import { useDispatch } from "react-redux"
import { MENU_DATA, MENU_ACTIONS } from "@/data/modules"

const Menu = ({ posX, posY, side, children }) => {

    const dispatch = useDispatch()

    return (

        <>

            <div className='full absolute t-0 l-0 z-index' onMouseDown={() => dispatch(MENU_ACTIONS.CLOSE())}></div>
            <div
                className={`row absolute ${side ? side : 'side-tl'} z-index bg-primary shadow light-border br animation-translateY sm-py`}
                style={{ left: posX + 'px', top: posY + 'px', width: MENU_DATA.width }}
            >

                {children}

            </div>

        </>

    )

}

export default Menu