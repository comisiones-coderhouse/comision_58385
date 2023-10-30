import { Route, Routes } from "react-router-dom"
import Carrito from "../pages/Carrito"
import ItemDetailContainer from "../pages/ItemDetailContainer"
import ProductListContainer from "../pages/ProductListContainer"

const Main = () => {

    return (
        <main className="main container mx-auto">
            <Routes>
                <Route path="/" element={<ProductListContainer />} />
                <Route path="/clothing" element={<ProductListContainer />} />
                <Route path="/electronics" element={<ProductListContainer />} />
                {/* <Route path="/category/:id" element={<ProductListContainer/>} /> */}
                <Route path="/cart" element={<Carrito />} />
                {/* <Route path="/checkout" element={<Checkout/>} /> */}
                <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                <Route path="*" element={<p>404 vuelva a intenta por favor</p>} />
            </Routes>
        </main>
    )

}

export default Main