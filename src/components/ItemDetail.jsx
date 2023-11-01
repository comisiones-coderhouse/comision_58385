import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { contexto } from "../providers/CustomProvider"
import Contador from "./Contador"

//Padre
function ItemDetail(props) {


    const valorDelContexto = useContext(contexto)
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0)
    /* const navigate = useNavigate() */

    const handle = (cantidadRec) => {
        setCantidadSeleccionada(cantidadRec)
    }

    const handleClick = () => {
        valorDelContexto.incrementTotal(cantidadSeleccionada)
        valorDelContexto.handleAddProduct(props.producto, cantidadSeleccionada)
        /* navigate("/carrito") */
    }

    if (cantidadSeleccionada > 0) {
        return (
            <div>
                <h2>{props.producto.title} - ${props.producto.price} </h2>
                <img className="max-w-[200px]" src={props.producto.image} alt={props.producto.title} />
                <p>{props.producto.description}</p>
                <p>Precio : ${props.producto.price}</p>
                {/* <button className="btn" onClick={handleClick}>agregar a carrito</button> */}
                <Link to="/cart" className="btn" onClick={handleClick}>terminar compra</Link>
            </div>
        )
    } else {
        return (
            <div>
                <h2>{props.producto.title} - ${props.producto.price} </h2>
                <img className="max-w-[200px]" src={props.producto.image} alt={props.producto.title} />
                <p>{props.producto.description}</p>
                <p>Precio : ${props.producto.price}</p>
                <Contador stock={props.producto.stock} initial={1} onAdd={handle} />
            </div>
        )
    }
}
export default ItemDetail