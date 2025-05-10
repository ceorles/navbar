import React from 'react';
import { Link } from 'react-router-dom';

const Murillo = () => (
    <nav style={{
        display: 'flex',
        justifyContent: 'space-around',
        background: '#2e3b4e',
        padding: '20px',
        color: 'white'
        }}>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/">🏠 Home</Link>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/about">👤 About</Link>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/projects">💼 Projects</Link>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/contact">📬 Contact</Link>
    </nav>
);

export default Murillo;
