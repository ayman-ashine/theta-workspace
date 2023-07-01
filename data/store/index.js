import { configureStore } from '@reduxjs/toolkit'
import settings from './settings'
import workspace from './workspace'
import menu from './menu'
import aside from './aside'

const store = configureStore({

    reducer: {

        settings,
        workspace,
        aside,
        menu,

    }

})

export { store }