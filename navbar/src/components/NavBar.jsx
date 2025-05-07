import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserAlt, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import '../components-css/NavBar.css';

const NavBar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/" className="nav-item" activeclassname="active" end>
        <FaHome />
        <span className="tooltip">Home</span>
      </NavLink>
      <NavLink to="/about" className="nav-item" activeclassname="active">
        <FaUserAlt />
        <span className="tooltip">About</span>
      </NavLink>
      <NavLink to="/projects" className="nav-item" activeclassname="active">
        <FaProjectDiagram />
        <span className="tooltip">Projects</span>
      </NavLink>
      <NavLink to="/contact" className="nav-item" activeclassname="active">
        <FaEnvelope />
        <span className="tooltip">Contact</span>
      </NavLink>
    </div>
  );
};

export default NavBar;
