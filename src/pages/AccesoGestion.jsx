import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AccesoGestion = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    // AQUÍ PONES TU CONTRASEÑA (Por ejemplo: jafrauto2024)
    const CLAVE_MAESTRA = "Jafrauto2026"; 

    const verificar = (e) => {
        e.preventDefault();
        if (password === CLAVE_MAESTRA) {
            // Guardamos un "token" temporal en la sesión para que no pida la clave todo el rato
            sessionStorage.setItem("admin_auth", "true");
            navigate("/panel-interno");
        } else {
            setError(true);
            setPassword("");
        }
    };

    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-dark text-white" style={{ marginTop: "-100px" }}>
            <div className="card bg-black border-danger p-4 shadow-lg" style={{ width: "350px" }}>
                <div className="text-center mb-4">
                    <h2 className="fw-bold">JAFRAUTO <span className="text-danger">ADMIN</span></h2>
                    <p className="small text-secondary">Acceso Restringido - Personal Autorizado</p>
                </div>
                
                <form onSubmit={verificar}>
                    <div className="mb-3">
                        <label className="form-label small text-uppercase">Introduce Código de Acceso</label>
                        <input 
                            type="password" 
                            className={`form-control bg-dark text-white border-${error ? 'danger' : 'secondary'} text-center fs-4`}
                            style={{ letterSpacing: "5px" }}
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setError(false); }}
                            autoFocus
                        />
                        {error && <div className="text-danger small mt-2 text-center">Código incorrecto</div>}
                    </div>
                    <button type="submit" className="btn btn-danger w-100 fw-bold py-2">ENTRAR AL SISTEMA</button>
                    <button type="button" onClick={() => navigate("/")} className="btn btn-link btn-sm w-100 text-secondary mt-3">Cancelar</button>
                </form>
            </div>
        </div>
    );
};