import React from 'react';

const AfficheFavori = (props) => {

    const liste = props.liste;
    const filmFavori = props.filmFavori;

    const dateUtc = (e) => {
        return e.split("-").reverse().join("-")
    }


    const supprimerFavori = (e) => {
        const index = e.findIndex(i => i.id === liste.id);
        const filmSelection = filmFavori[index];
        alert(`${filmSelection.title} a été retiré de votre liste de favoris !`)
        console.log(filmFavori.splice(index, 1))
    }

    return (
        <li className="affiche">
            <img src={liste.poster_patch !== null ? "https://image.tmdb.org/t/p/original/" + liste.poster_path : "./img/poster.jpg"} alt={"poster de " + liste.title} />
            <h3> {liste.title}</h3>
            <span>sortie le : {dateUtc(liste.release_date)}</span>
            <span> {liste.vote_average}/10 <i className="fa-solid fa-star"></i></span>
            <ul>{liste.genre_ids.map((genre, index) => (
                <li key={index}>{genre}</li>
            ))}</ul>
            <div>
                <h3>Synopsis</h3>
                <p>{liste.overview}</p>
            </div>

            <button onClick={() => supprimerFavori(filmFavori)}>Supprimer favori</button>
        </li>
    );
};

export default AfficheFavori;