import React from 'react';

const Affiches = (props) => {


    /**@fonction save enregistre un objet dans le localstorage */
    const save = (e) => {
        alert(`${liste.title} a bien été ajouté à votre liste de favoris !`);
        return localStorage.setItem("Favori", JSON.stringify(e));
    }


    /**@fonction ajouter un objet dans le tableau favori */
    const addToFavori = (e) => {
        let coupDeCoeur = localStorage.getItem("Favori");

        //Lorsque le local storage est null on obtien un tableau vide
        if (coupDeCoeur === null) {
            coupDeCoeur = [];
            coupDeCoeur.push(e);
            save(coupDeCoeur);
        }
        else {
            coupDeCoeur = JSON.parse(coupDeCoeur)

            //On va voir si l'id du film qu'on rajoute est déja présent dans la liste des favoris 
            let chercheId = coupDeCoeur.find(i => i.id === liste.id);
            if (chercheId === undefined) {
                coupDeCoeur.push(e);
                save(coupDeCoeur);
            }
            else alert(`${liste.title} est déja présent dans la liste de vos favoris !`);
        }

    }

    const liste = props.liste;
    const film = props.film;

    const dateUtc = (e) => {
        return e.split("-").reverse().join("-")
    }

    const handleFavori = (e) => {
        const index = e.findIndex(i => i.id === liste.id);
        const filmSelection = film[index];
        addToFavori(filmSelection);
    }
    return (
        <li className="affiche">
            <img src={liste.poster_patch !== null ? "https://image.tmdb.org/t/p/original/" + liste.poster_path : "./img/poster.jpg"} alt={"poster de " + liste.title} />
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

            <button onClick={() => handleFavori(film)}>Ajouter au coup de coeur</button>
        </li>
    );
};

export default Affiches;