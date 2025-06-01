import { createSlice } from "@reduxjs/toolkit";

const moviesSLice = createSlice({
    name: "movies",
    initialState: { // inside this I will add my movies
        nowPlayingMovies: null,
    }, 
    reducers:{
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        }
    }

});

export const { addNowPlayingMovies } = moviesSLice.actions;
export default moviesSLice.reducer;