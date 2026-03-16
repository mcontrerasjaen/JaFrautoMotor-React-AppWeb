// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { AvisoLegal } from "./pages/AvisoLegal";
import { Presupuesto } from "./pages/Presupuesto";
import { PoliticaPrivacidad } from "./pages/PoliticaPrivacidad";
import { Servicios } from "./pages/Servicios";
import { Taller } from "./pages/Taller";
import { Promociones } from "./pages/Promociones";
import { Urgente } from "./pages/Urgente";
import { AccesoGestion } from "./pages/AccesoGestion";
import { PanelInterno } from "./pages/PanelInterno";


export const router = createBrowserRouter(
    createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

      // Root Route: All navigation will start from here.
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
        <Route path= "/" element={<Home />} />
        <Route path="*" element={<h1 className="d-flex justify-content-center align-items-center text-white vh-100">Error: 404 - Perdido en el espacio</h1>} />
        <Route path= "/avisoLegal" element={<AvisoLegal />} />
        <Route path="/presupuesto" element={<Presupuesto />} />
        <Route path= "/politicaPrivacidad" element={<PoliticaPrivacidad />} />
        <Route path= "/servicios" element={<Servicios />} />
        <Route path= "/taller" element={<Taller />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/urgente" element={<Urgente />} />
        <Route path="/gestion" element={<AccesoGestion />} />
        <Route path="/panel-interno" element={<PanelInterno />} />
      </Route>
    )
);