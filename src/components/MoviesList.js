import React from 'react'
import MovieCard from './MovieCard'


const MoviesList = ({title, movies}) => {

    

  return movies && (
    <div className='px-6 py-6'>
        <h1 className='font-bold text-2xl text-white pb-2'> {title} </h1>
        <div className='flex overflow-x-scroll scrollbar-none '>
            <div className='flex'>
                {movies.map((movie) =>(
                    <MovieCard key = {movie.id} poster_path = {movie.poster_path} />
                ) )}
            </div> 
        </div>
    </div>
  )
}

export default MoviesList