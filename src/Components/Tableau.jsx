import axios from 'axios';
import React, { useEffect, useState } from 'react';
import cleApi from '../env/ParametreApi';
import Affiches from './Affiches';


const lien = "https://api.themoviedb.org/3/search/movie?api_key=";
const options = "&language=fr-FR&include_adult=false";

const Tableau = (props) => {
    const [film, setFilm] = useState([]);
    const recherche = props.recherche;
    const [clickTop, setClickTop] = useState(false);
    const [clickFlop, setClickFlop] = useState(false)
    //const url = lien + cleApi + recherche + options;


    useEffect(() => {
        axios.get(lien + cleApi + "&query=" + recherche + options)
            .then(data => {
                if (clickTop === true && clickFlop === false) return setFilm((data.data.results.sort((a, b) => b.vote_average - a.vote_average)));
                if (clickFlop === true && clickTop === false) return setFilm((data.data.results.sort((a, b) => a.vote_average - b.vote_average)));
                setFilm(data.data.results);
            })
            .catch(error => console.log(error))
    }, [clickFlop, clickTop, recherche]);


    const Top = (e) => {
        setClickTop(true);
        setClickFlop(false);

        if (clickTop === true) setClickTop(false);
    };

    const Flop = (e) => {
        setClickTop(false);
        setClickFlop(true);

        if (clickFlop === true) setClickFlop(false);
    };

    console.log("sortie de la recherche --> ", film);

    return (
        <div>
            <div className='barreDeTri'>
                <button className={clickTop ? "btnTopActive" : 'btnTop'} onClick={() => { Top(film) }}>top <i className="fa-solid fa-arrow-up fleche"></i></button>
                <button className={clickFlop ? "btnFlopActive" : 'btnFlop'} onClick={() => { Flop(film) }}>flop <i className="fa-solid fa-arrow-down fleche"></i></button>
            </div>
            <ul className='tableau'>
                {film.map((liste) => (
                    <Affiches liste={liste} key={liste.id} film={film} />
                ))}
            </ul>
        </div>
    );



};

export default Tableau;