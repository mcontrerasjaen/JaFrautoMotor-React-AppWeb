import { Outlet } from "react-router-dom/dist";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { StarWarsBackground } from "../components/StarWarsBackground";
import logoStarWars from "../assets/img/LogoStarWars.jpg";

export const Layout = () => {
    return (
        <div style={{ minHeight: "100vh", position: "relative" }}>
            <ScrollToTop />
            <StarWarsBackground showCrawl={false} />

            {/* NAVBAR FIJO */}
            <header style={{ 
                position: "fixed", 
                top: 0, 
                left: 0,
                width: "100%", 
                zIndex: 3000 
            }}>
                <Navbar />
            </header>

            {/* LOGO FIJO - Sube el z-index para que no lo tape nada */}
            <div style={{
    position: "fixed",
    top: "clamp(60px, 10vh, 100px)", // Se ajusta según el tamaño de pantalla
    left: "clamp(10px, 5vw, 40px)",  // Se pega al borde en móviles
    zIndex: 4000,
    pointerEvents: "none"
}}>
    <img
        src={logoStarWars}
        style={{
            height: "clamp(60px, 15vw, 140px)", // El logo encoge en pantallas pequeñas
            width: "auto",
            pointerEvents: "auto"
        }}
    />
</div>

            {/* CONTENIDO CON SCROLL PROPIO */}
            <main style={{ 
                paddingTop: "100px",    /* Espacio para que el Nav no tape el inicio */
                paddingBottom: "80px",   /* Espacio para que el Footer no tape el final */
                minHeight: "100vh"
            }}>
                <Outlet />
            </main>

            {/* FOOTER FIJO - Asegúrate de que esté AQUÍ para que salga en todas las rutas */}
            <footer style={{ 
                position: "fixed", 
                bottom: 0, 
                left: 0,
                width: "100%", 
                zIndex: 3000 
            }}>
                <Footer />
            </footer>
        </div>
    );
};