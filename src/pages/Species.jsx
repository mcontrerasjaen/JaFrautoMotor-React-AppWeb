import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DetallesSpecie } from "../components/DetallesSpecie";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Species = () => {
    const { store, dispatch } = useGlobalReducer();
    const location = useLocation();

    const [loading, setLoading] = useState(true);
    const [seleccionado, setSeleccionado] = useState(null);


    useEffect(() => {
        if (location.state?.selectedId) {
            verDetalles(location.state.selectedId);
            window.history.replaceState({}, document.title);
        }
    }, [location.state]);


    useEffect(() => {
        const obtenerDatos = async () => {
            // Si ya están en el store, no hacemos fetch
            if (store.species && store.species.length > 0) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch("https://starwars-databank-server.vercel.app/api/v1/species?page=2&limit=60");
                const data = await response.json();


                dispatch({ type: 'set_species', payload: data.data });
                setLoading(false);
            } catch (error) {
                console.error("Error en el hiperespacio:", error);
                setLoading(false);
            }
        };
        obtenerDatos();
    }, [store.species, dispatch]);

    const verDetalles = async (id) => {
        try {
            const response = await fetch(`https://starwars-databank-server.vercel.app/api/v1/species/${id}`);
            const data = await response.json();
            setSeleccionado(data);
        } catch (error) {
            console.error("Error al obtener los detalles:", error);
        }
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    if (seleccionado) {
        return <DetallesSpecie info={seleccionado} volver={() => setSeleccionado(null)} />;
    }

    const wordText = (text, wordLimit) => {
        if (!text) return "";
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };

    return (
        <div className="container mt-3 pt-4 pb-3">
            <div className="text-center mb-5">
                <h1 className="text-warning fw-bold">&gt;&gt;&gt; SPECIES &lt;&lt;&lt;</h1>
            </div>

            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
                {store.species.map((specie) => (
                    <div className="col" key={specie._id}>
                        <article className="card h-100 bg-dark text-light border-secondary shadow-lg">
                            <img
                                src={specie.image}
                                className="card-img-top"
                                alt={specie.name}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h5 className="card-title text-warning mb-0">{specie.name}</h5>
                                    <button
                                        className="btn btn-link p-0 text-decoration-none"
                                        onClick={() => dispatch({ type: 'toggle_favorito', payload: specie })}
                                    >
                                        {store.favoritos.some(f => f._id === specie._id) ? "💛" : "🤍"}
                                    </button>
                                </div>
                                <p className="small">{wordText(specie.description, 10)}</p>
                                <button onClick={() => verDetalles(specie._id)} className="btn btn-outline-warning btn-sm mt-auto w-100">
                                    Ver detalles
                                </button>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    );
};