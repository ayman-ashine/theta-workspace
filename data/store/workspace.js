import { createSlice } from "@reduxjs/toolkit"
import { WORKSPACE_DATA } from "@/data/modules"

const s = createSlice({

    name: WORKSPACE_DATA.name,
    initialState: null,
    reducers: {
        LOAD() {
            return localStorage.getItem(WORKSPACE_DATA.name) ?
                JSON.parse(localStorage.getItem(WORKSPACE_DATA.name)) : WORKSPACE_DATA.default
        },
        SAVE(state) {
            localStorage.setItem(WORKSPACE_DATA.name, JSON.stringify(state))
        },
        ADD(state, action) {
            state.workspaces = [
                ...state.workspaces,
                {
                    ...WORKSPACE_DATA.workspace,
                    id: action.payload.id
                }
            ]
        },
        SWITCH(state, action) {
            state.workspaces = state.workspaces.map(ws => {
                if(ws.id === action.payload.ws1.id) return action.payload.ws2
                else if(ws.id === action.payload.ws2.id) return action.payload.ws1
                return ws
            })

        },
        REMOVE(state, action) {
            state.workspaces = state.workspaces.filter(ws => {
                if (ws.id !== action.payload.id) {
                    return ws
                } else if (ws.current) {
                    state.currentWorkspace = null
                }
            })
        },
        CURRENT(state, action) {
            state.currentWorkspace = action.payload.id
            state.workspaces = state.workspaces.map(ws => {
                return ws.id === action.payload.id ?
                    { ...ws, current: true }
                    : { ...ws, current: false }
            })
        },
        CURRENT_TOOL(state, action) {
            state.currentTool = action.payload.id
        },
        UPDATE(state, action) {
            state.workspaces = state.workspaces.map(ws => {
                return ws.id === action.payload.id ?
                    { ...ws, ...action.payload.props }
                    : ws
            })
        },
        CLEAN_CURRENT(state) {
            state.workspaces = state.workspaces.map(ws => {
                return ws.current ?
                    { ...ws, tools: [] }
                    : ws
            })
        },
        CLEAN_ALL(state) {
            state.workspaces = state.workspaces.map(ws => {
                return { ...ws, tools: [] }
            })
        },
        ADD_TOOL(state, action) {
            const tool = {
                ...WORKSPACE_DATA.tool,
                ...action.payload,
            }
            state.workspaces = state.workspaces.map(ws => {
                return ws.current ?
                    { ...ws, tools: [...ws.tools, tool] }
                    : ws
            })
        },
        REMOVE_TOOL(state, action) {
            state.workspaces = state.workspaces.map(ws => {
                return ws.current ?
                    { ...ws, tools: ws.tools.filter(tl => tl.id !== action.payload.id) }
                    : ws
            })
        },
        UPDATE_TOOL(state, action) {
            state.workspaces = state.workspaces.map(ws => {
                return ws.current ?
                    {
                        ...ws, tools: ws.tools.map(tl => {
                            return tl.id === action.payload.id ?
                                { ...tl, ...action.payload.props }
                                : tl
                        })
                    }
                    : ws
            })
        },
        GET_TOOL(state, action) {
            state.workspaces.map(ws => {
                if (ws.current) {
                    ws.tools.map(tl => {
                        if (tl.id === action.payload.id) return tl
                    })
                }
            })
        },
    }

})

const WORKSPACE_ACTIONS = s.actions
export { WORKSPACE_ACTIONS }
export default s.reducer