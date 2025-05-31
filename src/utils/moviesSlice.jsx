import { createSlice } from "@reduxjs/toolkit";

const moviesSLice = createSlice({
    name: "movies",
    initialState: { // inside this I will add my movies
        addNowPlayingMovies: null,
    }, 
    reducers:{
        addNowPlayingMovies: (state, action) =>{
            state.addNowPlayingMovies = action.payload;
        }
    }

});

export const { addNowPlayingMovies } = moviesSLice.actions;
export default moviesSLice.reducer;