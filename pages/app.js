import { Provider } from "react-redux"
import { store } from "@/data/modules"
import { Main } from "@/comps/modules"
import { useEffect } from "react"

const App = () => {

  const visitCounter = () => {

    fetch('/api/visit')
    .then(null)

  }

  useEffect(() => visitCounter, [])

  return (

    <Provider store={store}><Main /></Provider>
    
  )

}

export default App