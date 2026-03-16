import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Button.css"
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store } = useGlobalReducer();
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const todoLoQueTenemos = [
    ...(store.personajes || []),
    ...(store.planetas || []),
    ...(store.naves || []),
    ...(store.criaturas || []),
    ...(store.droides || []),
    ...(store.species || []),
    ...(store.organizaciones || [])
  ];

  const sugerencias = busqueda.length > 1
    ? todoLoQueTenemos.filter(item =>
      item.name.toLowerCase().includes(busqueda.toLowerCase())
    ).slice(0, 5)
    : [];

  return (
    <nav className="navbar navbar-expand-xl navbar-dark px-4 py-3 sticky-top" style={{ backgroundColor: "#000000", borderBottom: "1px solid #333" }}>
      <div className="container-fluid">
        
        {/* BOTÓN HOME - Con espacio a la derecha en escritorio */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "btn nav-btn-custom nav-btn-active me-xl-5" : "btn nav-btn-custom me-xl-5"
          }
        >
          HOME
        </NavLink>

        {/* BOTÓN HAMBURGUESA - Visible en móviles */}
        <button 
          className="navbar-toggler border-warning shadow-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* CONTENIDO COLAPSABLE */}
        <div className="collapse navbar-collapse" id="navbarContent">
          
          {/* --- BARRA DE BÚSQUEDA --- 
              Centrada y con márgenes verticales en móvil */}
          <div className="mx-auto my-4 my-xl-0 d-flex align-items-center gap-2 flex-wrap justify-content-center" style={{ position: "relative" }}>
            <label
              htmlFor="buscador-galactico"
              className="text-warning fw-bold mb-0 text-nowrap"
              style={{ fontSize: "0.75rem", letterSpacing: "1px" }}
            >
              BUSCAR:
            </label>

            <div style={{ position: "relative", width: "240px" }}>
              <input
                id="buscador-galactico"
                type="text"
                className="form-control bg-black text-warning border-warning shadow-none"
                placeholder="Escribe un nombre..."
                style={{ fontSize: "0.8rem", borderRadius: "0" }}
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
              {sugerencias.length > 0 && (
                <ul className="list-group position-absolute w-100 shadow-lg" style={{ zIndex: 3000, top: "40px" }}>
                  {sugerencias.map((item) => (
                    <li
                      key={item._id}
                      className="list-group-item list-group-item-dark list-group-item-action border-warning"
                      style={{ cursor: "pointer", fontSize: "0.8rem" }}
                      onClick={() => {
                        setBusqueda("");
                        let path = "";
                        if (store.personajes?.some(p => p._id === item._id)) path = "Personajes";
                        else if (store.planetas?.some(p => p._id === item._id)) path = "Planetas";
                        else if (store.naves?.some(p => p._id === item._id)) path = "Naves";
                        else if (store.criaturas?.some(p => p._id === item._id)) path = "Criaturas";
                        else if (store.droides?.some(p => p._id === item._id)) path = "Droides";
                        else if (store.species?.some(p => p._id === item._id)) path = "Species";
                        else if (store.organizaciones?.some(p => p._id === item._id)) path = "Organizaciones";

                        if (path) navigate(`/${path}`, { state: { selectedId: item._id } });
                      }}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

      <div className="d-flex flex-column flex-xl-row gap-3 ms-xl-5">
            <div className="dropdown">
              <button
                className="btn nav-btn-custom dropdown-toggle w-100"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CATEGORÍAS
              </button>

  <ul className="dropdown-menu p-2" style={{ backgroundColor: 'black', border: 'none' }}>
    {[
      { to: "/Personajes", text: "Personajes" },
      { to: "/Planetas", text: "Planetas" },
      { to: "/Naves", text: "Naves" },
      { to: "/Criaturas", text: "Criaturas" },
      { to: "/Droides", text: "Droides" },
      { to: "/Species", text: "Species" },
      { to: "/Organizaciones", text: "Organizaciones" },
    ].map((link) => (
       <li key={link.to} className="mb-1">
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        isActive 
                          ? "btn nav-btn-custom nav-btn-active w-100 text-start" 
                          : "btn nav-btn-custom w-100 text-start text-warning"
                      }
                    >
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <NavLink
              to="/Favoritos"
              className={({ isActive }) =>
                isActive ? "btn nav-btn-custom nav-btn-active w-100" : "btn nav-btn-custom w-100"}
            >
              FAVORITOS
              <span className="badge rounded-pill bg-warning text-dark ms-2 fw-bold">
                {store?.favoritos?.length || 0}
              </span>
            </NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
};