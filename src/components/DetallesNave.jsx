import useGlobalReducer from "../hooks/useGlobalReducer";

export const DetallesNave = ({ info, volver }) => {
     const { store, dispatch } = useGlobalReducer();

    if (!info) return null;
    
    // Extraemos los datos para asegurar que lleguen bien
    const nave = info.data || info;
    const esFavorito = store.favoritos.some(f => f._id === nave._id);
    
    return (
        <div className="container mt-5 p-5 bg-dark text-light rounded border border-warning shadow-lg min-vh-75">
            <div className="d-flex justify-content-between align-items-start mb-4">
                <button onClick={volver} className="btn btn-outline-warning px-4 fw-bold">
                    ← VOLVER A LA LISTA
                </button>

                {/* BOTÓN DE FAVORITO EN EL DETALLE */}
                <button 
                    className="btn btn-outline-warning border-0 fs-2"
                    onClick={() => dispatch({ type: 'toggle_favorito', payload: nave })}
                    title={esFavorito ? "Quitar de favoritos" : "Añadir a favoritos"}
                >
                    {esFavorito ? "💛" : "🤍"}
                </button>
            </div>
            
            <div className="row align-items-center">
                <div className="col-md-5 text-center">
                    <img 
                        src={nave.image} 
                        className="img-fluid rounded shadow" 
                        alt={nave.name}
                        style={{ 
                            width: "100%",
                            maxHeight: "600px", 
                            objectFit: "cover", 
                            border: "3px solid #ffc107" 
                        }}
                    />
                </div>
                
                <div className="col-md-7 ps-md-5">
                    <h1 className="text-warning display-3 fw-bold mb-4">{nave.name}</h1>
                    <hr className="bg-warning mb-4" style={{ height: "3px", opacity: "1" }} />
                    
                    <p className="fs-4 lh-base" style={{ textAlign: "justify", color: "#f8f9fa" }}>
                        {nave.description || "No hay descripción disponible para esta nave."}
                    </p>
                    
                    <div className="mt-5">
                        <span className="badge bg-warning text-dark fs-6 p-2 px-3">
                            IDENTIFICADOR: {nave._id}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};