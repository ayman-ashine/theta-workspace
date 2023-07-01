import { memo, useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SETTINGS_ACTIONS, WORKSPACE_ACTIONS } from "@/data/modules"
import { Header, Menu, Workspace, Aside, Info, Loader } from "@/comps/modules"


const Main = () => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    // Get Settings Data //
    const settings = useSelector(state => state.settings)

    // Get Workspace Data //
    const workspace = useSelector(state => state.workspace)
    const currentWorkspace = useMemo(() => {

        if (workspace) {
            for (let i in workspace.workspaces) {
                if (workspace.workspaces[i].current) return workspace.workspaces[i]
            }
        }

    }, [workspace])

    // Load Data //
    useEffect(() => {

        dispatch(SETTINGS_ACTIONS.LOAD())
        dispatch(WORKSPACE_ACTIONS.LOAD())
        setLoading(false)

    }, [])

    // Save Data //
    useEffect(() => {

        settings !== null ?
            (dispatch(SETTINGS_ACTIONS.SAVE()), dispatch(SETTINGS_ACTIONS.APPLY()))
            : null

    }, [settings])

    useEffect(() => {

        workspace !== null ?
            dispatch(WORKSPACE_ACTIONS.SAVE())
            : null

    }, [workspace])

    return loading ? <Loader /> : (

        <main className="full relative flex flex-direction-column animation-opacity-long overflow-hidden">

            <Header />
            {
                currentWorkspace ?
                    <Workspace dt={currentWorkspace} key={currentWorkspace.id} />
                    : <Info/>
            }
            <Aside/>
            <Menu />

        </main>

    )

}

export default memo(Main)