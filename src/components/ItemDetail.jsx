import { useContext } from "react"
import { contexto } from "../App"
import Contador from "./Contador"

//Padre
function ItemDetail(props) {

    
    const valorDelContexto = useContext(contexto)

    console.log(valorDelContexto)

    const handle = (cantidadSeleccionada) => {
        console.log("Soy la handle de item detail")
        console.log("cantidad seleccionada", cantidadSeleccionada)
    }

    return (
        <div>
            <h2>{props.producto.title} - ${props.producto.price} </h2>
            <img className="max-w-[200px]" src={props.producto.image} alt={props.producto.title} />
            <p>{props.producto.description}</p>
            <p>Precio : ${props.producto.price}</p>
            {/* el contador deberia desaparecer cuando me llega la cantidad confirmada al detalle */}
            <Contador inicial={1} handle={handle} />
            {/* El boton de agregar solo aparece  cuando me llega una cantidad*/}
            <button className="btn">agregar a carrito</button>
        </div>
    )
}
export default ItemDetail