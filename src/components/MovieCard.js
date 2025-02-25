import React from 'react'
import { IMAGE_CDN } from '../utils/constants'

const MovieCard = ({id, poster_path}) => {
  return (
    <div className='w-36 pr-2'>
        <img alt="" src={IMAGE_CDN + poster_path}></img>
    </div>
  )
}

export default MovieCard