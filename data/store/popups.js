import { createSlice } from "@reduxjs/toolkit"
import { POPUPS_DATA } from '@/data/modules'

const s = createSlice({

    name: POPUPS_DATA.name,
    initialState: POPUPS_DATA.default,
    reducers: {
        OPEN(state, action) {
            return action.payload
        },
        CLOSE() {
            return POPUPS_DATA.default
        }
    }

})

const POPUPS_ACTIONS = s.actions
export { POPUPS_ACTIONS }
export default s.reducer