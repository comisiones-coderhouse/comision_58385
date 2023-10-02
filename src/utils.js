export function getProductos() {
    console.log("Get Productos...")

    return fetch('https://fakestoreapi.com/products')
        .then((respuesta) => {

            if (respuesta.status < 400) {
                console.log("termino el pedido bien")
            } else {
                console.log("termino el pedido mal")
            }

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


//GET : Se pide un array de posteos
//fetch("https://jsonplaceholder.typicode.com/posts?posteo=Mi%20posteo%20super%20genial")

//POST : se guarda un posteo nuevo

/* export function demoEnviarPosteo(texto) {

    const pedido = fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ posteo: texto }),
        headers: {
            "Content-type": "application/json"
        }
    })

    pedido
        .then((respuesta) => {
            console.log(respuesta)
        })
        .catch((error) => {
            console.log(error)
        })
} */