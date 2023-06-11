import { useContext, useEffect, useRef } from 'react'
import { GlobalContext } from '@/utils/modules'

export default function AppDataManager() {

    const { appData, dispatchAppData } = useContext(GlobalContext)
    // Get initail data from data folder
    const localData = useRef({ dataName: 'USER_DATA', dataInitialValue: [], load: false })

    AppDataManager.appData = () => {

        return appData

    }

    AppDataManager.addWorkspace = (newWorkspace) => {

        setAppData(state => [...state, newWorkspace])

    }

    AppDataManager.removeWorkspace = (id) => {

        setAppData(state => state.filter(ws => ws.id !== id))

    }

    AppDataManager.renameWorkspace = (id, newName) => {

        setAppData(state => state.map(ws => {
            if (ws.id === id) ws.name = newName
            return ws
        }))

    }

    AppDataManager.currentWorkspace = (id) => {

        setAppData(state => state.map(ws => {
            if (ws.id === id) ws.current = true
            else ws.current = false
            return ws
        }))

    }

    AppDataManager.addFrame = (newFrame) => {

        setAppData(state => state.map(ws => {
            if (ws.current) ws.frames = [...ws.frames, newFrame]
            return ws
        }))

    }

    AppDataManager.removeFrame = (id) => {

        setAppData(state => state.map(ws => {
            if (ws.current) {
                ws.frames = ws.frames.filter(frame => frame.id !== id)
            }
            return ws
        }))

    }

    AppDataManager.updateFrame = (id, newProps) => {

        setAppData(state => state.map(ws => {
            if (ws.current) {
                ws.frames = ws.frames.map(frame => {
                    if (frame.id === id) return { ...frame, ...newProps }
                    return frame
                })
            }
            return ws
        }))

    }

    AppDataManager.cleanCurrentWorkspace = () => {

        setAppData(state => state.map(ws => {
            if (ws.current) ws.frames = []
            return ws
        }))

    }

    AppDataManager.cleanAllWorkspaces = () => {

        setAppData(state => state.map(ws => {
            ws.frames = []
            return ws
        }))

    }

    AppDataManager.save = () => {

        localStorage.setItem(localData.current.dataName, JSON.stringify(appData))

    }

    AppDataManager.load = () => {

        localData.current.load = true

        if (localStorage.getItem(localData.current.dataName)) {
            setAppData(
                JSON.parse(
                    localStorage.getItem(localData.current.dataName)
                )
            )
        } else {
            localStorage.setItem(
                localData.current.dataName,
                JSON.stringify(localData.current.dataInitialValue)
            )
            setAppData(localData.current.dataInitialValue)
        }

    }

    useEffect(() => {

        if (localData.current.load) AppDataManager.save()
        else AppDataManager.load()

    }, [appData])

}