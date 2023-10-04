import { useState } from "react"
import Contador from "./Contador"
import Container from "./Container"
import Formulario from "./Formulario"

const Main = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <main className="main">
            <button onClick={handleToggle}>{toggle ? "ir a  contador" : "ir a productos"}</button>
            {toggle
                ? <Container />
                : (
                    <>
                        <Contador />
                        <Formulario />
                    </>
                )
            }
        </main>
    )

}

export default Main