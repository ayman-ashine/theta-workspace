import { useState, useEffect } from 'react'
import {
  App_Context,
  Manager_Data,
  Manager_Settings,
  Comp_Header,
  Comp_Loader,
  Comp_Workspace
} from '@/utils/modules'

export default function App() {

  const [appData, setAppData] = useState([])
  const [appSettings, setAppSettings] = useState({})
  const [loader, setLoader] = useState(false)

  useEffect( () => {

    Manager_Data.load()
    Manager_Settings.load()
    setTimeout( () => setLoader(true), 1000)

  }, [])

  return (

    <App_Context.Provider value={{
      appData, setAppData,
      appSettings, setAppSettings
    }}>

      <Manager_Data/>
      <Manager_Settings/>
      <Comp_Loader loader={loader}/>
      <Comp_Header/>
      <Comp_Workspace/>

    </App_Context.Provider>

  )

}