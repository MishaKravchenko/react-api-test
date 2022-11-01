import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllPhotos, setFetching} from "../../redux/slices/photo.slice";
import {Photos} from "../../components/Photos/Photos";

const PhotosPage = () => {

    const dispatch = useDispatch();
    const {photos, currentPage, fetching} = useSelector(state => state['photoReducer']);

    useEffect(() => {
        if (fetching) {
            dispatch(getAllPhotos(currentPage))
        }
    }, [dispatch, fetching, currentPage])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            console.log('scroll')
            // dispatch(setFetching(true));
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
        <div>
            {photos && photos.map(photo => <Photos key={photo.id} photo={photo}/>)}
        </div>
    );
};

export {PhotosPage};