import useGlobalReducer from "../hooks/useGlobalReducer";

export const Servicios = () => {
    const { store, dispatch } = useGlobalReducer();
    const { urgente } = store;

    // LISTA DE SERVICIOS (Asegúrate de que empiece con;
    const catalogoServicios = [
        { id: 1, name: "Cambio de Aceite", icon: "fa-oil-can", description: "Mantenimiento esencial con aceite sintético de alta gama.", image: "https://images.unsplash.com" },
        { id: 2, name: "Sistema de Frenos", icon: "fa-circle-stop", description: "Revisión y cambio de pastillas y discos para tu seguridad.", image: "https://images.unsplash.com" },
        { id: 3, name: "Diagnosis Electrónica", icon: "fa-microchip", description: "Lectura de fallos con equipos de última generación.", image: "https://images.unsplash.com" },
        { id: 4, name: "Neumáticos", icon: "fa-compact-disc", description: "Sustitución, equilibrado y alineación profesional.", image: "https://images.unsplash.com" },
        { id: 5, name: "Aire Acondicionado", icon: "fa-snowflake", description: "Carga de gas y revisión de fugas para el confort total.", image: "https://images.unsplash.com" },
        { id: 6, name: "Revisión Pre-ITV", icon: "fa-clipboard-check", description: "Chequeo de 50 puntos clave para pasar la ITV a la primera.", image: "https://images.unsplash.com" }
    ];

    const manejarUrgente = (servicio) => {
        dispatch({ type: 'toggle_urgente', payload: servicio });
    };


    return (
        <div className="container mt-5 pt-4 text-dark">
            <div className="text-center mb-5">
                <h1 className="fw-bold display-4">NUESTROS <span className="text-danger">SERVICIOS</span></h1>
                <p className="text-muted lead">Selecciona los mantenimientos que necesites para tu presupuesto urgente.</p>
            </div>

            <div className="row g-4">
                {catalogoServicios.map((serv) => {
                    // Comprobamos si este servicio ya está en la lista de urgentes
                    const estaEnUrgente = urgente.some(item => item.id === serv.id);

                    return (
                        <div className="col-md-6 col-lg-4" key={serv.id}>
                            <div className="card h-100 shadow-sm border-0 overflow-hidden">
                                {/* Imagen del servicio con overlay rojo al pasar el ratón */}
                                <div className="position-relative">
                                    <img src={serv.image} className="card-img-top" alt={serv.name} style={{ height: "200px", objectFit: "cover" }} />
                                    <div className="position-absolute top-0 end-0 m-3">
                                        <i className={`fa-solid ${serv.icon} fa-2x text-white p-2 bg-danger rounded`}></i>
                                    </div>
                                </div>

                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold text-uppercase">{serv.name}</h5>
                                    <p className="card-text text-secondary small flex-grow-1">{serv.description}</p>
                                    
                                    <button 
                                        onClick={() => manejarUrgente(serv)}
                                        className={`btn w-100 fw-bold mt-3 rounded-0 py-2 transition-all ${
                                            estaEnUrgente ? "btn-dark" : "btn-outline-danger"
                                        }`}
                                    >
                                        {estaEnUrgente ? (
                                            <> <i className="fa-solid fa-check me-2"></i>AÑADIDO A CITA</>
                                        ) : (
                                            <> <i className="fa-solid fa-plus me-2"></i>AÑADIR A MI CITA</>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Banner inferior de acción rápida */}
            <div className="bg-danger text-white p-4 mt-5 rounded shadow text-center">
                <h3 className="fw-bold">¿No encuentras lo que buscas?</h3>
                <p className="mb-4">Llámanos directamente y cuéntanos qué le ocurre a tu vehículo.</p>
                <a href="tel:+34900000000" className="btn btn-light btn-lg px-5 fw-bold text-danger">LLAMAR AHORA</a>
            </div>
        </div>
    );
};