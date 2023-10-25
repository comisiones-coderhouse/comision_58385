import { useContext } from "react"
import { contexto } from "../providers/CustomProvider"
import { Link, NavLink } from "react-router-dom"

const Header = () => {

    const valorDelContexto = useContext(contexto)

    return (
        <header className="header">
            <Link to="/">
                <h1 className="font-extrabold text-xl">La gran estafa</h1>
            </Link>
            <nav className="navbar">
                <NavLink to="/clothing">ropa</NavLink>
                <NavLink to="/jewelery">jewelery</NavLink>
                <NavLink to="/cart">carrito</NavLink>
                <button className="material-icons">shopping_cart</button>
                {valorDelContexto.cantidadTotal}
            </nav>
        </header>
    )
}

export default Header