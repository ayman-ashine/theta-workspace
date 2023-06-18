import { createSlice } from "@reduxjs/toolkit"
import { SETTINGS_DATA } from '@/data/modules'

const s = createSlice({

    name: SETTINGS_DATA.name,
    initialState: null,
    reducers: {
        LOAD() {
            return localStorage.getItem(SETTINGS_DATA.name) ?
                JSON.parse(localStorage.getItem(SETTINGS_DATA.name)) : SETTINGS_DATA.default
        },
        SAVE(state) {
            localStorage.setItem(SETTINGS_DATA.name, JSON.stringify(state))
        },
        APPLY(state) {
            if(state.theme === 'DARK') document.documentElement.setAttribute('data-theme', 'dark')
            if(state.theme === 'LIGHT') document.documentElement.setAttribute('data-theme', 'light')
        },
        THEME_DARK(state) {
            return { ...state, theme: 'DARK' }
        },
        THEME_LIGHT(state) {
            return { ...state, theme: 'LIGHT' }
        }
    }

})

const SETTINGS_ACTIONS = s.actions
export { SETTINGS_ACTIONS }
export default s.reducer