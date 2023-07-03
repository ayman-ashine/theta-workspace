import { memo, useState } from "react"
import Icon from "../icon"
import { useDispatch, useSelector } from "react-redux"
import { ASIDE_ACTIONS } from "@/data/modules"
import { Tool } from "../modules"

const Archive = () => {

    const archive = useSelector(state => state.archive)
    const [search, setSearch] = useState(null)
    const dispatch = useDispatch()

    const searchArchive = (e) => {
        if (e.target.value) setSearch(e.target.value.toUpperCase())
        else setSearch(null)
    }
    const closeArchive = () => {

        dispatch(ASIDE_ACTIONS.CLOSE())

    }

    return (

        <>
            <div className="full absolute t-0 l-0" onClick={closeArchive}></div>
            <div className="h-100 absolute flex flex-direction-column z-index bg-primary light-border-r t-0 l-0 md-p md-g animation-translateX">

                <div className="col-10 row relative v-center h-center light-border br bright md-p">

                    <div className="h-100 absolute r-0 flex v-center md-px">
                        <Icon type={'search'} styles={['md-i light-i']} />
                    </div>
                    <input className="col-10" type="text" onInput={searchArchive} />

                </div>

                <div className="col-10 h-100 relative v-center h-center overflow-auto">

                    <div className="row relative v-center xxl-mb">
                        {
                            Object.keys(archive).map(k => {
                                if (search) {
                                    return (
                                        <div className="col-10 full relative flex flex-direction-column light-border-l md-px" key={k}>
                                            {
                                                archive[k].map(dt => {

                                                    if ((JSON.stringify(dt.data) + JSON.stringify(dt.title)).toUpperCase().includes(search)) {
                                                        return <Tool dt={dt} key={dt.id} />
                                                    }

                                                })
                                            }
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className="col-10 flex flex-direction-column animation-opacity md-py" key={k}>
                                            <div className="full title light-border-l md-p">{k}</div>
                                            <div className="full relative flex flex-direction-column light-border-l md-p">
                                                {
                                                    archive[k].map(dt => {

                                                        return (
                       
                                                                <Tool dt={dt} key={dt.id} />
                          
                                                        )

                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>

                </div>

            </div>
        </>

    )

}

export default memo(Archive)