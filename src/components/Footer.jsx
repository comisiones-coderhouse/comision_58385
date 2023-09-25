import { useState } from "react"


function Footer(props) {
    //ESTADOS : la info que tiene el componente para trabajr
    //const ModoDark = true
    const [modoDark] = useState(true)

    //Vista : lo que se muestra en pantalla
    return (
        <footer className="footer">
            <p>Copyright 2023 - Horacio Gutierrez</p>
            <p>Modo Dark  : {JSON.stringify(modoDark)}</p>
        </footer >
    )
}

export default Footer