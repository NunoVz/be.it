import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './style.css';

import Landing from "./Views/Landing";
import Login from "./Views/login";
import Perfil from "./Views/perfil";
import Register from "./Views/register"
import ProdPage from "./Views/prodpagina";
import Homeview from './Views/HomeView';
import CreateProduct from './Views/createProduct';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/produto" element={<ProdPage />} />
          <Route path="/store" element={<Homeview />} />
          <Route path="/createProduct" element={<CreateProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
