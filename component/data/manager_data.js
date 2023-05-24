import { useContext } from 'react'
import { Context, Generator } from '@/utils/modules'

const DATA_NAME = 'user'

export function Manager_Data() {

    const [workspace, setWorkspace] = useContext(Context)

    Manager_Data.add_workspace = () => {

        setWorkspace(workspace => [...workspace, {
            id: Generator(),
            name: 'new tab',
            select: true,
            frames: [],
        }])

    }

    Manager_Data.remove_workspace = (_id) => {

        setWorkspace(workspace => workspace.filter(ws => ws.id !== _id))

    }

    Manager_Data.select_workspace = (_id) => {

        setWorkspace(workspace => workspace.map(ws => {
            if (ws.id === _id) ws.select = true
            else ws.select = false
            return ws
        }))

    }

    Manager_Data.add_frame = (_data) => {

        setWorkspace(workspace => workspace.map(ws => {
            if (ws.select) ws.frames.push(_data)
            return ws
        }))

    }

    Manager_Data.update_frame = (_id, _props) => {

        setWorkspace(workspace => workspace.map(ws => {
            if (ws.select) {
                ws.frames = ws.frames.map(frame => {
                    if (frame.id === _id) return { ...frame, ..._props }
                    else return frame
                })
            }
            return ws
        }))

    }

    Manager_Data.remove_frame = (_id) => {

        setWorkspace(workspace => workspace.map(ws => {
            if (ws.select) ws.frames = ws.frames.filter(frame => frame.id !== _id)
            return ws
        }))

    }

    Manager_Data.clean_current_workspace = (_id) => {

        setWorkspace(workspace => workspace.map( ws => {
            if (ws.select) ws.frames = []
            return ws
        }))

    }

    Manager_Data.clean_all_workspace = () => {

        setWorkspace( workspace => workspace.map( ws => {
            ws.frames = []
            return ws
        }))

    }

    Manager_Data.local_save = () => {

        localStorage.setItem(DATA_NAME, JSON.stringify(workspace))

    }

    Manager_Data.local_load = () => {

        setWorkspace(localStorage.getItem(DATA_NAME) ? JSON.parse(localStorage.getItem(DATA_NAME)) : [])

    }

}