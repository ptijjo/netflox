import axios from 'axios';
import React, { useEffect, useState } from 'react';
import cleApi from '../env/ParametreApi';
import Affiches from './Affiches';


const lien = "https://api.themoviedb.org/3/search/movie?api_key=";
const options = "&language=fr-FR&include_adult=false";

const Tableau = (props) => {
    const [film, setFilm] = useState([]);
    const [topAverage, setTopAverage] = useState("false")
    const recherche = props.recherche;

    //const url = lien + cleApi + recherche + options;


    useEffect(() => {
        axios.get(lien + cleApi + "&query=" + recherche + options)
            .then(data => setFilm(data.data.results))
            .catch(error => console.log(error))

    }, [recherche]);

    const Top = (e) => {
        setTopAverage(true)
        console.log(topAverage)
    }
    console.log(film)
    return (
        <div>
            <div className='barreDeTri'>
                <button className='btnTop' onClick={() => { Top(film) }}>top <i className="fa-solid fa-arrow-up fleche"></i></button>
                <button className='btnFlop'>flop <i className="fa-solid fa-arrow-down fleche"></i></button>
            </div>
            <ul className='tableau'>
                {film.map((liste) => (
                    <Affiches liste={liste} key={liste.id} />
                ))}
            </ul>
        </div>
    );



};

export default Tableau;