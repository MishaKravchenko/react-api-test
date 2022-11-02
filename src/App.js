import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Photo} from "./components/Photo/Photo";

//https://www.youtube.com/watch?v=J2MWOhV8T6o
function App() {
    const [photos, setPhotos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [totalCount, setTotalCount] = useState(1);

    useEffect(() => {
        if (fetching) {
            console.log('fetching')
            axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=50&_page=${currentPage}`)
                .then(response => {
                    setPhotos([...photos, ...response.data])
                    setCurrentPage(prevState => prevState + 1)
                    setTotalCount(response.headers['x-total-count'])
                })
                .finally(() => setFetching(false))
        }
    }, [fetching, currentPage])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && photos.length < totalCount) {
            // console.log('SCR0LL')
            setFetching(true)
        }
        //1 лог виводить загальну висоту сторінки з врахуванням скролу, прокрутки
        //2 лог поверне нам поточне положення скролу від верху сторінки
        //3 лог висота видимої області сторінки, тобто висота нашого браузера
        //сума другого і першого параметру дорівнюють першому параметру
        // console.log('scrollHeight', e.target.documentElement.scrollHeight)
        // console.log('scrollHeight', e.target.documentElement.scrollTop)
        // console.log('scrollHeight', window.innerHeight)
        //І тепер коли ми приближуємось до краю сторінки, спрацьовує скролл
    }

    return (
        <div className="wrapper">
            <div className="container">
                {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
            </div>
        </div>
    );
}

export default App;
