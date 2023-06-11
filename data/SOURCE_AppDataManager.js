const App = () => {

    const [appData, disAppData] = useReducer(AppDataReducer, [])
  
    return <>
  
      <HeaderComp dt={appData} dis={disAppData}/>
  
    </>
  
  }
  
  export default App