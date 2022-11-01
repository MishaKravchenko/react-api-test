import React, {useEffect} from 'react';
import {getAllAlbums} from "../../redux/slices/album.slice";
import {useDispatch, useSelector} from "react-redux";
import {Albums} from "../../components";

const AlbumsPage = () => {

    const dispatch = useDispatch();
    const {albums} = useSelector(state => state['albumReducer']);

    useEffect(() => {
        dispatch(getAllAlbums())
    }, [dispatch])

    return (
        <div>
            <h1>Albums</h1>
            {albums && albums.map(album => <Albums key={album.id} album={album}/>)}
        </div>
    );
};

export {AlbumsPage};