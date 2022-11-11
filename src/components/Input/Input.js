import React, {useState} from 'react';

const Input = () => {
    const [value, setValue] = useState('');

    const handleInput = (e) => {
        setValue(e.target.value)
    }
    return (
        <div>
            <input type="text" value={value} onChange={handleInput}/>
            <h1>{value}</h1>
        </div>
    );
};

export {Input};