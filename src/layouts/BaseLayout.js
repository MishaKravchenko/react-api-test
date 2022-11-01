import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components";

const BaseLayout = () => {
    return (
        <div>
            <h1>Layouts</h1>
            <Header/>
            <div><Outlet/></div>
        </div>
    );
};

export {BaseLayout};