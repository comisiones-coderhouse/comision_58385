/* 

const btn = document.querySelector('.btn')

btn.addEventListener("click",()=>{
    const input = document.querySelector('.form-input')
    console.log(input.innerText)
})

 */

import { useRef } from "react"

function Formulario() {

    //estados
    const inputRef = useRef(null)


    //acciones
    const handleClick = () => {
        console.log(inputRef.current.value)
    }
    

    //vista
    return (
        <div>
            <input ref={inputRef} type="text" className="form-input" />
            <button onClick={handleClick} className="btn">Enviar</button>
        </div>
    )
}

export default Formulario