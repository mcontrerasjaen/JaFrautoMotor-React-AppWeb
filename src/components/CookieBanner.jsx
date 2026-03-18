import { useState, useEffect } from "react";

export const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consentimiento = localStorage.getItem("cookies_aceptadas");
        if (!consentimiento) {
            setVisible(true);
        }
    }, []);

    const aceptarCookies = () => {
        localStorage.setItem("cookies_aceptadas", "true");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed-bottom bg-dark text-white p-3 shadow-lg border-top border-danger" style={{ zIndex: 9999 }}>
            <div className="container d-md-flex align-items-center justify-content-between">
                <p className="small mb-2 mb-md-0 opacity-75 me-3">
                    Utilizamos cookies propias para mejorar tu experiencia y ofrecerte nuestros servicios de taller. 
                    Al continuar navegando, aceptas nuestra <a href="/cookies" className="text-danger text-decoration-none fw-bold">Política de Cookies</a>.
                </p>
                <div className="d-flex gap-2">
                    <button onClick={aceptarCookies} className="btn btn-danger btn-sm fw-bold rounded-0 px-4">
                        ACEPTAR
                    </button>
                </div>
            </div>
        </div>
    );
};