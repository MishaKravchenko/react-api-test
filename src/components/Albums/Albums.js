import React from 'react';

const Albums = ({album:{id, title}}) => {
    return (
        <div>
            <div><b>{id}</b> - {title}</div>
        </div>
    );
};

export {Albums};