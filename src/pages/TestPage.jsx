import { useNavigate, useParams } from "react-router-dom"
import productos from "../productos.json"
import { useEffect, useState } from "react"

function TestPage() {

    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({})
    const [notFound, setNotFound] = useState(true)
    const navigate = useNavigate()
    const params = useParams()

    useEffect(()=>{

        setTimeout(() => {
            setLoading(false)
            productos.forEach(producto=>{
                /* console.log("🚀 ~ setTimeout ~ params.id:", params.id)
                console.log("🚀 ~ setTimeout ~ producto.id:", producto.id) */
                if(producto.id === parseInt(params.id)) {
                    //console.log("🚀 ~ setTimeout ~ producto:", producto)
                    setNotFound(false)
                    setProducto(producto)
                } 

            })
        }, 2000);

    },[])    


    useEffect(()=>{
        if(notFound && !loading) {
            navigate("/404")
        }
    },[notFound,loading])


    if(loading) {
        return <p>Cargando...</p>
    }

    /* if(notFound) {
        return <p>Producto no encontrado</p>
    } */

    return (
        <div>
            <h2>{producto.title}</h2>
        </div>
    )
}
export default TestPage