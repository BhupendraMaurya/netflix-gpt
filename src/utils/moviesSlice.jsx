import { createSlice } from "@reduxjs/toolkit";

const moviesSLice = createSlice({
    name: "movies",
    initialState: { // inside this I will add my movies
        nowPlayingMovies: null,
        trailerVideo: null,
    }, 
    reducers:{
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },

        addPopularMovies: (state, action) =>{
            state.popularMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }

});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } = moviesSLice.actions;
export default moviesSLice.reducer;