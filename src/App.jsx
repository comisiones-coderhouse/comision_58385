import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"


//APIs
//APIs WEB
//APIs REST
//APIs GraphQL
//APIs SOAP

//HTTP
//Request : url/ip - metodo (GET,POST,PUT,PATCH,DELETE,etc)

/* fetch("https://jsonplaceholder.typicode.com/")

fetch("https://jsonplaceholder.typicode.com/users",{
  method : "POST"
})


 */

/* 


baseUrl : https://myapi.com/api/v1


Endpoints : 

  /users  : POST (params : {limit number})
  /users/:id : GET
  /users : POST  (params : {name string,lastname string,email string,phone number})

*/
/* 
fetch("https://myapi.com/api/v1/users")
fetch("https://myapi.com/api/v1/users",{
  method : "POST",
  body : {limit : 10}
})

 */


const pedido = fetch('https://fakestoreapi.com/productss')

pedido.then((respuesta)=>{
  console.log(respuesta)
  if(respuesta.status < 400){
    console.log("termino el pedido bien")
  } else {
    console.log("termino el pedido mal")
  }
})

pedido.catch((error)=>{
  console.log("termino el pedido mal")
  console.log(error)
})







const App = () => {

  return (
    <>
      <Header nombre="Horacio"/>
      <Main />
      <Footer />
    </>
  )
}

export default App