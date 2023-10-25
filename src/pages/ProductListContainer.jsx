import { useEffect, useState } from "react"
import { ProductList } from "../components/ProductList"
import { toast } from "sonner"

import { app } from "../firebaseConfig"
import { getFirestore, collection, getDocs } from "firebase/firestore"



//getDocs , getDoc , addDoc , doc , collection , query , where

//Extraer la referencia de la base de datos
const db = getFirestore(app)

//Extraer la referencia de la coleccion de productos
const productosCollection = collection(db, "productos")

//Hacer la consulta (analogo a un fetch())
const consulta = getDocs(productosCollection)

consulta.then((resultado)=>{
  
  //console.log(resultado) todo lo que me vino de la consultao
  //console.log(resultado.docs) un array con los documentos en "referencia" de la consulta
  //habria que recorrer el array de docs y por cada doc , extraerle la informacion
  //habria que juntar data() con .id para que quede un objeto producto con todo junto
  
  console.log(resultado.docs[0])
  console.log(resultado.docs[0].id)
  console.log(resultado.docs[0].data())

})

consulta.catch((err)=>{
  console.log({err})
})






function ProductListContainer() {

  const [productos, setProductos] = useState([])

  useEffect(() => {

    //const promesa = new Promise((r)=>{r([])})
    //const promesa = db.getProductos()
    const promesa = fetch("https://fakestoreapi.com/products")

    promesa
      .then((res) => { return res.json() })
      .then((res) => {
        setProductos(res)
      })
      .catch((err) => {
        //toast.error("")
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