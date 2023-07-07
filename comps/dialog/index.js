import { memo } from "react"
import { Icon } from "../modules"

const Dialog = () => {

    // Get Text & Function

    return (

        <>
        <div className="full absolute t-0 l-0 bg-l-dark z-index"></div>
        <div className="row-6 h-end v-center absolute center z-index light-border bg-primary animation-translateY br md-p md-g" style={{width: 300}}>
            
            <div className="col-6 ">
                Are you sure?
                <br/>
                Your entire workspace will removed.
            </div>

            <div className="col-6 sm-p"></div>
            <div className="col-4"></div>

            <div className="col-1 flex v-center h-center effect-option light-border br">
                <Icon type={'remove'} styles={['md-i light-i']} effect={false}/>
            </div>
            <div className="col-1 flex v-center h-center effect-option light-border br">
                <Icon type={'checkmark'} styles={['md-i light-i']} effect={false}/>
            </div>

        </div>
        </>
        
    )

}

export default memo(Dialog)