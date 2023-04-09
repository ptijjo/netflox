import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';

const Favoris = () => {

    const [films, setFilms] = useState([])
    const coeur = JSON.parse(localStorage.getItem("Favori"));

    useEffect(() => {
        let film = JSON.parse(localStorage.getItem("Favori"));
        if (film === null) {
            film = []
        }

        if (film) setFilms(film)
    }, []);

    const dateUtc = (e) => {
        return e.split("-").reverse().join("-");
    };

    const supprimerFilm = (e) => {
        const index = films.findIndex(i => i.id === e);
        const delet = coeur.splice(index, 1)[0];
        coeur.splice(index, 1);
        localStorage["Favori"] = JSON.stringify(coeur);
        setFilms(coeur);
        alert(`${delet.title} a été supprimé de liste des favoris`);
    }
    return (
        <div className='favori'>
            <Header accueil="nonSelection" favori="selection" />

            <ul className='tableau'>
                {films.map((liste) => (
                    <li key={liste.id} className="affiche">
                        <img src={liste.poster_patch === null ? "./img/poster.jpg" : "https://image.tmdb.org/t/p/original/" + liste.poster_path} alt={"poster de " + liste.title} />
                        <h3 className='titreFilm'> {liste.title}</h3>
                        <span className='dateSortie'>sortie le : {dateUtc(liste.release_date)}</span>
                        <span className='noteFilm'> {liste.vote_average}/10 <i className="fa-solid fa-star"></i></span>
                        <ul className='genreFilm'>{liste.genre_ids.map((genre, index) => (
                            <li key={index}>{genre}</li>
                        ))}</ul>
                        <div className='synopsisFilm'>
                            <h3>Synopsis</h3>
                            <p className='resumeFilm'>{liste.overview}</p>
                        </div>

                        <button onClick={() => supprimerFilm(liste.id)}> Retirer </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Favoris;