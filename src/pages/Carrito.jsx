import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore"
import { useContext } from "react"
import { toast } from "sonner"
import { app } from "../firebaseConfig"
import { contexto } from "../providers/CustomProvider"

//app -> db -> collection -> {getDocs/getDoc/addDoc/updateDoc/deleteDoc} -> .then()



const Carrito = () => {

    const valorDelContexto = useContext(contexto)
    //let id;

    const handleClick = () => {
        valorDelContexto.toggleDark()
    }

    const handleFinalizarCompra = () => {
        //tendria que ya tener a mano lo siguiente : 
        //el array de productos "carrito" que este guardado en el contexto
        //info de un usuario
        //fecha de compra
        const compra = {
            carrito: [{id: "1", cantidad: 1, precio: 1000}],
            usuario: {},
            created_at: serverTimestamp(),
            //created_at: new Date()
        }

        const db = getFirestore(app)
        //En este caso el nombre de la coleccion no existe, lo invente yo y se va a crear cuando se le inserte el primer documento
        const comprasCollection = collection(db, "compras")

        const consulta = addDoc(comprasCollection, compra)

        consulta
            .then((resultado)=>{
                console.log(resultado.id)
                //id = resultado.id
                toast.success("Compra guardada con exito!")
            })
            .catch((err) => {
                console.log(err)
                toast.error("Ocurrio un error al guardar la compra")
            })

    }

    return (
        <div>
            <h2 className="font-bold text-2xl mb-8">Carrito</h2>
            {/* <button onClick={handleClick}>toggle dark</button>
            <p>Dark mode: {JSON.stringify(valorDelContexto)}</p> */}
            <button onClick={handleFinalizarCompra} className="btn">finalizar compra</button>
        </div>
    )
}
export default Carrito