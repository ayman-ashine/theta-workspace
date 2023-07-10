import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { POPUPS_ACTIONS } from "@/data/modules"
import { Icon } from "@/comps/modules"


const Dialog = () => {

    // Get Text & Function
    
    const popups = useSelector(state => state.popups)
    const dispatch = useDispatch()
    const closeDailog = () => dispatch(POPUPS_ACTIONS.CLOSE())
    const execAction = () => {
        popups.action()
        closeDailog()
    }

    return Object.keys(popups).length ? (

        <>
            <div className="full absolute t-0 l-0 bg-l-dark z-index" onClick={closeDailog}></div>
            <div className="row-6 h-end v-center absolute center z-index light-border bg-primary animation-scale br sm-p sm-g" style={{ width: 300 }}>

                <div className="col-6">{popups.message}</div>

                <div className="col-6 sm-p"></div>
                <div className="col-2"></div>

                <div className="col-2 flex v-center h-center effect-opacity bg-dark light-border br" onClick={closeDailog}>
                    <Icon type={'remove'} styles={['md-i light-i']} effect={false} />
                </div>
                <div className="col-2 flex v-center h-center effect-opacity bg-dark light-border br" onClick={execAction}>
                    <Icon type={'checkmark'} styles={['md-i light-i']} effect={false} />
                </div>

            </div>
        </>

    ) : null

}

export default memo(Dialog)