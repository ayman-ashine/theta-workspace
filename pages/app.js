import { Provider } from "react-redux"
import { Main } from "@/comps/modules"
import { store } from "@/data/modules"

const App = () => {

  return <Provider store={store}><Main /></Provider>

}

export default App