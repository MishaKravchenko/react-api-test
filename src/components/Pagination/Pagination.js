import React from 'react';

const Pagination = ({countriesPerPage, totalCountries, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul>
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <a href="!#" onClick={()=>paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export {Pagination};