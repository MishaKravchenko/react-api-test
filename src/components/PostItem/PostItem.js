import React from 'react';
import {MyButton} from "../UI/button/MyButton";

const PostItem = ({post, number, removePost}) => {
    const {id, title, body} = post;
    return (
        <div className='post'>
            <div className="post_content">
                <strong>{id} {title} </strong>
                <div>{body}</div>
            </div>
            <div className="post_btns">
                <MyButton onClick={() => removePost(post)}>Видалити</MyButton>
            </div>
        </div>
    );
};

export {PostItem};