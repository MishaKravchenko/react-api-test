import React from 'react';
import css from './Photo.module.css'

const Photo = ({photo: {id, title, thumbnailUrl}}) => {
    return (
        <div>
            <div className={css.container}>
                <span><b>{id}</b>. {title}</span>
                <img src={thumbnailUrl} alt={title}/>
            </div>
        </div>
    );
};

export {Photo};