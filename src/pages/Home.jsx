import { Link } from "react-router-dom";


export const Home = () => {
    return (
        <div className="bg-light text-dark"> {/* Fondo claro para limpieza */}
            
            {/* HERO SECTION - Impacto Visual */}
            <section className="py-5" style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url("https://images.unsplash.com")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                color: 'white'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 text-center text-lg-start">
                            <h1 className="display-2 fw-bold mb-3 text-uppercase">
                                JaFrauto <span className="text-danger">Motor</span>
                            </h1>
                            <h2 className="h4 fw-light mb-4 border-start border-danger border-4 ps-3">
                                Confianza y Precisión en cada Kilómetro
                            </h2>
                            <p className="lead mb-5 opacity-75">
                                Especialistas en mecánica integral, diagnosis avanzada y servicios urgentes con repuestos oficiales.
                            </p>
                            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-lg-start">
                                <Link to="/servicios" className="btn btn-danger btn-lg px-5 py-3 fw-bold shadow-lg">
                                    VER SERVICIOS
                                </Link>
                                <Link to="/urgente" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold">
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
                    <a href="https://wa.me" className="btn btn-success btn-lg px-5 shadow">
                        <i className="fa-brands fa-whatsapp me-2"></i> CONSULTAR AHORA
                    </a>
                </div>
            </section>
        </div>
    );
};