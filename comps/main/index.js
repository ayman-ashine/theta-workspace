import { memo, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SETTINGS_ACTIONS, WORKSPACE_ACTIONS } from "@/data/modules"
import { Header, Menu, Workspace, Info, Loader } from "@/comps/modules"


const Main = () => {

    const settings = useSelector(state => state.settings)
    const workspace = useSelector(state => state.workspace)
    // Get current workspace //
    const currentWorkspace = useSelector(state => {
        if (workspace) {
            for (let i in state.workspace.workspaces) {
                if (state.workspace.workspaces[i].current) {
                    return state.workspace.workspaces[i]
                }
            }
        } else return null
    })
    const menu = useSelector(state => state.menu)
    const dispatch = useDispatch()
    const [loaderDisplay, setLoaderDisplay] = useState(true)

    // Load Data
    useEffect(() => {

        dispatch(SETTINGS_ACTIONS.LOAD())
        dispatch(WORKSPACE_ACTIONS.LOAD())
        setLoaderDisplay(false)

    }, [])

    // Save Data
    useEffect(() => {

        settings !== null ? (dispatch(SETTINGS_ACTIONS.SAVE()), dispatch(SETTINGS_ACTIONS.APPLY())) : null

    }, [settings])

    useEffect(() => {

        workspace !== null ? dispatch(WORKSPACE_ACTIONS.SAVE()) : null

    }, [workspace])

    // Loader
    if (loaderDisplay) return <Loader />

    return (

        <main className="full flex flex-direction-column animation-opacity-long">

            <Header />
            {
                currentWorkspace ?
                    <Workspace dt={currentWorkspace} key={currentWorkspace.id} />
                    : <Info/>
            }
            {
                menu ?
                    <Menu menu={menu} />
                    : null
            }

        </main>

    )

}

export default memo(Main)