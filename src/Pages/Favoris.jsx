import React from 'react';
import AfficheFavori from '../Components/AfficheFavori';

import Header from '../Components/Header';

const Favoris = () => {

    const filmFavori = JSON.parse(localStorage.getItem("Favori"));

    console.log(filmFavori)
    return (
        <div className='favori'>
            <Header accueil="nonSelection" favori="selection" />
            <ul>
                {filmFavori.map((liste => (

                    <AfficheFavori liste={liste} key={liste.id} filmFavori={filmFavori} />
                )))}
            </ul>

        </div>
    );
};

export default Favoris;