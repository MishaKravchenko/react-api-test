import React from 'react';
import css from './Pagination.module.css'

const Pagination = ({countriesPerPage, totalCountries, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>

            {
                pageNumbers.map(number => (
                    <div key={number} className={css.pagination}>
                        <a href="!#" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </div>
                ))
            }
        </div>
    );
};

export {Pagination};