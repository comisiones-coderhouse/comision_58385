import { useContext } from "react"
import { contexto } from "../providers/CustomProvider"

const Carrito = () => {

    const valorDelContexto = useContext(contexto)

    const handleClick = () => {
        valorDelContexto.toggleDark()
    }
    
    return (
        <div>
            <h2 className="font-bold text-2xl mb-8">Carrito</h2>
            <button onClick={handleClick}>toggle dark</button>
            <p>Dark mode: {JSON.stringify(valorDelContexto)}</p>
        </div>
    )
}
export default Carrito