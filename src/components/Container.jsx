import { useState } from "react"
import Presentacional from "./Presentacional"

function Container() {

    //Estados
    const [state, setState] = useState([])

    return (
        <Presentacional state={state} />
    )
}

export default Container