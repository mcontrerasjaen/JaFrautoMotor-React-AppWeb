import { Link } from "react-router-dom";

export const Promociones = () => {
    const promos = [
        {
            id: "p1",
            titulo: "PACK PRE-ITV",
            antes: "60€",
            ahora: "39€",
            descripcion: "Revisión de 50 puntos clave + reglaje de faros incluido. ¡Pasa la ITV a la primera!",
            valido: "Hasta fin de mes",
            color: "danger"
        },
        {
            id: "p2",
            titulo: "CARGA AIRE ACONDICIONADO",
            antes: "80€",
            ahora: "55€",
            descripcion: "Carga de gas R134a + revisión de fugas + desinfección de conductos con ozono.",
            valido: "Especial Verano",
            color: "dark"
        },
        {
            id: "p3",
            titulo: "CAMBIO ACEITE Y FILTRO",
            antes: "110€",
            ahora: "85€",
            descripcion: "Aceite sintético 5W30 (hasta 5L) + Filtro de aceite + Revisión de niveles gratuita.",
            valido: "Clientes Web",
            color: "danger"
        }
    ];

    return (
        <div className="container mt-5 pt-4">
            <div className="text-center mb-5">
                <h1 className="fw-bold display-4 text-uppercase">Ofertas <span className="text-danger">Especiales</span></h1>
                <p className="text-secondary lead">Aprovecha nuestros descuentos exclusivos en JaFrauto Motor</p>
                <div className="mx-auto bg-danger" style={{ width: "60px", height: "4px" }}></div>
            </div>

            <div className="row g-4 mb-5">
                {promos.map((p) => (
                    <div className="col-md-4" key={p.id}>
                        <div className={`card h-100 border-2 border-${p.color} shadow-sm position-relative overflow-hidden`}>
                            {/* Etiqueta de Descuento */}
                            <div className={`bg-${p.color} text-white position-absolute p-2 px-4`} 
                                 style={{ top: "15px", right: "-30px", transform: "rotate(45deg)", fontSize: "0.8rem", fontWeight: "bold" }}>
                                OFERTA
                            </div>

                            <div className="card-body p-4 text-center">
                                <h4 className={`fw-bold text-${p.color} mb-3`}>{p.titulo}</h4>
                                <div className="mb-3">
                                    <span className="text-muted text-decoration-line-through me-2 fs-5">{p.antes}</span>
                                    <span className="display-6 fw-bold text-dark">{p.ahora}</span>
                                </div>
                                <p className="small text-secondary mb-4">{p.descripcion}</p>
                                <div className="border-top pt-3">
                                    <p className="text-uppercase mb-3 small fw-bold text-muted">
                                        <i className="fa-solid fa-calendar-check me-2"></i>{p.valido}
                                    </p>
                                    <Link to="/contacto" className={`btn btn-${p.color} w-100 fw-bold rounded-0 py-2`}>
                                        RESERVAR AHORA
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Aviso importante */}
            <div className="bg-light p-4 border-start border-4 border-danger rounded shadow-sm mb-5">
                <div className="d-flex align-items-center">
                    <i className="fa-solid fa-circle-info fa-2x text-danger me-3"></i>
                    <p className="mb-0 text-dark small fw-bold">
                        * Para aplicar estas promociones, indica que las has visto en la web al solicitar tu cita. 
                        Precios con IVA incluido. Válido para turismos estándar.
                    </p>
                </div>
            </div>
        </div>
    );
};