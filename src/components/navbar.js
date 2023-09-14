import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="navbar__logo">Mi Tienda en Línea</h1>
        <ul className="navbar__links">
          <li className="navbar__item">
            <a href="/" className="navbar__link">
              Inicio
            </a>
          </li>
          <li className="navbar__item">
            <a href="/productos" className="navbar__link">
              Productos
            </a>
          </li>
          <li className="navbar__item">
            <a href="/carrito" className="navbar__link">
              Carrito
            </a>
          </li>
          <li className="navbar__item">
            <a href="/contacto" className="navbar__link">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
