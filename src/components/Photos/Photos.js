import React from 'react';

const Photos = ({photo: {id, title, thumbnailUrl}}) => {
    return (
        <div>
            <div>{id} - {title}</div>
            <img src={thumbnailUrl} alt={title}/>
        </div>
    );
};

export {Photos};