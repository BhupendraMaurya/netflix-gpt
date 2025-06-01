import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';


// since I want the movie data for main container, so I will get it from redux store.

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    console.log(movies);

    if(!movies){
      return;
    }
    const mainMovie = movies[0];
    console.log(mainMovie);
  return (
    <div>
      <VideoTitle />
      <VideoBackground />  
    </div>
  )
}

export default MainContainer