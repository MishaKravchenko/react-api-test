import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Countries} from "./components/Countries/Countries";

// https://www.youtube.com/watch?v=TeZt0UbM270
function App() {

    const [countries, setCountries] = useState([]);
    const [value, setValue] = useState('');

    const filteredCountries = countries.filter(country => {
            return country.name.official.toLowerCase().includes(value.toLowerCase())
        }
    )


    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => setCountries(res.data))
    }, [])

    return (
        <div className={'wrapper'}>
            <form>
                <input className="input" type="text" placeholder="Type to Search..."
                       onChange={(e) => setValue(e.target.value)}/>
            </form>
            <div className="container">
                {filteredCountries.map(country => <Countries key={country.name.common} country={country}/>)}
            </div>
        </div>
    );
}

export default App;
