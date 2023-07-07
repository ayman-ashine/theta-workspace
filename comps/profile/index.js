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

                <div className="row-10 br light-border md-p">

                    <div className="col-5 flex h-center v-center">
                        <div className="full-br light-border">
                            <Icon type={'profile'} styles={['xxl-i light-i']} effect={true} />
                        </div>
                    </div>

                    <div className="col-5 flex flex-direction-column h-center v-start">
                        <div className="row-2 sm-py">
                            <span className="col md-fs title">Full Name</span>
                            <span className="col title"><Icon type={'edit'} styles={['sm-i light-i']} /></span>
                        </div>
                        <div className="row-2 sm-py">
                            <span className="col title">User Name</span>
                            <span className="col title"><Icon type={'edit'} styles={['sm-i light-i']} /></span>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )

}

export default memo(Profile)