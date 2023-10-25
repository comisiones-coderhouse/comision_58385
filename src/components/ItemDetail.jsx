import { useContext } from "react"
import Contador from "./Contador"
import { contexto } from "../providers/CustomProvider"

//Padre
function ItemDetail(props) {

    
    const valorDelContexto = useContext(contexto)

    const handle = (cantidadSeleccionada) => {
        console.log("cantidad seleccionada", cantidadSeleccionada)
    }

    const handleClick = () => {
        valorDelContexto.incrementTotal(5)
    }

    return (
        <div>
            <h2>{props.producto.title} - ${props.producto.price} </h2>
            <img className="max-w-[200px]" src={props.producto.image} alt={props.producto.title} />
            <p>{props.producto.description}</p>
            <p>Precio : ${props.producto.price}</p>
            <Contador inicial={1} handle={handle} />
            <button className="btn" onClick={handleClick}>agregar a carrito</button>
        </div>
    )
}
export default ItemDetail