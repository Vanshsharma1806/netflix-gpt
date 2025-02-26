import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center '>
        <form className='w-1/2 grid  grid-cols-12 p-4 bg-black rounded-md'>
            <input className='py-3 px-2 rounded-xl font-bold col-span-9' placeholder='What would you like to watch today ?' />
            <button className='bg-red-700 p-3 col-span-3 rounded-xl font-bold text-lg  ml-2 text-white'>Search</button>
        </form>
        
    </div>
  )
}

export default GptSearchBar