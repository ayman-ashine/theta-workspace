import { useContext } from 'react'
import { App_Context, Generate_Unique_Id } from '@/utils/modules'

const APP_DATA_NAME = 'user_data'
const INITIAL_DATA = []

export function Manager_Data() {

    const {appData, setAppData} = useContext(App_Context)

    Manager_Data.add_workspace = () => {

        let _id = Generate_Unique_Id()

        setAppData(state => [...state, {
            id: _id,
            name: 'Workspace',
            current: true,
            active: false,
            frames: [],
        }])

        return _id

    }

    Manager_Data.remove_workspace = (_id) => {

        setAppData(state => state.filter(
            workspace => workspace.id !== _id
        ))

    }

    Manager_Data.current_workspace = (_id) => {

        setAppData(state => state.map(workspace => {
            if (workspace.id === _id) workspace.current = true
            else workspace.current = false
            return workspace
        }))

    }

    Manager_Data.rename_workspace = (_id, _name) => {

        setAppData(state => state.map(workspace => {
            if (workspace.id === _id) workspace.name = _name
            return workspace
        }))

    }

    // @
    Manager_Data.activate_workspace = (_id) => {

        setAppData(state => state.map(workspace => {
            if (workspace.id === _id) workspace.active = true
            return workspace
        }))

    }

    Manager_Data.get_app_data = () => {

        return appData

    }

    Manager_Data.add_frame = (_frame) => {

        setAppData(state => state.map(workspace => {
            if (workspace.current) workspace.frames.push(_frame)
            return workspace
        }))

    }

    Manager_Data.remove_frame = (_id) => {

        setAppData(state => state.map(workspace => {
            if (workspace.current) {
                workspace.frames = workspace.frames.filter(frame => frame.id !== _id)
            } return workspace
        }))

    }

    Manager_Data.update_frame = (_id, _new_props) => {

        setAppData(state => state.map(workspace => {

            if (workspace.current) {
                workspace.frames = workspace.frames.map(frame => {
                    if (frame.id === _id) return { ...frame, ..._new_props }
                    return frame
                })
            } return workspace

        }))

    }

    Manager_Data.clean_current_workspace = () => {

        setAppData( state => state.map(workspace => {
            if (workspace.current) workspace.frames = []
            return workspace
        }))

    }

    Manager_Data.clean_all_workspace = () => {

        setAppData(state => state.map(workspace => {
            workspace.frames = []
            return workspace
        }))

    }

    Manager_Data.save = () => {

        localStorage.setItem(APP_DATA_NAME, JSON.stringify(appData))

    }

    Manager_Data.load = () => {

        if(localStorage.getItem(APP_DATA_NAME)){
            setAppData(JSON.parse(localStorage.getItem(APP_DATA_NAME)))
        } else {
            localStorage.setItem(APP_DATA_NAME, JSON.stringify(INITIAL_DATA))
            setAppData(INITIAL_DATA)
        }

    }

}