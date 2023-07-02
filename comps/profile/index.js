import { memo } from "react"
import Icon from "../icon"
import { useDispatch } from "react-redux"
import { ASIDE_ACTIONS } from "@/data/modules"

const Profile = () => {

    const dispatch = useDispatch()

    const closeProfile = () => {

        dispatch(ASIDE_ACTIONS.CLOSE())

    }

    return (

        <>
            <div className="full absolute t-0 l-0" onClick={closeProfile}></div>
            <div className="w-50 h-100 absolute flex flex-direction-column z-index bg-primary light-border-r t-0 l-0 md-p md-g animation-translateX">

                <Icon type={'profile'} styles={['md-i light-i']} />

            </div>
        </>

    )

}

export default memo(Profile)