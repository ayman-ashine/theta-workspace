import { createSlice } from "@reduxjs/toolkit"
import { ARCHIVE_DATA } from "@/data/modules"

const s = createSlice({
    name: ARCHIVE_DATA.name,
    initialState: null,
    reducers: {
        LOAD() {
            return localStorage.getItem(ARCHIVE_DATA.name) ?
                JSON.parse(localStorage.getItem(ARCHIVE_DATA.name))
                : localStorage.setItem(ARCHIVE_DATA.name, JSON.stringify(ARCHIVE_DATA.default))
        },
        SAVE(state) {
            localStorage.setItem(ARCHIVE_DATA.name, JSON.stringify(state))
        },
        ADD(state, action) {
            if (!action.payload.tl) {
                console.log('! EXPECT PARAM { tl }')
                return state
            }
            const key = action.payload.tl.title ?
                action.payload.tl.title.at(0).toUpperCase()
                : 'UNORDERED'
            state[key] = [...state[key], action.payload.tl]
        },
        POP(state, action) {
            if (!action.payload.tl) {
                console.log('! EXPECT PARAM { tl }')
                return state
            }
            const key = action.payload.tl.title ?
                action.payload.tl.title.at(0).toUpperCase()
                : 'UNORDERED'
            state[key] = state[key].filter(tl => {
                return tl.id !== action.payload.tl.id
            })
        },
    }
})

const ARCHIVE_ACTIONS = s.actions
export { ARCHIVE_ACTIONS }
export default s.reducer