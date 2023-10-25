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