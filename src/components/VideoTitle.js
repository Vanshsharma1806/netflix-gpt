import React from 'react'

const VideoTitle = ({title, overview}) => {
  return ( 
    <div className='pt-[15%] pl-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='w-1/3 mt-4 font-light'>{overview}</p>

      <div className='mx-6 my-4' >
        <button className='bg-white p-2 px-10 text-black rounded-sm mx-1 hover:opacity-80' >  Play</button>
        <button className='bg-gray-700 p-2 px-10 text-white rounded-sm mx-1 ' >More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle