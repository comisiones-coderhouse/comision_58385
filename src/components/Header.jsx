const Header = (props) => {

    return (
        <header className="header">
            <h1>{props.nombre}</h1>
            <nav className="navbar">
                <a href="#">link</a>
                <a href="#">link</a>
                <a href="#">link</a>
            </nav>
        </header>
    )
}

export default Header