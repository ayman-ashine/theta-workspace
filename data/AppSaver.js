import { AppDefaultData } from "@/utils/modules"

const AppSaver = ({ dt, action }) => {

    switch (action) {

        case 'LOAD':
            if (localStorage.getItem(AppDefaultData.APP_DATA.name))
                return JSON.parse(localStorage.getItem(AppDefaultData.APP_DATA.name))
            else {
                localStorage.setItem(AppDefaultData.APP_DATA.name, JSON.stringify(AppDefaultData.APP_DATA.initialData))
                return AppDefaultData.APP_DATA.initialData
            }
            
        case 'SAVE':
            localStorage.setItem(AppDefaultData.APP_DATA.name, JSON.stringify(dt))

    }

}

export { AppSaver }