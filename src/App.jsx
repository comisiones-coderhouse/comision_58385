import { BrowserRouter } from "react-router-dom"
import { Toaster } from "sonner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import CustomProvider from "./providers/CustomProvider"
/* import img from "./testimport.jpg" */

const App = () => {

  return (
    <BrowserRouter>
      <CustomProvider>
        <Header />
        {/* <img src="/test.jpg" />
          <img src={img} /> */}
        <Main />
        <Footer />
      </CustomProvider>
      <Toaster position="bottom-right" />
    </BrowserRouter>
  )
}

export default App