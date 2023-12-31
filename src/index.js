import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Layout from "./components/Layout/Layout";
import Accueil from "./pages/Accueil/Accueil";
import Logement from "./pages/Logement/Logement";
import Apropos from "./pages/Apropos/Apropos";
import Error from "./pages/Error/Error";

//https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-fr
// import your fontawesome library
import "./fontawesome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Accueil />} />
        <Route path="/Logement/:id" element={<Logement />} />
        <Route path="apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
