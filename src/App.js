import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Countries} from "./components/Countries/Countries";

// https://www.youtube.com/watch?v=cg-CDLLo_fI
function App() {

    const [countries, setCountries] = useState([]);
    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(true);

    const filteredCountries = countries.filter(country => {
            return country.name.official.toLowerCase().includes(value.toLowerCase())
        }
    )
    const itemClickHandler = (e) => {
        setValue(e.target.textContent)
        setIsOpen(!isOpen)
    }
    const inputClickHandler = () => {
        setIsOpen(true)
    }

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => setCountries(res.data))
    }, [])

    return (
        <div className={'wrapper'}>
            <form className={"search_form"}>
                <input className="input"
                       type="text"
                       placeholder="Type to Search..."
                       value={value}
                       onChange={(e) => setValue(e.target.value)}
                       onClick={inputClickHandler}/>
                <ul className="autocomplete">
                    {value && isOpen ?
                        filteredCountries.map(country =>
                            <li className="autocomplete_item"
                                onClick={itemClickHandler}>
                                {country.name.official}
                            </li>)
                        : null}
                </ul>
            </form>
            <div className="container">
                {filteredCountries.map(country => <Countries key={country.name.common} country={country}/>)}
            </div>
        </div>
    );
}

export default App;
