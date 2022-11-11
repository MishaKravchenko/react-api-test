import React, {useState} from 'react';
import {MyInput} from "../UI/input/MyInput";
import {MyButton} from "../UI/button/MyButton";

const PostForm = ({createPost}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {...post, id: new Date().getTime()}
        createPost(newPost)
        setPost({title: '', body: ''})
    }
    // Неконтрольований інпут через хук useRef
    // const bodyInputRef = useRef();
    //
    // const addNewPost = (e) => {
    //   e.preventDefault()
    //     console.log(bodyInputRef.current.value)
    // }
    return (
        <form>
            {/*Контрольований інпут*/}
            <MyInput type="text" placeholder={'title'} value={post.title}
                     onChange={(e) => setPost({...post, title: e.target.value})}/>
            <MyInput type="text" placeholder={'body'} value={post.body}
                     onChange={(e) => setPost({...post, body: e.target.value})}/>
            {/*Неконтрольований інпут через хук useRef*/}
            {/*<input type="text" ref={bodyInputRef}/>*/}
            {/*<MyInput type="text" placeholder={'body'} ref={bodyInputRef}/>*/}
            <MyButton onClick={addNewPost}>Створити пост</MyButton>
        </form>
    );
};

export {PostForm};