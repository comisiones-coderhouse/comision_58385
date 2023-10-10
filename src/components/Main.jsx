import { Route, Routes } from "react-router-dom"
import Contador from "./Contador"
import Container from "./Container"
import Formulario from "./Formulario"
import TestPage from "../pages/TestPage"
import HomePage from "../pages/HomePage"

const Main = () => {

    return (
        <main className="main">
            {/* <Container />
            <Contador />
            <Formulario /> */}

            {/* if(url === "jewlery") { return <p>Jewlery</p> } */}

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/clothing" element={<p>Ropa</p>} />
                <Route path="/jewelery" element={<p>Joyas</p>} />
                <Route path="/cart" element={<p>Carrito</p>} />
                <Route path="/detalle/:id" element={<TestPage />} />
                <Route path="*" element={<p>404 vuelva a intenta por favor</p>} />
            </Routes>
        </main>
    )

}

export default Main