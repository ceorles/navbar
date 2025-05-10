import './NavPicker.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Mary = ({ setType }) => {
    const navigate = useNavigate();

    const handlePick = (level) => {
        setType(level);
        navigate('/');
    };

    return (
        <div className="container" style={{backgroundImage: 'url("/bg.gif")'}}>
            <div className="PokemonResearchLab">
                <button className="Pokemon type1" onClick={() => handlePick('basic')}>
                    <span>
                        <img title='Torchic' src="pokeball.png" alt="POKEMONS" />
                    </span>
                </button>
                
                <button className="Pokemon tpye2" onClick={() => handlePick('advanced')}>
                    <span>
                        <img title='Mudkip' src="pokeball.png" alt="POKEMONS" />
                    </span>
                </button>
            </div>

            <button className="Pokemon tpye3" onClick={() => handlePick('pro')}>
                <span>
                    <img title='Treecko' src="pokeball.png" alt="POKEMONS" />
                </span>
            </button>
        </div>
    );
};

export default Mary;