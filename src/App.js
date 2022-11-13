import './App.css';
import {useEffect, useState} from "react";
import {UserItem} from "./components/UserItem/UserItem";

function App() {
    // https://www.youtube.com/watch?v=koG_UErY24I
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch(`https://reqres.in/api/users?page=${page}&per_page=2`)
                const json = await res.json()
                setLoading(false)
                setData(prevState => [...prevState, ...json.data])
                setTotalPage(json.total_pages)
                console.log(data)
            } catch (e) {
                console.log(e);
            }
        }
        fetchData()
    }, [page])

    //   useEffect(() => {
    // fetch(`https://reqres.in/api/users?page${page}&per_page=2`)
    //                         .then(value => value.json())
    //                         .then(value => setData(value.data))
    //   }, [page])

    return (
        <div className='App'>
            <div className='user-list'>
                {data && data.map(user => <UserItem key={user.id} user={user}/>)}
            </div>
            {page < totalPage &&
                <button onClick={() => setPage(page + 1)}>
                    {loading ? 'Loading...' : 'Load More'}
                </button>
            }
        </div>
    );
}

export default App;
