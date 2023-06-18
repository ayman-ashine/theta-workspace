import { createSlice } from "@reduxjs/toolkit"
import { MENU_DATA } from '@/data/modules'

const s = createSlice({

    name: MENU_DATA.name,
    initialState: MENU_DATA.default,
    reducers: {
        OPEN(state, action) {
            return { ...state, ...action.payload }
        },
        CLOSE() {
            return MENU_DATA.default
        }
    }

})

const MENU_ACTIONS = s.actions
export { MENU_ACTIONS }
export default s.reducer