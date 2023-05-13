import { useEffect, useState } from 'react'
import { Manager_Data, Navigator, Workspace, LocalLoadData, Context } from '@/utils/modules'

export default function App() {

  const [workspace, setWorkspace] = useState([])

  useEffect( () => setWorkspace(LocalLoadData()), [])

  return (

    <Context.Provider value={[workspace, setWorkspace]}>
      
      <Manager_Data/>
      <Navigator/>
      <Workspace/>

    </Context.Provider>

  )

}