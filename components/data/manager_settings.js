import { useContext, useEffect } from 'react'
import { App_Context } from '@/utils/modules'

let ROOT = {}
const NAME = 'user_settings'
const INITIAL_SETTINGS = {light_mode: false}

export function Manager_Settings() {

    const {appSettings, setAppSettings} = useContext(App_Context)

    Manager_Settings.get_app_settings = () => {

        return appSettings

    }

    Manager_Settings.set_dark_mode = () => {

        setAppSettings(state => {
            return { ...state, light_mode: false }
        })

    }

    Manager_Settings.set_light_mode = () => {

        setAppSettings(state => {
            return { ...state, light_mode: true }
        })

    }

    Manager_Settings.apply_dark_mode = () => {

        ROOT.root.style.setProperty('--dark', ROOT.colors.dark)
        ROOT.root.style.setProperty('--light', ROOT.colors.light)
        ROOT.root.style.setProperty('--gray', ROOT.colors.gray)
        ROOT.root.style.setProperty('--light-gray', ROOT.colors.light_gray)
        ROOT.root.style.setProperty('--low-dark', ROOT.colors.low_dark)
        ROOT.root.style.setProperty('--low-light', ROOT.colors.low_light)

    }

    Manager_Settings.apply_light_mode = () => {

        ROOT.root.style.setProperty('--dark', ROOT.colors.light)
        ROOT.root.style.setProperty('--light', ROOT.colors.dark)
        ROOT.root.style.setProperty('--gray', ROOT.colors.light_gray)
        ROOT.root.style.setProperty('--light-gray', ROOT.colors.gray)
        ROOT.root.style.setProperty('--low-dark', ROOT.colors.low_light)
        ROOT.root.style.setProperty('--low-light', ROOT.colors.low_dark)

    }

    Manager_Settings.save = () => {

        if(Object.keys(appSettings).length)
            localStorage.setItem(NAME, JSON.stringify(appSettings))

    }

    Manager_Settings.load = () => {

        if(localStorage.getItem(NAME)){
            setAppSettings(JSON.parse(localStorage.getItem(NAME)))
        } else {
            localStorage.setItem(NAME, JSON.stringify(INITIAL_SETTINGS))
            setAppSettings(INITIAL_SETTINGS)
        }

    }

    const setup = () => {

        let root = document.querySelector(':root')
        let root_props = getComputedStyle(root)

        ROOT = {
            root,
            colors: {
                dark: root_props.getPropertyValue('--dark'),
                light: root_props.getPropertyValue('--light'),
                gray: root_props.getPropertyValue('--gray'),
                light_gray: root_props.getPropertyValue('--light-gray'),
                low_dark: root_props.getPropertyValue('--low-dark'),
                low_light: root_props.getPropertyValue('--low-light'),
            }
        }

    }

    const apply = () => {

        if(Object.keys(appSettings).length){

            if(appSettings.light_mode) Manager_Settings.apply_light_mode()
            if(!appSettings.light_mode) Manager_Settings.apply_dark_mode()

        }

    }

    useEffect(() => setup(), [])

    useEffect(() => {
        
        Manager_Settings.save()
        apply()

    }, [appSettings])

}