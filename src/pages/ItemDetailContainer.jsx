import { useNavigate, useParams } from "react-router-dom"
import productos from "../productos.json"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import ItemDetail from "../components/ItemDetail"

function ItemDetailContainer() {

    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({})
    const [notFound, setNotFound] = useState(true)
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        toast.success("Cargando producto...")
        setTimeout(() => {
            setLoading(false)
            toast.success("Producto cargado")
            productos.forEach(producto => {
                if (producto.id === parseInt(params.id)) {
                    setNotFound(false)
                    setProducto(producto)
                }

            })
        }, 2000);

    }, [])


    useEffect(() => {
        if (notFound && !loading) {
            navigate("/404")
        }
    }, [notFound, loading])


    if (loading) {
        return <p>Cargando...</p>
    }

    return (
        <div>
            <h1 className="text-xl font-bold">Detalle del producto</h1>
            <hr />
            <ItemDetail producto={producto} />
        </div>
    )
}
export default ItemDetailContainer