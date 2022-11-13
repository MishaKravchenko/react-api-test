import React from 'react';

const UserItem = ({user:{id, first_name,last_name, avatar}}) => {
    return (
        <div>
            {id}. {first_name} {last_name}
            <img src={avatar} alt={first_name}/>
        </div>
    );
};

export {UserItem};