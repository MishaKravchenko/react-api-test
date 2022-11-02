import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Countries} from "./components/Countries/Countries";
import {Pagination} from "./components/Pagination/Pagination";
import {Form} from "./components/Form/Form";

// https://www.youtube.com/watch?v=s59kRbD4Sw8&list=PLkUJHNMBzmtRuSUgA_9g0lmMC_Y1TW2K1&index=12
function App() {

    const [countries, setCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(48);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(prevState => prevState + 1)
    const prevPage = () => setCurrentPage(prevState => prevState - 1)


    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => setCountries(res.data))
    }, [])

    const lastCountryIndex = currentPage * countriesPerPage;
    const firstCountryIndex = lastCountryIndex - countriesPerPage;
    const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex)

    return (
        <div className={'wrapper'}>
            <Form/>
            <div className="container">
                {currentCountry.map(country => <Countries key={country.name.common} country={country}/>)}
            </div>
            <div className={"paginate"}>
                <button className={"btn"} onClick={prevPage}>PrevPage</button>
                <Pagination countriesPerPage={countriesPerPage} totalCountries={countries.length} paginate={paginate}/>
                <button className={"btn"} onClick={nextPage}>NextPage</button>
            </div>
        </div>
    );
}

export default App;
