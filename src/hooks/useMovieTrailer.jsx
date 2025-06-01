import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
  // use for taking the data from store
    const dispatch = useDispatch();
    // const [trailerId, setTrailerId] = useState(null); // one of the ways to get the trailerId., but now insead of it. we are using the superpower of redux store.
    // Fetch trailer video & updating the store with the trailer data.
  
    const getMovieVideos = async () =>{

        if (!movieId) return; // ✅ Do not fetch if movieId is invalid

      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, 
        API_OPTIONS
      );
      const json = await data.json();
  
      const filterData = json.results.filter(video => video.type ==="Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];

      dispatch(addTrailerVideo(trailer));
    };
  
    useEffect(() =>{
      getMovieVideos();
    },[movieId]);
}

export default useMovieTrailer;