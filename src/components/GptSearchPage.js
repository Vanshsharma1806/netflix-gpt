import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { bgImage } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <div>
        <div className='absolute -z-10'> 
            <img src={bgImage}></img>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage