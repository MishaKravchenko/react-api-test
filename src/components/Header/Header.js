import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to={'home'}>Home</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'photos'}>Photos</NavLink>
        </div>
    );
};

export {Header};