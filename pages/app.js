import { useEffect, useState } from 'react'
import { Manager_Data, Bar, Workspace, LocalLoadData, Context, Loading } from '@/utils/modules'

export default function App() {

  const [workspace, setWorkspace] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect( () => {

    setWorkspace(LocalLoadData())
    setTimeout( () => setLoading(true), 2000)

  }, [])

  return (

    <Context.Provider value={[workspace, setWorkspace]}>

      <Manager_Data/>
      <Bar/>
      <Workspace/>
      
      { loading ? null : <Loading/> }

    </Context.Provider>

  )

}