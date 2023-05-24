import { useEffect, useState } from 'react'
import { Manager_Data, Bar, Workspace, Context, Loading } from '@/utils/modules'

export default function App() {

  const [workspace, setWorkspace] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect( () => {

    Manager_Data.local_load()
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