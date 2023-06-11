import { AppDefaultData } from "@/utils/modules"

const AppSettingsReducer = (state, action) => {

    switch (action.type) {

        case 'DARK_MODE':
            document.documentElement.setAttribute('data-theme', 'dark')
            return { ...state, lightMode: false }

        case 'LIGHT_MODE':
            document.documentElement.setAttribute('data-theme', 'light')
            return { ...state, lightMode: true }

        case 'LOW_APPEARENCE':
            return

        case 'HEIGHT_APPEARENCE':
            return

        default: return state

    }

}

export { AppSettingsReducer }