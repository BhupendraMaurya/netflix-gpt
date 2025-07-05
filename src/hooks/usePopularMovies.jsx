import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
     // Here we are fetching the data from TMDB API and updating the store., but my brwoe flie is looking ugly as I want to put here only rendering code.
    // so making my own custom hook
    const dispatch = useDispatch();
    const getPopularMovies = async () =>{
        const response = await fetch(
            'https://api.themoviedb.org/3/movie/popular?page=1',
            API_OPTIONS
        );
        // using Response instead of data.
        const json = await response.json();
        console.log(json.results);

        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getPopularMovies();
    },[]);
};


export default usePopularMovies;