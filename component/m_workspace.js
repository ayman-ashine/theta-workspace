import { Context } from '@/component/context'
import { useContext } from 'react'

export default function M_Workspace() {

    const [workspace, setWorkspace] = useContext(Context)

    M_Workspace.add_workspace = (_workspace) => {
        setWorkspace( workspace => [...workspace, _workspace] )
    }

    M_Workspace.remove_workspace = (_id) => {
        setWorkspace( workspace => workspace.filter( ws => ws.id !== _id ) )
    }

    M_Workspace.select_workspace = (_id) => {
        setWorkspace( workspace => workspace.map( ws => {
            if(ws.id === _id) ws.select = true
            else ws.select = false
            return ws
        }))
    }

    M_Workspace.add_frame = (_data) => {
        setWorkspace( workspace => workspace.map( ws => {
            if(ws.select) ws.frames.push(_data)
            return ws
        }))
    }

    M_Workspace.update_frame = (_id, _props) => {
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

    M_Workspace.remove_frame = (_id) => {
        setWorkspace( workspace => workspace.map( ws => {
            if(ws.select) ws.frames = ws.frames.filter( frame => frame.id !== _id)
            return ws
        }))
    }

}