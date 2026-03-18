import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const PanelInterno = () => {
    const { store, dispatch } = useGlobalReducer();
    const { urgente } = store;
    const navigate = useNavigate();

    // Protección: Si no hay clave en la sesión, fuera
    useEffect(() => {
        if (sessionStorage.getItem("admin_auth") !== "true") {
            navigate("/");
        }
    }, [navigate]);

    const cerrarSesion = () => {
        sessionStorage.removeItem("admin_auth");
        navigate("/");
    };

    return (
        <div className="container mt-5 pt-5 text-dark" style={{ minHeight: "85vh" }}>
            <div className="d-flex justify-content-between align-items-center mb-4 border-bottom border-danger pb-3">
                <h1 className="fw-bold m-0 text-uppercase">🛠 GESTIÓN <span className="text-danger">INTERNA</span></h1>
                <button className="btn btn-outline-dark btn-sm fw-bold" onClick={cerrarSesion}>
                    <i className="fa-solid fa-power-off me-2"></i>CERRAR SESIÓN
                </button>
            </div>

            <div className="row g-4 mb-5">
                {/* INDICADORES RÁPIDOS */}
                <div className="col-md-4">
                    <div className="card bg-danger text-white p-4 shadow border-0 rounded-0">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="text-uppercase fw-bold opacity-75 mb-1 small">Citas en espera</h6>
                                <h2 className="display-4 fw-bold mb-0">{urgente.length}</h2>
                            </div>
                            <i className="fa-solid fa-calendar-check fa-3x opacity-25"></i>
                        </div>
                    </div>
                </div>
                {/* Puedes añadir más tarjetas aquí (ej: total euros, clientes nuevos) */}
            </div>

            {/* TABLA DE CITAS SOLICITADAS */}
            <div className="card border-0 shadow-lg rounded-0 overflow-hidden">
                <div className="card-header bg-dark text-white py-3">
                    <h5 className="mb-0 fw-bold"><i className="fa-solid fa-list me-2 text-danger"></i> SOLICITUDES RECIBIDAS</h5>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light text-uppercase small fw-bold">
                                <tr>
                                    <th className="ps-4 py-3">Servicio Solicitado</th>
                                    <th>Importe</th>
                                    <th>Estado</th>
                                    <th className="text-end pe-4">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {urgente.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="text-center py-5 text-muted italic">
                                            No hay citas pendientes de procesar.
                                        </td>
                                    </tr>
                                ) : (
                                    urgente.map((cita) => (
                                        <tr key={cita.id}>
                                            <td className="ps-4">
                                                <div className="fw-bold">{cita.name}</div>
                                                <small className="text-muted">Ref: {cita.id}</small>
                                            </td>
                                            <td>
                                                <span className="fw-bold text-danger">{cita.precio}€</span>
                                            </td>
                                            <td>
                                                <span className="badge bg-warning text-dark px-3 rounded-pill small">Pendiente</span>
                                            </td>
                                            <td className="text-end pe-4">
                                                {/* Botón para borrar la cita una vez atendida */}
                                                <button 
                                                    className="btn btn-sm btn-outline-danger border-0"
                                                    onClick={() => dispatch({ type: 'toggle_urgente', payload: cita })}
                                                    title="Completar y archivar"
                                                >
                                                    <i className="fa-solid fa-check-double me-1"></i> ATENDIDA
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <div className="mt-4 p-3 bg-light border-start border-4 border-dark small text-muted">
                <i className="fa-solid fa-circle-info me-2"></i>
                Estas citas se guardan en el navegador local. Si cambias de ordenador, la lista será distinta.
            </div>
        </div>
    );
};