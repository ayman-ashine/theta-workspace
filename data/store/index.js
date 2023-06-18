import { configureStore } from '@reduxjs/toolkit'
import settings from './settings'
import workspace from './workspace'
import menu from './menu'

const store = configureStore({

    reducer: {

        settings,
        workspace,
        menu

    }

})

export { store }