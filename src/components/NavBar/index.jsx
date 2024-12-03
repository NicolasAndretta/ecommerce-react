import React from 'react';
import CartWidget from '../CartWidget';

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <a className="nav_link" href="#">Mitienda</a>
                </div>
                <ul className="nav_list">
                    <li>
                        <a className="nav_link" href="#">producto1</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">producto2</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">
                            <CartWidget /> 
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;

