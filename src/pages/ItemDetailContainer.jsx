import { collection, doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"
import ItemDetail from "../components/ItemDetail"
import { app } from "../firebaseConfig"


function ItemDetailContainer() {

    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({})
    const [notFound, setNotFound] = useState(true)
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        toast.success("Cargando producto...")

        const db = getFirestore(app)
        const productosCollection = collection(db, "productos")

        //const docRef = doc(productosCollection, "6r5ScQcj0nV9CqGIbrYE")
        const docRef = doc(productosCollection, "RaLqRGuXRsqvjglwl1Bb")
        const consulta = getDoc(docRef)


        consulta
            .then((resultado)=>{
                //console.log(resultado)
                //console.log(resultado.id)
                //console.log(resultado.data())
                const producto = resultado.data()
                producto.id = resultado.id
                setProducto(producto)
                setNotFound(false)
            })
            .catch((err) => {
                console.log(err)
                toast.error("Ocurrio un error al cargar el producto")
            })
            .finally(()=>{
                setLoading(false)
                toast.dismiss()
            })

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
            <h2 className="font-bold text-2xl mb-8">Home Page</h2>
            <ItemDetail producto={producto} />
        </div>
    )
}
export default ItemDetailContainer