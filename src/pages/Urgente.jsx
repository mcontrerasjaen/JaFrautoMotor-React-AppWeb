import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import emailjs from "@emailjs/browser"; // Recuerda instalarlo: npm install @emailjs/browser

export const Urgente = () => {
    const { store, dispatch } = useGlobalReducer();
    const { urgente } = store;

    const [seleccionado, setSeleccionado] = useState(null);
    
    // ESTADOS PARA CAPTURAR LOS DATOS SIN CAMBIAR EL DISEÑO
    const [cargando, setCargando] = useState(false);
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [metodo, setMetodo] = useState("Teléfono");
    const [contacto, setContacto] = useState("");

    const totalEuros = urgente?.reduce((acc, item) => acc + (item.precio || 0), 0) || 0;

    // FUNCIÓN DE ACCIÓN PARA EL BOTÓN
    const manejarReserva = (e) => {
        e.preventDefault();
        setCargando(true);

        const listaServicios = urgente.map(s => `${s.name} (${s.precio}€)`).join(", ");

        const datosEmail = {
            servicios: listaServicios,
            total: totalEuros + "€",
            fecha_cita: fecha,
            hora_cita: hora,
            metodo_confirmacion: metodo,
            contacto_cliente: contacto
        };

        // Reemplaza con tus IDs de EmailJS
        emailjs.send('tu_service_id', 'tu_template_id', datosEmail, 'q96yWv158JqHM5uJY')
            .then(() => {
                alert("¡Solicitud de cita enviada con éxito! Te contactaremos pronto.");
                setCargando(false);
            })
            .catch(() => {
                alert("Error al enviar. Revisa tu conexión.");
                setCargando(false);
            });
    };

    if (seleccionado) {
        return (
            <div className="container mt-5 pt-5 text-center text-white">
                <div className="p-5 bg-dark border border-danger rounded shadow-lg">
                    <h2 className="text-danger fw-bold">DETALLES: {seleccionado.name}</h2>
                    <p className="mt-3 lead">{seleccionado.description}</p>
                    <button className="btn btn-outline-light mt-4" onClick={() => setSeleccionado(null)}>Volver al Carrito</button>
                </div>
            </div>
        );
    }

    const hoy = new Date();
    hoy.setDate(hoy.getDate() + 1);
    const fechaMinima = hoy.toISOString().split("T")[0];

    return (
        <div className="container mt-5 pt-5 text-dark">
            {/* CABECERA DE EMERGENCIA */}
            <div className="bg-danger p-4 rounded-0 mb-5 shadow-lg text-center text-white">
                <h1 className="fw-bold mb-2">🚨 ASISTENCIA MECÁNICA INMEDIATA</h1>
                <p className="mb-0 opacity-75 text-uppercase small fw-bold" style={{ letterSpacing: '2px' }}>Llámanos ahora para grúa o avería grave</p>
                <a href="tel:+34659603058" className="btn btn-light fw-bold mt-3 px-5 py-2 text-danger shadow rounded-0 text-center">
                    LLAMAR AHORA <br />
                    +34 659 603 058
                </a>
            </div>

            <div className="row g-5">
                {/* LADO IZQUIERDO: EL CARRITO DE SERVICIOS */}
                <div className="col-lg-7">
                    <h2 className="fw-bold mb-4 border-start border-4 border-danger ps-3 text-uppercase">
                        Mi Reserva de <span className="text-danger">Reparación</span> ({urgente?.length || 0})
                    </h2>

                    {!urgente || urgente.length === 0 ? (
                        <div className="py-5 border border-secondary rounded border-dashed text-center bg-light">
                            <i className="fa-solid fa-cart-plus fa-3x text-muted mb-3"></i>
                            <h3 className="text-secondary">Tu selección está vacía.</h3>
                            <p className="small text-muted">Añade servicios desde la sección de Catálogo.</p>
                        </div>
                    ) : (
                        <div className="d-flex flex-column gap-3">
                            {urgente.map((fav) => (
                                <article key={fav.id || fav._id} className="card border-0 shadow-sm rounded-0 border-start border-danger border-4">
                                    <div className="card-body d-flex align-items-center justify-content-between p-3">
                                        <div className="d-flex align-items-center">
                                            <img src={fav.image} alt={fav.name} style={{ width: "60px", height: "60px", objectFit: "cover" }} className="me-3" />
                                            <div>
                                                <h6 className="mb-0 fw-bold text-uppercase">{fav.name}</h6>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="text-danger fw-bold">{fav.precio}€</span>
                                                    <button onClick={() => setSeleccionado(fav)} className="btn btn-link p-0 text-muted small text-decoration-none border-start ps-2">Ver info</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-outline-secondary btn-sm border-0"
                                            onClick={() => dispatch({ type: 'toggle_urgente', payload: fav })}
                                        >
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>

                {/* LADO DERECHO: RESUMEN Y AGENDAR */}
                <div className="col-lg-5">
                    <div className="card bg-dark text-white p-4 rounded-0 shadow-lg sticky-top" style={{ top: '120px' }}>
                        <h4 className="fw-bold mb-4 text-uppercase border-bottom border-danger pb-2 text-danger text-center">Resumen de Reserva</h4>
                        
                        <div className="d-flex justify-content-between mb-2 opacity-75 small text-uppercase fw-bold">
                            <span>Subtotal Servicios:</span>
                            <span>{totalEuros}€</span>
                        </div>
                        <div className="d-flex justify-content-between mb-4 border-top border-secondary pt-2">
                            <span className="h5 fw-bold">TOTAL ESTIMADO:</span>
                            <span className="h5 fw-bold text-danger">{totalEuros}€</span>
                        </div>

                        {/* EL FORMULARIO CON LA ACCIÓN */}
                        <form onSubmit={manejarReserva}>
                            <div className="mb-3">
                                <label className="small fw-bold text-uppercase opacity-75 mb-2">Día de la cita</label>
                                <input 
                                    type="date" 
                                    min={fechaMinima} 
                                    className="form-control bg-white text-dark border-0 rounded-0 py-2 fw-bold" 
                                    required 
                                    value={fecha}
                                    onChange={(e) => setFecha(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="small fw-bold text-uppercase opacity-75 mb-2">Hora preferente</label>
                                <select 
                                    className="form-select bg-white text-dark border-0 rounded-0 py-2 fw-bold" 
                                    required
                                    value={hora}
                                    onChange={(e) => setHora(e.target.value)}
                                >
                                    <option value="" className="text-muted">Seleccionar hora...</option>
                                    <optgroup label="Mañana">
                                        <option>08:30</option><option>10:00</option><option>11:30</option><option>13:00</option>
                                    </optgroup>
                                    <optgroup label="Tarde">
                                        <option>16:00</option><option>17:30</option><option>19:00</option>
                                    </optgroup>
                                </select>
                            </div>

                            <div className="mb-3 text-start">
                                <label className="small fw-bold text-uppercase opacity-75 mb-2 text-center d-block">¿Cómo confirmamos tu cita?</label>
                                <div className="d-flex justify-content-center gap-3 mt-1 mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="contacto" id="radioTel" 
                                            checked={metodo === "Teléfono"} onChange={() => setMetodo("Teléfono")} />
                                        <label className="form-check-label small fw-bold" htmlFor="radioTel">Teléfono</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="contacto" id="radioEmail" 
                                            checked={metodo === "Email"} onChange={() => setMetodo("Email")} />
                                        <label className="form-check-label small fw-bold" htmlFor="radioEmail">Email</label>
                                    </div>
                                </div>

                                <input 
                                    type="text" 
                                    className="form-control bg-white text-dark border-0 rounded-0 py-2 text-center fw-bold" 
                                    placeholder={`Introduce tu ${metodo}...`} 
                                    required 
                                    value={contacto}
                                    onChange={(e) => setContacto(e.target.value)}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-danger w-100 fw-bold py-3 mt-3 rounded-0 shadow-lg text-uppercase" 
                                disabled={!urgente?.length || cargando}
                            >
                                <i className="fa-solid fa-calendar-check me-2"></i>
                                {cargando ? "ENVIANDO SOLICITUD..." : `RESERVAR CITA (${totalEuros}€)`}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};