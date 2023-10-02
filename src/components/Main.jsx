import { useState } from "react"
import Contador from "./Contador"
import Container from "./Container"
import Formulario from "./Formulario"

const Main = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    if(toggle){
        return (
            <main className="main">
                <button onClick={handleToggle}>ir a  contador</button>
                <Container />
            </main>
        )
    }else {
        return (
            <main className="main">
                <button onClick={handleToggle}>ir a productos</button>
                <Contador />
                <Formulario />
            </main>
        )
    }
}

export default Main