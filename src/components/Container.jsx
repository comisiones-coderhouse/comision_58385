import { useState , useEffect } from "react"
import Presentacional from "./Presentacional"
import { getProductos } from "../utils"

function Container() {
    //Estados
    const [state, setState] = useState([])

    //Efectos
    useEffect(()=>{
        const resultado = getProductos()
        resultado.then(productos=>{
            console.log("Termino de traerse productos")
            setState(productos)
        })

        const intervalo = setInterval(()=>{
            console.log("Hola")
        },1000)

        //es la ultima cosa que se ejecuta antes del desmontaje del componente
        return () => {
            clearInterval(intervalo)
        }
    },[])
    
    //Vista
    return (
        <Presentacional state={state} />
    )
}

export default Container