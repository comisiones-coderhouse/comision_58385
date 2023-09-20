import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

const App = () => {

  return (
    <>

      <Header nombre="Horacio" edad={34} />

      <Main juegos={["Valorant","Mario"]} />

      <Footer />

    </>
  )
}

export default App