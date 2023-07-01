import { createSlice } from "@reduxjs/toolkit"
import { ASIDE_DATA } from '@/data/modules'

const s = createSlice({

    name: ASIDE_DATA.name,
    initialState: ASIDE_DATA.default,
    reducers: {
        OPEN(state, action) {
            return { ...state, ...action.payload }
        },
        CLOSE() {
            return ASIDE_DATA.default
        }
    }

})

const ASIDE_ACTIONS = s.actions
export { ASIDE_ACTIONS }
export default s.reducer