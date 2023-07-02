import { memo } from "react"
import Icon from "../icon"
import { useDispatch } from "react-redux"
import { ARCHIVE_DATA, ASIDE_ACTIONS } from "@/data/modules"

const Archive = () => {

    const dispatch = useDispatch()

    const closeArchive = () => {

        dispatch(ASIDE_ACTIONS.CLOSE())

    }

    return (

        <>
            <div className="full absolute t-0 l-0" onClick={closeArchive}></div>
            <div className="w-50 h-100 absolute flex flex-direction-column z-index bg-primary light-border-r t-0 l-0 md-p md-g animation-translateX">

                <div className="col-10 row relative v-center h-center light-border br bright md-p">
                    
                    <div className="h-100 absolute r-0 flex v-center md-px">
                        <Icon type={'search'} styles={['md-i light-i']} />
                    </div>
                    <input className="col-10" type="text" />

                </div>

                <div className="col-10 h-100 relative v-center h-center light-border br bright md-p overflow-auto">
                    
                    <div className="row relative v-center h-center md-g">
                        {
                            Object.keys(ARCHIVE_DATA).map(a => {
                                return (
                                    <div className="col-10 light-border-b md-py" key={a}>{a}</div>
                                )
                            })
                        }
                    </div>

                </div>

            </div>
        </>

    )

}

export default memo(Archive)