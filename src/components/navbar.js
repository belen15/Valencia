import React from 'react';
import './navbar.css';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Barcelona from './img/barcelona.jpg';
import Valencia from './img/valencia.jpg';
import Roma from './img/roma.jpg';

function Navegador() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Brand href="#home">Menu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="bc mr-auto p-1 d-flex justify-content-start" >
          <Nav.Link href="Inicio" className="mx-3">Inicio</Nav.Link>
          <Nav.Link href="Contacto" className="mx-3" >Contacto</Nav.Link>
          <Nav.Link href="Productos" className="mx-3">Productos</Nav.Link>
          <NavDropdown title="Sucursales" className="mx-3" id="basic-nav-dropdown">
            <NavDropdown.Item target="_blank" href={Barcelona}>Barcelona</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href={Valencia}>Valencia</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#" disabled>Palermo</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href={Roma}>Roma</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>

  )
}

export default Navegador;