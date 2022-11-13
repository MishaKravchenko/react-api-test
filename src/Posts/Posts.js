import React, {useEffect, useState} from 'react';
import {Post} from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=${limit}`)
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [limit])
    const loadMore = () => {
        setLimit(prevState => prevState + 10)
    }
    return (
        <div className='row d-flex justify-content-center'>
            {posts.map(post => <Post key={post.id} user={post}/>)}
            <div className={limit === 100 ? 'd-none' : 'btn btn-dark w-25'} onClick={loadMore}> Load More</div>
        </div>
    );
};

export {Posts};