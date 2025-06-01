import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';


// since I want the movie data for main container, so I will get it from redux store.

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if(!movies){
      return;
    }
    const mainMovie = movies[0];

    const {original_title, overview, id} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview = {overview} />
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer