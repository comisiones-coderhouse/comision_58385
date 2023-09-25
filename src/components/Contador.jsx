import { useState } from "react"


/* JS vanilla */

/* 

let contador = 0

const handleClick = () => {
    contador = contador + 1
    const p = document.querySelector("p")
    p.textContent = `Contador Actual : ${contador}`
}

const btn = document.querySelector(".btn")
btn.addEventListener("click", handleClick)
btn.addEventListener("click", ()=>{}) */

/* End JS vanilla */




function Contador(/* {inicial,stock} */props) {

    /* const {inicial,stock} = props */

    //Estados
    const [contador,setContador] = useState(props.inicial)
    

    //Acciones(metodos)
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



    //Render(vista)
    return (
        <div>
            <p>Contador Actual : {contador}</p>
            <button onClick={handleSumar} className="btn">sumar</button>
            <button onClick={handleRestar} className="btn">restar</button>
            <button onClick={handleResetear} className="btn">resetear</button>
        </div>
    )
}

export default Contador