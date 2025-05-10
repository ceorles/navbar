import React from 'react';
import { NavLink } from 'react-router-dom';

const Remojo = () => (
    <nav style={{
        background: '#000',
        padding: '15px',
        display: 'flex',
        justifyContent: 'center',
        gap: '40px'
        }}>
        {['/', '/about', '/projects', '/contact'].map((path, index) => (
            <NavLink
                key={index}
                to={path}
                style={({ isActive }) => ({
                    color: isActive ? '#0f0' : '#fff',
                    textDecoration: 'none',
                    fontSize: '18px',
                    borderBottom: isActive ? '2px solid lime' : 'none'
                })}
                >
                {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
        ))}
    </nav>
    );

export default Remojo;
