import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container mt-4 text-center">
      <h1>Bienvenido a Mi Ecommerce</h1>
      <p>Explora nuestros productos haciendo clic en el botón de abajo</p>
      <Link to="/listado-de-productos" className="btn btn-primary">
        Ver Productos
      </Link>
    </div>
  );
}

export default Home;
