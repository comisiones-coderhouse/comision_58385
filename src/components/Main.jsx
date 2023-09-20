const Main = (props) => {

    const nombre = "Facundo"
    const edad = 34

    return (
        <main className="main">
            <h2>Home</h2>
            <p>Bienvenido {nombre}!</p>
            <p>Tenes {edad} años!</p>
            <p>Te gustan los juegos:</p>
            <p>{props.juegos[0]}</p>
            <p>{props.juegos[1]}</p>
        </main>
    )
}

export default Main