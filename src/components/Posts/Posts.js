import React, {useEffect, useState} from 'react';
import {Post} from "../Post/Post";

const Posts = () => {
    // https://www.youtube.com/watch?v=Ka3OQpwqxXA
    const [posts, setPosts] = useState([]);
    const [visible, setVisible] = useState(3);
    
    const showMoreItems = () => {
        setVisible(prevState => prevState +3)
    }

    const showLessItems = () => {
        setVisible(prevState => prevState -3)
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    },[])

    return (
        <div>
            {posts.slice(0, visible).map(post => <Post key={post.id} post={post}/>)}
            <button onClick={showLessItems}>Load Less</button>
            <button onClick={showMoreItems}>Load More</button>
        </div>
    );
};

export {Posts};