import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Layout = () => {
    return (
        /* Contenedor principal con Flexbox para empujar el footer al fondo */
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            minHeight: "100vh" 
        }}>
            <ScrollToTop />

            {/* HEADER SIEMPRE FIJO (Es lo normal para navegar rápido) */}
            <header style={{ position: "fixed", top: 0, width: "100%", zIndex: 4000 }}>
                <Navbar />
            </header>

            {/* CONTENIDO PRINCIPAL: Ocupa todo el espacio disponible */}
            <main style={{ 
                flex: "1 0 auto",      /* Esto empuja el footer hacia abajo */
                paddingTop: "100px",   /* Espacio para el Navbar */
                paddingBottom: "50px"  /* Un margen sutil antes del footer */
            }}>
                <Outlet />
            </main>

            {/* FOOTER NATURAL: Ya no es fixed, aparece al final del scroll */}
            <footer style={{ 
                backgroundColor: "#1a1a1a",
                borderTop: "4px solid #fa0606",
                width: "100%"
            }}>
                <Footer />
            </footer>

            {/* BOTÓN WHATSAPP: Lo dejamos fijo para que siempre puedan contactar */}
            <a href="https://wa.me/659603058" className="btn-whatsapp shadow-lg">
                <i className="fa-brands fa-whatsapp"></i>
            </a>

            <style>{`
                .btn-whatsapp {
                    position: fixed; 
                    right: 20px; 
                    bottom: 30px; /* Ahora puede estar abajo del todo porque el footer no lo tapa */
                    background: #25d366; 
                    color: white; 
                    border-radius: 50%;
                    width: 60px; height: 60px; 
                    display: flex;
                    align-items: center; justify-content: center;
                    font-size: 30px; z-index: 5000; text-decoration: none;
                    transition: transform 0.3s ease;
                }
                .btn-whatsapp:hover { transform: scale(1.1); color: white; }
            `}</style>
        </div>
    );
};