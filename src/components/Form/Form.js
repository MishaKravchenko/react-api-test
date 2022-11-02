import React from 'react';
import css from './Form.module.css'

const Form = () => {
    return (
        <div>
            <form>
                <input className={css.input} type="text" placeholder="Type to Search..."/>
            </form>
        </div>
    );
};

export {Form};