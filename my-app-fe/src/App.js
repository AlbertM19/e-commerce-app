import Home from './Home/Home'
import StoreContextProvider from './contexts/StoreContext'

function App() {

  return (
    <StoreContextProvider>
      <Home />
    </StoreContextProvider>
  )
}

export default App
