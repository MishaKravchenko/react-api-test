import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {albumsService} from "../../services/albums.service";

export const getAllAlbums = createAsyncThunk(
    'albumSlice/getAllAlbums',
    async (_, {dispatch}) => {
        try {
            const albums = await albumsService.getAll();
            dispatch(setAlbums({data: albums}))
        } catch (e) {
            console.log(e);
        }
    }
);

const albumSlice = createSlice({
    name: 'albumSlice',
    initialState: {
        albums: []
    },
    reducers: {
        setAlbums: (state, action) => {
            state.albums = action.payload.data
        }
    }
})

const albumReducer = albumSlice.reducer;

export default albumReducer;

export const {setAlbums} = albumSlice.actions;

