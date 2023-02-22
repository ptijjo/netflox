import React from 'react';

const Affiches = (props) => {

    const liste = props.liste;
    const key = props.key;

    return (
        <li key={key} className="affiche">
            <img src={"https://image.tmdb.org/t/p/original/" + liste.poster_path} alt="" />


        </li>
    );
};

export default Affiches;