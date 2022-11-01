import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {photosService} from "../../services/photos.service";

export const getAllPhotos = createAsyncThunk(
    'photoSlice/getAllPhotos',
    async ({currentPage}, {dispatch}) => {
        try {
            const photos = await photosService.getAll();
            dispatch(setPhotos({data: photos}))
        } catch (e) {
            console.log(e);
        }
    }
);

const photoSlice = createSlice({
    name: 'photoSlice',
    initialState: {
        photos: [],
        currentPage: 1,
        fetching: true
    },
    reducers: {
        setPhotos: (state, action) => {
            state.photos = action.payload.data
        },
        // setFetching: (state, action) => {
        //     state.fetching = action.payload.data
        // },
        // setCurrentPage: (state, action) => {
        //     state.currentPage = action.payload.data + 1;
        // }
    }
});

const photoReducer = photoSlice.reducer;

export default photoReducer;

export const {setPhotos, setFetching} = photoSlice.actions;