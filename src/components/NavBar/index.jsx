import React from 'react';

export const NavBar = () => {
  return (
    <div className="container">
        <nav className="nav">
            <div className="nav_brand">
                <a className="nav_link" href="#">Mitienda</a>
            </div>
            <ul className="nav_list"></ul>
            <li>
                <a className="nav_link" href="#"></a>producto1</li>
            <li>
                <a className="nav_link" href="#"></a>producto2</li>
                <li>
                    <a className="nav_link" href="#">carrito</a>
                </li>
        </nav>
    </div>
  );
};

export default NavBar;
