import { Route, Routes } from "react-router-dom"
import ItemDetailContainer from "../pages/ItemDetailContainer"
import ProductListContainer from "../pages/ProductListContainer"
import RopaPage from "../pages/RopaPage"

const Main = () => {

    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<ProductListContainer />} />
                <Route path="/clothing" element={<RopaPage/>} />
                <Route path="/jewelery" element={<p>Joyas</p>} />
                <Route path="/cart" element={<p>Carrito</p>} />
                <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                <Route path="*" element={<p>404 vuelva a intenta por favor</p>} />
            </Routes>
        </main>
    )

}

export default Main