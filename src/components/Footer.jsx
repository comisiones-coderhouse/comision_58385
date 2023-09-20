import { useState } from "react"
//HOOK : es una funcion que permite agregar nueva funcionalidad a un componente. Hay varios que ya estan hechos por react, y tambien podemos crear los nuestros o instalar nuevos desde librerias externas.


function Footer() {

    const [modoDark] = useState(true) 

    if(modoDark) {
        return (
            <footer className="footer footer-dark">
                <p>Copyright 2023 - Horacio Gutierrez
                </p>
            </footer >
        )
    } else {
        return (
            <footer className="footer">
                <p>Copyright 2023 - Horacio Gutierrez</p>
            </footer >
        )
    }

}

export default Footer