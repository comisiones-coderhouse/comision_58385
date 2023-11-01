import { createContext, useState } from "react"

export const contexto = createContext()
const Provider = contexto.Provider

const CustomProvider = (props) => {

    const [darkMode, setDarkMode] = useState(false)
    const [carrito, setCarrito] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const handleToggleDark = () => {
        setDarkMode(!darkMode)
    }

    const handleIncrementTotal = (nuevaCant) => {
        setCantidadTotal(cantidadTotal + nuevaCant)
    }

    const handleAddProduct = (product,cant) => {
        //1 verificar la long del carrito
        //2 si no tiene nada, le agrego al final
        //3 si tiene algo, lo recorro hasta encontrar el producto y le sumo la cantidad

        //const copia = ?

        //se pueden copiar arrays con .map / .slice / ...etc
        
        //copia.push() - copia.pop() - copia.shift() - copia.unshift() - copia.splice()
        //setCarrito(copia)
    }

    const valorDelContexto = {
        dark: darkMode,
        toggleDark : handleToggleDark,
        cantidadTotal: cantidadTotal,
        incrementTotal: handleIncrementTotal,
    }

    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}

export default CustomProvider