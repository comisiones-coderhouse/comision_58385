import { useNavigate } from "react-router-dom"


export const ProductList = (props) => {
    
    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate("/detalle/1")
    }

    return (
        <section className="card-container">
            {props.productos.map((producto) => {
                return (
                    <article key={producto.id} className="card">
                        <h2 className="card__title">{producto.title}</h2>
                        <img className="card__image" src={producto.image} alt={producto.title} />
                        <p>precio : ${producto.price}</p>
                        <button onClick={handleRedirect} className="btn">ver mas</button>
                    </article>
                )
            })}
        </section>
    )
}