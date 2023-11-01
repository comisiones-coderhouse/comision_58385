import { useState } from "react"

function Contador(props) {

    const [contador,setContador] = useState(props.initial)
    
    const handleSumar = () => {
        setContador(contador + 1)
    }

    const handleRestar = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }

    const handleResetear = () => {
        setContador(1)
    }

    const handleConfirmar = () => {
        props.onAdd(contador)
    }


    return (
        <div>
            <p>Contador Actual : {contador}</p>
            <button onClick={handleSumar} className="btn">sumar</button>
            <button onClick={handleRestar} className="btn">restar</button>
            <button onClick={handleResetear} className="btn">resetear</button>
            <button onClick={handleConfirmar} className="btn">confirmar cantidad</button>
        </div>
    )
}

export default Contador