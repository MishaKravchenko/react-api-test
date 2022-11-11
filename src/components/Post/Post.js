import React from 'react';

const Post = ({post: {id, title, body}}) => {
    return (
        <div>
            <b>{id}. {title}</b> <br/>
            {body}
        </div>
    );
};

export {Post};