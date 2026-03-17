import { Link } from "react-router-dom";

export const Footer = () => (
    <footer className="bg-dark text-white pt-5 pb-2 mt-auto" style={{ borderTop: "4px solid #fa0606" }}>
        <div className="container text-center text-md-start">
            <div className="row g-4 align-items-start">
                
                {/* COLUMNA 1: IDENTIDAD (Un poco más estrecha) */}
                <div className="col-md-3">
                    <h4 className="fw-bold mb-3 text-uppercase">
                        JAFRAUTO<span className="text-danger">MOTOR</span>
                    </h4>
                    <p className="small text-secondary mb-4">
                        Tu taller de confianza en Jaén. Calidad y rapidez en el Polígono de los Olivares.
                    </p>
                    <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                        <a href="https://www.facebook.com/jafrauto/?locale=es_LA" className="btn btn-outline-light btn-sm rounded-circle"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/jafrauto/" className="btn btn-outline-light btn-sm rounded-circle"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.tiktok.com/tag/jafrautomotor" className="btn btn-outline-light btn-sm rounded-circle"><i className="fa-brands fa-tiktok"></i></a>
                    </div>
                </div>

                {/* COLUMNA 2: MENÚ (Ahora al lado de Identidad) */}
                <div className="col-md-2 offset-md-1">
                    <h6 className="fw-bold text-uppercase text-danger mb-4">Menú</h6>
                    <ul className="list-unstyled small">
                        <li className="mb-2"><Link to="/" className="text-secondary text-decoration-none hover-red">Inicio</Link></li>
                        <li className="mb-2"><Link to="/taller" className="text-secondary text-decoration-none hover-red">El Taller</Link></li>
                        <li className="mb-2"><Link to="/servicios" className="text-secondary text-decoration-none hover-red">Servicios</Link></li>
						<li className="mb-2"><Link to="/presupuesto" className="text-secondary text-decoration-none hover-red">Presupuesto</Link></li>
                        <li className="mb-2"><Link to="/contacto" className="text-secondary text-decoration-none hover-red">Contacto</Link></li>
                    </ul>
                </div>

                {/* COLUMNA 3: CONTACTO Y MAPA (Ocupa el resto de la fila) */}
                <div className="col-md-6">
                    <h6 className="fw-bold text-uppercase text-danger mb-4">Contacto y Ubicación</h6>
                    <div className="row g-3">
                        {/* Datos de contacto */}
                        <div className="col-sm-6">
                            <ul className="list-unstyled small mb-0">
                                <li className="mb-2 text-secondary d-flex align-items-start">
                                    <i className="fa-solid fa-location-dot me-2 text-danger mt-1"></i>
                                    <span>Calle Bedmar, 118, Pol. Olivares<br/>23009 Jaén</span>
                                </li>
                                <li className="mb-2">
                                    <a href="tel:+34637830670" className="text-secondary text-decoration-none hover-red d-block">
                                        <i className="fa-solid fa-phone me-2 text-danger"></i>637 830 670 (Francisco)
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="tel:+34659603058" className="text-secondary text-decoration-none hover-red d-block">
                                        <i className="fa-solid fa-phone me-2 text-danger"></i>659 603 058 (Jacinto)
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:jafrautomotor@gmail.com" className="text-secondary text-decoration-none hover-red d-block text-truncate">
                                        <i className="fa-solid fa-envelope me-2 text-danger"></i>jafrautomotor@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Mapa */}
                        <div className="col-sm-6">
                            <div className="shadow-sm border border-secondary overflow-hidden" style={{ borderRadius: "8px" }}>
                                <iframe
                                    src="https://www.google.com"
                                    width="100%"
                                    height="110"
                                    style={{ border: 0, display: "block" }}
                                    allowFullScreen=""
                                    loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BARRA INFERIOR LEGAL */}
            <div className="border-top border-secondary mt-4 pt-3 pb-3">
                <div className="row align-items-center">
                    <div className="col-md-7 text-center text-md-start">
                        <p className="small text-secondary mb-0">
                            COPYRIGHT &nbsp; © {new Date().getFullYear()} JAFRAUTO MOTOR | <i className="fa-solid fa-wrench text-danger mx-1" />Desarrollo y diseño by Miguel C.
                        </p>
                    </div>
                    <div className="col-md-5 text-center text-md-end mt-2 mt-md-0">
                        <Link to="/avisoLegal" className="text-secondary text-decoration-none small mx-2 hover-red">Aviso Legal</Link>
                        <Link to="/politicaPrivacidad" className="text-secondary text-decoration-none small mx-2 hover-red">Privacidad</Link>
                        <Link to="/cookies" className="text-secondary text-decoration-none small mx-2 hover-red">Cookies</Link>
                    </div>
                </div>
            </div>
        </div>

        <style>{`
            .hover-red:hover { color: #fa0606 !important; transition: 0.3s; }
        `}</style>
    </footer>
);