const Header = () => {
    
    const id = "app-header"
    const edad = 34

    return (
        <header id={id} className={"header-" + edad}>
            <h1>Titulo</h1>
        </header>
    )
}

export default Header