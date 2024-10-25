import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Register.css"

function Register() {
  return (
    <div className="container-register">
     <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-10 col-xl-auto custom-col"> {/* Cambiamos el tamaño de la columna para que se adapte al tamaño de pantalla */}
          <h1 className="text-center mb-4">Registro</h1>
          <form className="p-4 border rounded shadow-sm">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Ingresa tu email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
              <input type="password" className="form-control" id="confirmPassword" placeholder="Confirma tu contraseña" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Register;
