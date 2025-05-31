import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
     // Here we are fetching the data from TMDB API and updating the store., but my brwoe flie is looking ugly as I want to put here only rendering code.
    // so making my own custom hook
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () =>{
        const response = await fetch(
            'https://api.themoviedb.org/3/movie/now_playing?page=1',
            API_OPTIONS
        );
        // using Response instead of data.
        const json = await response.json();
        console.log(json.results);

        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    },[]);
};


export default useNowPlayingMovies;