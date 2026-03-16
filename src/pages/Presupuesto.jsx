import { useState } from "react";

export const Presupuesto = () => {
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviado(true);
    };

    if (enviado) {
        return (
            <div className="container mt-5 pt-5 text-center text-dark vh-100">
                <div className="card border-0 shadow-lg p-5 bg-white">
                    <i className="fa-solid fa-paper-plane fa-4x text-danger mb-4"></i>
                    <h2 className="fw-bold">¡SOLICITUD ENVIADA!</h2>
                    <p className="lead text-secondary">Hemos recibido los datos de tu vehículo. Francisco o Jacinto te contactarán pronto con una valoración.</p>
                    <button className="btn btn-danger mt-3 px-5 rounded-0 fw-bold" onClick={() => setEnviado(false)}>VOLVER</button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5 pt-4 text-dark">
            <div className="row g-5">
                {/* Columna de Texto Informativo */}
                <div className="col-lg-5">
                    <h1 className="fw-bold display-4 text-uppercase">Solicita tu <span className="text-danger">Presupuesto</span></h1>
                    <p className="text-secondary mt-3">Describe el problema de tu vehículo y adjunta los datos necesarios. Te daremos una estimación profesional sin compromiso.</p>
                    
                    <div className="mt-5">
                        <div className="d-flex align-items-center mb-4">
                            <div className="bg-danger text-white p-3 rounded-circle me-3">
                                <i className="fa-solid fa-file-invoice-dollar"></i>
                            </div>
                            <div>
                                <h6 className="fw-bold mb-0">Precios Cerrados</h6>
                                <p className="small text-muted mb-0">Sin sorpresas de última hora en tu factura.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                            <div className="bg-dark text-white p-3 rounded-circle me-3">
                                <i className="fa-solid fa-bolt"></i>
                            </div>
                            <div>
                                <h6 className="fw-bold mb-0">Respuesta Rápida</h6>
                                <p className="small text-muted mb-0">Recibe tu valoración en menos de 24h laborales.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna del Formulario Técnico */}
                <div className="col-lg-7">
                    <div className="card border-0 shadow-lg p-4 bg-white border-top border-5 border-danger">
                        <form onSubmit={handleSubmit}>
                            <h5 className="fw-bold mb-4 text-uppercase border-bottom pb-2">Información del Vehículo</h5>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="small fw-bold text-muted">MARCA Y MODELO</label>
                                    <input type="text" className="form-control bg-light border-0 py-2" placeholder="Ej: Seat Ibiza" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="small fw-bold text-muted">MATRÍCULA / AÑO</label>
                                    <input type="text" className="form-control bg-light border-0 py-2" placeholder="1234-ABC" />
                                </div>
                            </div>

                            <h5 className="fw-bold mb-4 text-uppercase border-bottom pb-2 mt-4">Detalles de la Avería</h5>
                            <div className="mb-4">
                                <label className="small fw-bold text-muted">DESCRIPCIÓN DEL PROBLEMA</label>
                                <textarea className="form-control bg-light border-0 py-2" rows="4" placeholder="¿Qué le ocurre al coche? Ruido, golpe, revisión oficial..." required></textarea>
                            </div>

                            <h5 className="fw-bold mb-4 text-uppercase border-bottom pb-2 mt-4">Datos Personales</h5>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="small fw-bold text-muted">TU NOMBRE</label>
                                    <input type="text" className="form-control bg-light border-0 py-2" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="small fw-bold text-muted">TELÉFONO</label>
                                    <input type="tel" className="form-control bg-light border-0 py-2" required />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-danger w-100 fw-bold py-3 mt-4 rounded-0 shadow text-uppercase">
                                Enviar Solicitud de Presupuesto
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};