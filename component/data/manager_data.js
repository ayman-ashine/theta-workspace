import { useContext } from 'react'
import { Context } from '@/utils/modules'

export function Manager_Data() {

    const [workspace, setWorkspace] = useContext(Context)

    Manager_Data.add_workspace = (_workspace) => {
        setWorkspace( workspace => [...workspace, _workspace] )
    }

    Manager_Data.remove_workspace = (_id) => {
        setWorkspace( workspace => workspace.filter( ws => ws.id !== _id ) )
    }

    Manager_Data.select_workspace = (_id) => {
        setWorkspace( workspace => workspace.map( ws => {
            if(ws.id === _id) ws.select = true
            else ws.select = false
            return ws
        }))
    }

    Manager_Data.add_frame = (_data) => {
        setWorkspace( workspace => workspace.map( ws => {
            if(ws.select) ws.frames.push(_data)
            return ws
        }))
    }

    Manager_Data.update_frame = (_id, _props) => {
        setWorkspace( workspace => workspace.map( ws => {
            if(ws.select){
                ws.frames = ws.frames.map( frame => {
                    if(frame.id === _id) return {...frame, ..._props}
                    else return frame
                })
            }
            return ws
        }))
    }

    Manager_Data.remove_frame = (_id) => {
        setWorkspace( workspace => workspace.map( ws => {
            if(ws.select) ws.frames = ws.frames.filter( frame => frame.id !== _id)
            return ws
        }))
    }

}