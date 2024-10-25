import React from 'react';
import './Login.css'

function Login() {
  return (
    <div className='container-login'>
      <h1>Login</h1>
      <form className='formulario'>
        <div className='container-email'>
          <label>Email</label>
          <input type="email" />
        </div>

        <div className='container-password'>
          <label>Contraseña</label>
          <input type="password" />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;