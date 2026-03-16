import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Layout = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <ScrollToTop />

            <header style={{ position: "fixed", top: 0, width: "100%", zIndex: 4000 }}>
                <Navbar />
            </header>

            {/* Aumentamos el paddingBottom para que el contenido de Servicios no sea tapado */}
            <main style={{
                flex: "1 0 auto",
                paddingTop: "100px",    /* Espacio para el Navbar */
                paddingBottom: "350px",  /* ESPACIO EXTRA PARA EL FOOTER GRANDE */
                position: "relative"
            }}>
                <Outlet />
            </main>

            <footer style={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                zIndex: 4000,
                backgroundColor: "#1a1a1a",
                borderTop: "3px solid #fa0606",
                minHeight: "100px" // Asegura un mínimo de espacio
            }}>
                <Footer />
            </footer>

            {/* Botón WhatsApp - Ajustado para que no lo tape el nuevo footer */}
            <a href="https://wa.me" className="btn-whatsapp shadow-lg">
                <i className="fa-brands fa-whatsapp"></i>
            </a>

            <style>{`
                .btn-whatsapp {
                    position: fixed; 
                    right: 20px; 
                    bottom: 320px; /* Lo subimos para que flote sobre el footer */
                    background: #25d366; color: white; border-radius: 50%;
                    width: 60px; height: 60px; display: flex;
                    align-items: center; justify-content: center;
                    font-size: 30px; z-index: 5000; text-decoration: none;
                }
            `}</style>
        </div>
    );
};