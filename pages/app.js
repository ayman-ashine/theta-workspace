import { useEffect, useReducer } from 'react'
import {
  AppDataReducer,
  AppSettingsReducer,
  AppSaver,
  HeaderComp,
  WorkspaceComp,
} from '@/utils/modules'

const App = () => {

  const [appData, disAppData] = useReducer(AppDataReducer, null)
  const [appSettings, disAppSettings] = useReducer(AppSettingsReducer, null)

  useEffect(() => {

    disAppData({ type: 'LOAD', dt: AppSaver({ action: 'LOAD' }) })

  }, [])

  // Save - AppData
  useEffect(() => {

    if (appData !== null) AppSaver({ action: 'SAVE', dt: appData })

  }, [appData])

  return <>

    <HeaderComp dt={{ appData, appSettings }} dis={{ disAppData, disAppSettings }} />
    <WorkspaceComp dt={{ appData }} dis={{ disAppData }} />

  </>

}

export default App