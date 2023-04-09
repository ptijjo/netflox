import React, { useState } from 'react';

import Header from '../Components/Header';
import Tableau from '../Components/Tableau';



const Home = () => {
    const [recherche, setRecherche] = useState('code');

    if (recherche === "") return setRecherche("code");

    return (
        <div className='home'>
            <Header accueil="selection" favori="nonSelection" />
            <div className='barreRecherche'>
                <input type="search" name="recherche" id="recherche" placeholder="Entrez le titre d'un film" className='recherche' onChange={(e) => setRecherche(e.target.value)} />
                <button type='submit' className='btnRecherche'> Rechercher</button>
            </div>

            <Tableau recherche={recherche} />

        </div>
    );
};

export default Home;