import React from 'react'
import { useSelector } from 'react-redux';
import MoviesList from './MoviesList';

const SecondaryContainer = () => {

  const movies = useSelector((store) => store?.movies);

  return (
    <div>
      <div className='bg-black'>
        <div className='-mt-48  relative z-40'>
          <MoviesList title={"Now Playing"} movies = {movies?.nowPlayingmovies} /> 
          <MoviesList title={"Top Rated"} movies = {movies?.topRatedMovies} /> 
          <MoviesList title={"Upcoming"} movies = {movies?.upcomingMoives} /> 
          <MoviesList title={"Popular"} movies = {movies?.popularMovies} /> 
          
        </div>
      </div>
    </div>
  )
}

export default SecondaryContainer;