import React from 'react';

const Post = ({user: {id, title, body}}) => {
    return (
        <div className='col-5 p-3'>
            <div className='bg-primary h-100 text-white p-4 '>
                <b className='text-black'>ID: </b>{id} <br/>
                <b className='text-black'>Title: </b>{title} <br/>
                <b className='text-black'>Body: </b> {body}
            </div>
        </div>
    );
};

export {Post};