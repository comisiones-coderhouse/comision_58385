import { useEffect, useRef, useState } from "react"

//react-query

function HomePage() {

  // constructor(){
  const [contador, setContador] = useState(0)
  const [productos, setProductos] = useState([])
  const updateRef = useRef(0)
  // const { loading, data, errors } = useQuery("productos", fetch)
  // }

  //componentDidMount
  useEffect(() => {
    console.log("Ya se renderizo el componente : componentDidMount")
    /* fetch()
      .then(res => {
        setProductos(res)
      }) */
    const promesa = new Promise((res, rej) => {
      //aca esta la logica
      setTimeout(() => {
        res([1, 2, 3, 4, 5])
      }, 2000)
    })

    promesa.then((res) => {
      console.log(res)
      setProductos(res)
    })

    return () => {
      console.log("Se desmonto el componente : componentWillUnmount")
    }
  }, [])

  //componentDidUpdate
  /* useEffect(() => {
    if (updateRef.current === 0) {
      updateRef.current++
      return
    }


    if (updateRef.current === 1) {
      console.log("Se actualizo el componente : componentDidUpdate")
    }
  }) */

  //componentWillUnmount
  /* useEffect(() => {
    return () => {
      console.log("Se desmonto el componente : componentWillUnmount")
    }
  }, []) */

  //render(){
  return (
    <div>
      {console.log("Se renderizo el componente")}
      <p>Por favor espere {contador}</p>
      <button className="btn" onClick={() => setContador(contador + 1)}>Click</button>
    </div>
  )
  //}
}

export default HomePage

/* import React from "react" */

//Timeline del ciclo de vida
//mount (constructor - render - componentDidMount)
//update (shouldComponentUpdate - render - componentDidUpdate)
//unmount (componentWillUnmount)

/* class HomePage extends React.Component {

  //Esto pasa primero que todo el resto, porque es lo que construye el comnponente
  constructor(props) {
    super(props)
    console.log("Constructor")
    this.state = {
      contador: 0
    }
  }

  //Esto pasa despues del constructor y despues del render
  componentDidMount() {
    //const div = document.querySelector("#home")
    //fetch()
    //db.connect()
    //Node.addEventListener("click", () => {})
    //new WebSocket()
    console.log("componentDidMount")
  }

  //Esto pasa despues del constructor y despues del render
  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  //Esto pasa justo antes de que se desmonte el componente
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate")
    return true
  }
  
  //aca va lo que se dibuja
  render() {
    console.log("render")
    return (
      <div id="home">
        <p>Por favor espere {this.state.contador}</p>
        <button className="btn" onClick={() => this.setState({ contador: this.state.contador + 1 })}>Click</button>
      </div>
    )
  }
}

export default HomePage */