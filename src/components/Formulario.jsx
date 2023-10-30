import { useRef } from "react"

function Formulario() {

    const inputRef = useRef(null)


    const handleClick = () => {
        console.log(inputRef.current.value)
    }
    

    return (
        <div>
            <input ref={inputRef} type="text" className="form-input"/>
            <button onClick={handleClick} className="btn">Enviar</button>
        </div>
    )
}

export default Formulario