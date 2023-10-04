import { useState , useEffect } from "react"
import Presentacional from "./Presentacional"
import { getProductos } from "../utils"

function Container() {
    
    //Estados
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    //Efectos
    useEffect(()=>{
        const resultado = getProductos()
        resultado.then(productos=>{
            console.log("Termino de traerse productos")
            setProductos(productos)
            setLoading(false)
        })
    },[])
    
    
    //Vista
    if(loading) return <p>cargando...</p>

    return (
        <Presentacional productos={productos} />
    )
}

export default Container