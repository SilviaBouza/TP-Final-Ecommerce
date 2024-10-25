import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./NavBar.css";

function NavigationBar() {
  // Estado para manejar el estado del menú humburguesa
  const [expanded, setExpanded] = useState(false);

  // Manejador para cerrar el menú humburguesa
  const handleToggle = () => {
    setExpanded(expanded ? false : "expanded");
  };

  // Manejador para cerrar el menú humburguesa al seleccionar una opción
  const handleSelect = () => {
    setExpanded(false);
  };

  return (
    <div className="container-navbar">
      <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded} className="w-100 navbar-custom">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">Mi Ecommerce</Navbar.Brand>
          {/* Botón de hamburguesa para pantallas pequeñas */}
          <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" onClick={handleSelect}>Home</Nav.Link>
              <Nav.Link as={Link} to="/listado-de-productos" onClick={handleSelect}>Productos</Nav.Link>
              <Nav.Link as={Link} to="/register" onClick={handleSelect}>Registro</Nav.Link>
              <Nav.Link as={Link} to="/login" onClick={handleSelect}>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
