// Import necessary components and functions from react-router-dom.
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Layout y páginas
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import Character from "./pages/Character";
import Favorite from "./components/Favorite";
import Vehicle from "./pages/Vehicle";   
import Planet from "./pages/Planet";     

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route index element={<Home />} /> {}
      <Route path="/character/:id" element={<Character />} />
      <Route path="/favorite" element={<Favorite />} />

      {/* Nuevas rutas para vehículos y planetas */}
      <Route path="/vehicles" element={<Vehicle />} />
      <Route path="/vehicles/:id" element={<Vehicle />} />
      <Route path="/planets" element={<Planet />} />
      <Route path="/planets/:id" element={<Planet />} />
    </Route>
  )
);
