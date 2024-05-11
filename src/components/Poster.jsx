import React from 'react'
import poster from '../assets/dune.jpg'

const Poster = () => {
  return (
    <div>
      <div className=' absolute ml-8'>
        <h1 className=' text-6xl text-white mb-4 mt-60 font-bold'>Dune: Part Two </h1>
        <p className='text-white w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis, illo neque sint repellat aperiam modi facilis hic corporis, minus voluptatibus rem earum ullam voluptate sit. Incidunt, molestiae. Nemo dicta quam perspiciatis voluptas quod eaque, iure laborum accusantium unde excepturi vero, consequatur architecto voluptate temporibus alias magnam nobis esse nostrum.</p>


     <div>
     <button className='w-32 h-12 rounded-lg bg-blue-500 text-white mt-8 mr-4'>Watch Now </button>

      <button className='w-32 h-12 rounded-lg bg-black text-white mt-8'>Explore More </button>
     </div>
      </div>
      <img src={poster} alt="" className=' mb-8' />
    </div>
  )
}

export default Poster
