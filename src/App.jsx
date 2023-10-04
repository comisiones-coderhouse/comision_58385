import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

const App = () => {

  return (
    <>
      <Header nombre="Horacio">
        <h1>Titulo</h1>
        <h2>Subtitulo</h2>
        <p>Lorem Ipsum</p>
      </Header>
      <Main />
      <Footer />
    </>
  )
}

export default App