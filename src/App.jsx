import { Toaster } from "sonner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { BrowserRouter } from "react-router-dom"
import { createContext } from "react"

export const contexto = createContext()
const Provider = contexto.Provider

const App = () => {

  const valorDelContexto = {
    dark : true
  }

  return (
    <BrowserRouter>
      <Provider value={valorDelContexto}>
        <Header nombre="Horacio" />
        <Main />
        <Footer />
      </Provider>
      <Toaster position="bottom-right" />
    </BrowserRouter>
  )
}

export default App