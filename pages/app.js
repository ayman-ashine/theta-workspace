import { useEffect, useState } from 'react'
import { Manager_Data, Navigator, Workspace, LocalLoadData, Context, Loading } from '@/utils/modules'

export default function App() {

  const [workspace, setWorkspace] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect( () => {

    setWorkspace(LocalLoadData())
    setLoading(true)

  }, [])

  return (

    <Context.Provider value={[workspace, setWorkspace]}>

      <Manager_Data/>
      <Navigator/>
      <Workspace/>
      
      { loading ? null : <Loading/> }

    </Context.Provider>

  )

}