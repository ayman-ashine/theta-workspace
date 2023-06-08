import { useState, useEffect } from 'react'
import {
  appContext,
  AppDataManager,
  AppSettingsManager,
  AppArchiveManager,
  HeaderComp,
  LoaderComp,
  WorkspaceComp
} from '@/utils/modules'

export default function App() {

  const [appData, setAppData] = useState()
  const [appSettings, setAppSettings] = useState()
  const [loaderDisplay, setLoaderDisplay] = useState(true)

  useEffect(() => {

    AppArchiveManager.load()
    setTimeout(() => setLoaderDisplay(false), 10)

  }, [])

  return (

    <appContext.Provider value={{ appData, setAppData, appSettings, setAppSettings }}>
      
      <AppSettingsManager />
      <AppDataManager />

      <LoaderComp display={loaderDisplay} />
      <HeaderComp />
      <WorkspaceComp />

    </appContext.Provider>

  )

}