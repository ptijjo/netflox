import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const accueil = props.accueil;
    const favori = props.favori;
    return (
        <div className='header'>
            <nav>
                <NavLink to="/" className={accueil}> Accueil</NavLink>
                <NavLink to="/favori" className={favori}>Coup de coeur</NavLink>
            </nav>
            <h1>Netflox</h1>

        </div>
    );
};

export default Header;