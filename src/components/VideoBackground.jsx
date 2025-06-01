import React, { useEffect } from 'react'
import { API_OPTIONS } from './../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const VideoBackground = ({movieId}) => {

  // fetching trailer from store after storing there.
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  // use for taking the data from store
  const dispatch = useDispatch();
  // const [trailerId, setTrailerId] = useState(null); // one of the ways to get the trailerId., but now insead of it. we are using the superpower of redux store.
  // Fetch trailer video

  const getMovieVideos = async () =>{
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/552524/videos?language=en-US', 
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter(video => video.type ==="Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() =>{
    getMovieVideos();
  },[]);
  return (
    <div>
      <iframe 
      src={"https://www.youtube.com/embed/"+trailerVideo?.key}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackground