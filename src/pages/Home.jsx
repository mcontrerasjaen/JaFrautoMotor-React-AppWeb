import { Link } from "react-router-dom";

export const Home = () => {

    const estiloPulso = (
        <style>{`
            @keyframes pulse-blanco-fuerte {
                0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8); }
                70% { box-shadow: 0 0 0 20px rgba(255, 255, 255, 0); }
                100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
            }
            .boton-latido {
                animation: pulse-blanco-fuerte 2s infinite !important;
                border: 2px solid white !important;
                position: relative;
                z-index: 10;
            }
        `}</style>
    );

    return (
        <div className="bg-light text-dark">
            {estiloPulso}

            {/* HERO SECTION CON TRANSICIÓN DIAGONAL RASGADA */}
            <section className="position-relative overflow-hidden" style={{ minHeight: '85vh', backgroundColor: '#1a1a1a' }}>

                {/* 1. FONDO DERECHO: LA FOTO DEL TALLER */}
                <div className="position-absolute top-0 end-0 h-100 w-100 w-lg-60" style={{
                    backgroundImage: 'linear-gradient(to right, rgba(26,26,26,1) 0%, rgba(26,26,26,0) 40%), url("/Portada.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 1
                }}></div>

                {/* 2. CAPA DE DEGRADADO DIAGONAL IZQUIERDA (Gris Industrial) */}
                <div className="position-absolute top-0 start-0 h-100 w-100" style={{
                    background: 'linear-gradient(115deg, rgba(26,26,26,1) 0%, rgba(26,26,26,0.9) 45%, rgba(26,26,26,0) 70%)',
                    zIndex: 2
                }}></div>

                {/* 3. EL "RASGADO" REALISTA (Capa decorativa en diagonal) */}
                <div className="position-absolute h-100 d-none d-lg-block" style={{
                    left: '45%',
                    width: '100px',
                    zIndex: 3,
                    background: 'url("https://www.transparenttextures.com")', // Textura sutil
                    boxShadow: '-20px 0 30px rgba(0,0,0,0.5)',
                    transform: 'skewX(-15deg)', // Inclinación diagonal
                    borderLeft: '4px solid #fa0606' // Línea roja de rotura
                }}></div>

                {/* 4. CONTENIDO (TEXTO Y BOTONES) */}
                <div className="container position-relative h-100 d-flex align-items-center" style={{ zIndex: 4, minHeight: '85vh' }}>
                    <div className="row w-100">
                        <div className="col-lg-6 text-center text-lg-start pt-5 pt-lg-0">
                            <h1 className="display-1 fw-bold mb-3 text-uppercase text-white">
                                JaFrauto <span className="text-danger">Motor</span>
                            </h1>
                            <h2 className="h4 fw-light mb-4 border-start border-danger border-4 ps-3 text-white">
                                Confianza y Precisión en cada Kilómetro
                            </h2>
                            <p className="lead mb-5 text-white-50" style={{ maxWidth: '500px' }}>
                                Especialistas en mecánica integral, diagnosis avanzada y servicios urgentes con repuestos oficiales en Jaén.
                            </p>
                            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-lg-start">
                                <Link to="/servicios" className="btn btn-danger btn-lg px-5 py-3 fw-bold shadow-lg rounded-0">
                                    VER SERVICIOS
                                </Link>
                                <Link
                                    to="/urgente"
                                    className="btn btn-outline-light btn-lg px-5 py-3 fw-bold rounded-0 boton-latido"
                                >
                                    CITA URGENTE 🚨
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN DE SERVICIOS - Fondo Blanco y Rojo */}
            <div className="container py-5 mt-n5">
                <div className="row g-4 text-center justify-content-center">
                    <div className="col-md-4">
                        <div className="card border-0 shadow-lg p-4 h-100 hover-top">
                            <div className="mb-3 text-danger">
                                <i className="fa-solid fa-screwdriver-wrench fa-3x"></i>
                            </div>
                            <h4 className="fw-bold">Mecánica General</h4>
                            <p className="text-muted small">Desde cambios de aceite hasta reparaciones complejas de motor.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 shadow-lg p-4 h-100 bg-danger text-white hover-top">
                            <div className="mb-3 text-white">
                                <i className="fa-solid fa-car-burst fa-3x"></i>
                            </div>
                            <h4 className="fw-bold">Asistencia Urgente</h4>
                            <p className="small">¿Te has quedado tirado? Prioridad máxima para averías en carretera.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 shadow-lg p-4 h-100 hover-top">
                            <div className="mb-3 text-danger">
                                <i className="fa-solid fa-shield-check fa-3x"></i>
                            </div>
                            <h4 className="fw-bold">Revisión Pre-ITV</h4>
                            <p className="text-muted small">Revisamos 50 puntos clave para que pases la inspección sin sustos.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* BANNER DE CONTACTO RÁPIDO */}
            <section className="bg-white py-5 border-top border-bottom border-light">
                <div className="container text-center">
                    <h2 className="fw-bold mb-4">¿Hablamos por <span className="text-danger">WhatsApp</span>?</h2>
                    <p className="mb-4">Envíanos una foto de tu avería o la ficha técnica y te damos presupuesto.</p>
                    <a href="https://wa.me/659603058" className="btn btn-success btn-lg px-5 shadow">
                        <i className="fa-brands fa-whatsapp me-2"></i> CONSULTAR AHORA
                    </a>
                </div>
            </section>
        </div>
    );
};