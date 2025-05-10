import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'

import Mary from './NavPicker';
import Angela from './navbar/Basic';
import Murillo from './navbar/Advanced';
import Remojo from './navbar/Pro';

import Her from './herHouse/ToMyLife'; // this is home, she's my home...
import About from './components-type1/About';
import Projects from './components-type1/Projects';
import Contact from './components-type1/Contact';

import HomeType2 from './components-type2/Home';
import AboutType2 from './components-type2/About';
import ProjectsType2 from './components-type2/Projects';
import ContacType2 from './components-type2/Contact';

import HomeType3 from './components-type3/Home';
import AboutType3 from './components-type3/About';
import ProjectsType3 from './components-type3/Projects';
import ContactType3 from './components-type3/Contact';

function MAR() {
    const [type, setType] = useState(null);

    const NavigationTypes = () => {
        switch (type) {
            case 'basic':
                return <Angela />;
            case 'advanced':
                return <Murillo />;
            case 'pro':
                return <Remojo />;
            default:
                return null;
        }
    };

    const PokemonTypes = () => {
        switch (type) {
            case 'basic':
                return (
                    <Routes>
                        <Route path="/" element={<Her />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                );
            case 'advanced':
                return (
                    <Routes>
                        <Route path="/" element={<HomeType2 />} />
                        <Route path="/about" element={<AboutType2 />} />
                        <Route path="/projects" element={<ProjectsType2 />} />
                        <Route path="/contact" element={<ContacType2 />} />
                    </Routes>
                );
            case 'pro':
                return (
                    <Routes>
                        <Route path="/" element={<HomeType3 />} />
                        <Route path="/about" element={<AboutType3 />} />
                        <Route path="/projects" element={<ProjectsType3 />} />
                        <Route path="/contact" element={<ContactType3 />} />
                    </Routes>
                );
            default:
                return null;
        }
    };

    if (!type) return <Mary setType={setType} />;

    return (
        <div className="maryAngelaRemojo">
            {NavigationTypes()}
            {PokemonTypes()}
        </div>
    );
}

export default MAR;
