import React from 'react';
import {PostItem} from "../PostItem/PostItem";
import '../../styles/App.css'

const PostList = ({posts, removePost}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center', marginTop: '10px'}}>
                Постів не знайдено
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: '15px'}}>
                Список постів
            </h1>
            {posts.map((post, index) =>
                <PostItem number={index + 1} key={post.id} post={post} removePost={removePost}/>)}
        </div>
    );
};

export {PostList};