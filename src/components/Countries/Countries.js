import React from 'react';
import css from './Countries.module.css'

const Countries = ({country}) => {

    return (
        <div className={css.container}>
            <b>{country.name.common}</b>
            <div>{country.population}</div>
            <img src={country.flags.png} alt="flag"/>
        </div>
    );
};

export {Countries};