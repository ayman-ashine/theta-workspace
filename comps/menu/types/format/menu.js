import { useDispatch } from "react-redux"
import { MENU_DATA, MENU_ACTIONS } from "@/data/modules"

const Menu = ({ posX, posY, children }) => {

    const dispatch = useDispatch()

    return (

        <>

            <div className='full absolute t-0 l-0 z-index' onMouseDown={() => dispatch(MENU_ACTIONS.CLOSE())}></div>
            <div
                className='row absolute z-index br bg-dark light-border animation-translateY sm-py'
                style={{ left: posX + 'px', top: posY + 'px', width: MENU_DATA.width }}
            >

                {children}

            </div>

        </>

    )

}

export default Menu