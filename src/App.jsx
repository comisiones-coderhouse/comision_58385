import { Toaster } from "sonner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { BrowserRouter } from "react-router-dom"
import CustomProvider from "./providers/CustomProvider"

const App = () => {

  return (
    <BrowserRouter>
      <CustomProvider>
        <Header/>
        <Main />
        <Footer />
      </CustomProvider>
      <Toaster position="bottom-right" />
    </BrowserRouter>
  )
}

export default App