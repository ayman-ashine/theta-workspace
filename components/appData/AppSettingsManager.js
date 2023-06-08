import { useContext, useEffect, useState } from 'react'
import { appContext } from '@/utils/modules'

export default function AppSettingsManager() {

    const {appSettings, setAppSettings} = useContext(appContext)
    const [localData, setLocalData] = useState({
        dataName: 'USER_SETTINGS',
        dataInitialValue: {lightMode: false},
        loaded: false,
        applySavedSettings: false
    })

    // !
    AppSettingsManager.getSettings = () => {

        return appSettings

    }

    AppSettingsManager.setDarkMode = () => {

        setAppSettings(state => {
            return { ...state, lightMode: false }
        })

        document.documentElement.setAttribute('data-theme', 'dark')

    }

    AppSettingsManager.setLightMode = () => {

        setAppSettings(state => {
            return { ...state, lightMode: true }
        })

        document.documentElement.setAttribute('data-theme', 'light')

    }

    AppSettingsManager.applySavedSettings = () => {

        if(!localData.applySavedSettings){
            if(appSettings.lightMode) AppSettingsManager.setLightMode()
            setLocalData( state => ({...state, applySavedSettings: true}))
        }

    }

    AppSettingsManager.save = () => {

        localStorage.setItem(localData.dataName, JSON.stringify(appSettings))

    }

    AppSettingsManager.load = () => {

        if(localStorage.getItem(localData.dataName)){
            setAppSettings(JSON.parse(localStorage.getItem(localData.dataName)))
        } else {
            localStorage.setItem(localData.dataName, JSON.stringify(localData.dataInitialValue))
            setAppSettings(localData.dataInitialValue)
        }

        setLocalData( state => ({...state, loaded: true}))

    }

    useEffect(() => {
        
        if(localData.loaded) {
            AppSettingsManager.save()
            AppSettingsManager.applySavedSettings()
        } else AppSettingsManager.load()

    }, [appSettings])

}