import React from 'react';
import css from './Countries.module.css'

const Countries = ({country}) => {

    return (
        <div>
            <div className={css.container}>
                <div className={css.box}>
                    <img src={country.flags.png} alt="flag"/>
                </div>
                <div className={css.name}>{country.name.common}</div>
                <div className={css.info}>
                    <div><b>Population:</b> {country.population}</div>
                    <div><b>Region:</b> {country.region}</div>
                    <div><b>Capital:</b> {country.capital}</div>
                </div>
            </div>
        </div>
    );
};

export {Countries};