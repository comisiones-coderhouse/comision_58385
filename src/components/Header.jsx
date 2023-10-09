import { Link , NavLink , useNavigate } from "react-router-dom"

const Header = (props) => {

    const navigate = useNavigate()

    return (
        <header className="header">

            <Link to="/">
                <h1>{props.nombre}</h1>
            </Link>

            <nav className="navbar">

                {/* <a href="/productos">link</a> */}
                <NavLink to="/clothing">ropa</NavLink>

                {/* <a href="/carrito">link</a> */}
                <NavLink to="/jewelery">jewelery</NavLink>

                {/* <a href="/carrito">link</a> */}
                <NavLink to="/cart">carrito</NavLink>

                <button onClick={() => navigate("/cart")}>carrito</button>
            </nav>
        </header>
    )
}

export default Header