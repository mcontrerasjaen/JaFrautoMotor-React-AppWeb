import { useState } from "react"; // Importante para el estado del detalle
import useGlobalReducer from "../hooks/useGlobalReducer";
import { DetallesPersonaje } from "../components/DetallesPersonaje";


export const Favoritos = () => {
    const { store, dispatch } = useGlobalReducer();
    const { favoritos } = store;

    // Estado para manejar la vista de detalles
    const [seleccionado, setSeleccionado] = useState(null);

    // Función para obtener detalles (copiada de tu componente Personajes)
    const verDetalles = async (id, categoria) => {
    // Si la categoría no viene (por seguridad), usamos characters por defecto
    const endpoint = categoria || "characters"; 
    
    try {
        const response = await fetch(`https://starwars-databank-server.vercel.app{endpoint}/${id}`);
        const data = await response.json();
        setSeleccionado(data);
    } catch (error) {
        console.error(`Error al obtener detalles de ${endpoint}:`, error);
    }
};

    // Si hay un personaje seleccionado, mostramos sus detalles
    if (seleccionado) {
        return <DetallesPersonaje info={seleccionado} volver={() => setSeleccionado(null)} />;
    }

    const wordText = (text, wordLimit) => {
        if (!text) return "";
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };

    return (
        <div className="container mt-5 pt-5 text-light text-center">
            <h1 className="text-warning fw-bold mb-5">MIS FAVORITOS ({favoritos.length})</h1>

            {favoritos.length === 0 ? (
                <h3 className="text-white mt-5">No tenemos nada en tu lista negra...</h3>
            ) : (
                /* Grid responsiva mejorada */
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 text-start">
                    {favoritos.map((fav) => (
                        <div className="col" key={fav._id}>
                            <article className="card h-100 bg-dark text-light border-warning shadow">
                                <img
                                    src={fav.image}
                                    className="card-img-top"
                                    alt={fav.name}
                                    style={{ height: "180px", objectFit: "cover" }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-warning">{fav.name}</h5>
                                    <p className="small text-white">{wordText(fav.description, 10)}</p>

                                    {/* Botones de acción */}
                                    <div className="mt-auto d-grid gap-2">
                                        <button
                                            onClick={() => setSeleccionado(fav)} // Usas los datos que YA tienes
                                            className="btn btn-outline-warning btn-sm"
                                        >
                                            Ver detalles
                                        </button>
                                        <button
                                            className="btn btn-outline-danger btn-sm"
                                            onClick={() => dispatch({ type: 'toggle_favorito', payload: fav })}
                                        >
                                            Eliminar ❌
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};