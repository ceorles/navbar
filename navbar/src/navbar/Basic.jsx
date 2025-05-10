import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar-css/Basic.css'

const Angela = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="type1-container">
            <div className='row'>
                <div className="type1-logo">
                    <Link to="/">ceorles</Link>
                </div>

                <div className={`type-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                    <Link to="/about" onClick={closeMenu}>About</Link>
                    <Link to="/projects" onClick={closeMenu}>Projects</Link>
                    <Link to="/contact" onClick={closeMenu}>Contact</Link>
                </div>

                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Angela;
