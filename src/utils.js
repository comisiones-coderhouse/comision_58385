export function getProductos() {

    return fetch('https://fakestoreapi.com/products')
        .then((respuesta) => {

            const datos = respuesta.json()
            return datos

        })
        .then((respuesta) => {
            return respuesta
        })
        .catch((error) => {
            console.log("termino el pedido mal")
            console.log(error)
        })

}