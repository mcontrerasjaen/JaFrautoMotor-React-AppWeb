import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Urgente = () => { 
    const { store, dispatch } = useGlobalReducer();
    
    // CAMBIO CLAVE: Extraer 'urgente' en lugar de 'favoritos'
    const { urgente } = store;

    const [seleccionado, setSeleccionado] = useState(null);

    if (seleccionado) {
        return (
            <div className="container mt-5 pt-5 text-center text-white">
                <div className="p-5 bg-dark border border-danger rounded shadow-lg">
                    <h2 className="text-danger fw-bold">DETALLES: {seleccionado.name}</h2>
                    <p className="mt-3 lead">{seleccionado.description}</p>
                    <button className="btn btn-outline-light mt-4" onClick={() => setSeleccionado(null)}>Volver</button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5 pt-5 text-light text-center">
            <div className="bg-danger p-4 rounded-3 mb-5 shadow-lg">
                <h1 className="fw-bold text-white mb-2">🚨 ASISTENCIA MECÁNICA URGENTE</h1>
                <p className="mb-0">¿Necesitas una grúa o reparación inmediata? Llámanos.</p>
                <a href="tel:+34659603058" className="btn btn-light fw-bold mt-3 px-5 py-2 text-danger shadow">
                    LLAMAR AHORA: +34 659 603 058
                </a>
            </div>

            {/* Cambiado favoritos.length por urgente.length */}
            <h2 className="text-start mb-4 border-start border-4 border-danger ps-3 text-dark">
                SERVICIOS SELECCIONADOS ({urgente ? urgente.length : 0})
            </h2>

            {!urgente || urgente.length === 0 ? (
                <div className="py-5 border border-secondary rounded border-dashed opacity-50">
                    <h3 className="text-secondary text-dark">No hay servicios marcados para presupuesto.</h3>
                </div>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4 text-start">
                    {urgente.map((fav) => (
                        <div className="col" key={fav.id || fav._id}>
                            <article className="card h-100 bg-dark text-light border-danger shadow">
                                <img
                                    src={fav.image || "https://images.unsplash.com"}
                                    className="card-img-top"
                                    alt={fav.name}
                                    style={{ height: "180px", objectFit: "cover" }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-danger fw-bold">{fav.name}</h5>
                                    <div className="mt-auto d-grid gap-2">
                                        <button onClick={() => setSeleccionado(fav)} className="btn btn-danger btn-sm">Ver detalles</button>
                                        <button 
                                            className="btn btn-outline-secondary btn-sm border-0" 
                                            onClick={() => dispatch({ type: 'toggle_urgente', payload: fav })} // Tipo de acción corregido
                                        >
                                            Eliminar
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