import { useEffect, useRef, useState } from "react"
import { ProductList } from "../components/ProductList"

function ProductListContainer() {

  const [productos, setProductos] = useState([])

  useEffect(() => {

    const promesa = fetch("https://fakestoreapi.com/products")

    promesa
      .then((res) => { return res.json() })
      .then((res) => {
        setProductos(res)
      })

    return () => {
      console.log("Se desmonto el componente : componentWillUnmount")
    }
  }, [])

  return (
    <div>
      <h1 className="font-bold text-2xl">Home Page</h1>
      <hr />
      <ProductList productos={productos} />
    </div>
  )
}

export default ProductListContainer