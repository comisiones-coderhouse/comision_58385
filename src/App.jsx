import Header from "./Header"
//Componentes + JSX
//Esto es un componente 
//Los componentes son funciones que arrancan en mayuscula, siempre tienen retorno y solo pueden retornar un elemento

//PROPS

const App = () => {

  const nombre = "Facundo"
  const edad = 34

  return (
    <>

      <Header />

      <main>
        <h2>Home</h2>
        <p>Bienvenido {nombre}!</p>
        <p>Tenes {edad} años!</p>
      </main>

      <footer>
        <p>Copyright 2023 - Horacio Gutierrez</p>
      </footer >

    </>
  )
}

export default App