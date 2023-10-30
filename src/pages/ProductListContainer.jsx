import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { ProductList } from "../components/ProductList"
import { app } from "../firebaseConfig"


function ProductListContainer() {

  const [productos, setProductos] = useState([])

  
  useEffect(() => {

    toast("Cargando productos...")
    
    const db = getFirestore(app)
    const productosCollection = collection(db, "productos")

    //const filtro = query(productosCollection,where("category","==","electronics"))
    //const filtro = query(productosCollection,where("category","==","clothing"))
    const filtro = query(productosCollection,
        where("category","==","clothing"),
        where("price",">",10))

    const consulta = getDocs(filtro)


    consulta
      .then((resultado) => {

        const productos = resultado.docs.map(doc => {
          const id = doc.id
          const data = doc.data()
          data.id = id
          return data
        })
        
        setProductos(productos)
        toast.dismiss()

      }).catch((err) => {
        console.log(err)
        toast.error("Ocurrio un error al cargar los productos")
      })

    return () => {
      console.log("Se desmonto el componente : componentWillUnmount")
    }
  }, [])


  return (
    <div>
      <h2 className="font-bold text-2xl mb-8">Home Page</h2>
      <ProductList productos={productos} />
    </div>
  )
}

export default ProductListContainer