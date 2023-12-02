import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4">Simple header</span>
                </a>

                <nav>

                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <NavLink className="nav-link {({ isActive })}" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link {({ isActive })}" to="/products">View Products</NavLink>
                        </li>
                    </ul>

                </nav>
            </header>
        </div>

    )
};

export default NavBar;

