import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const PanelInterno = () => {
    const { store } = useGlobalReducer();
    const navigate = useNavigate();

    // Protección: Si no ha puesto la clave, lo echamos al inicio
    useEffect(() => {
        if (sessionStorage.getItem("admin_auth") !== "true") {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div className="container mt-4 pt-5">
            <h1 className="fw-bold border-bottom border-danger pb-3">🛠 GESTIÓN <span className="text-danger">INTERNA</span></h1>
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card bg-danger text-white p-3 mb-3">
                        <h3>{store.urgente.length}</h3>
                        <p className="mb-0">Citas por confirmar</p>
                    </div>
                </div>
                {/* Aquí irán tus tablas de clientes, stock, etc. */}
            </div>
            <button className="btn btn-dark mt-5" onClick={() => {
                sessionStorage.removeItem("admin_auth");
                navigate("/");
            }}>Cerrar Sesión</button>
        </div>
    );
};