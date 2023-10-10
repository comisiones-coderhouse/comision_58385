import { Toaster } from "sonner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { BrowserRouter } from "react-router-dom"

const App = () => {

  return (
    <BrowserRouter>
      <Header nombre="Horacio" />
      <Main />
      <Footer />
      <Toaster position="bottom-right"/>
    </BrowserRouter>
  )
}

export default App