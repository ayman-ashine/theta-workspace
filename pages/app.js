import { Provider } from "react-redux"
import { store } from "@/data/modules"
import { Main } from "@/comps/modules"

const App = () => {

  return (

    <Provider store={store}><Main /></Provider>
    
  )

}

export default App