import React from 'react'
import img from '../assets/thumbnail1.png'
const Hero = () => {
  return (
   <div className='min-h-[400px] flex m-10'>
     <div className='ml-10'>
      <h2 className='text-lg mt-20 uppercase text-red-800 ml-8'>Mordern Collection 🔥</h2>
      <h1 className='text-6xl font-semibold mt-2 ml-8'>2021 Colletion <br/>For Gents</h1>
      <div className='flex'>
      <span className='text-pink-800 text-6xl ml-8 mt-5'>|</span>
      <p className='mt-7 w-3/6 text-neutral-600 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis optio perferendis autem praesentium dese.</p>
      </div>
      <button className='bg-red-600 text-white px-6 py-3 rounded-full ml-10 mt-6'>start shopping 🡢</button>
    </div>

    <div>
     <img src={img} alt="hero" className='h-[30rem] w-auto drop-shadow-2xl mr-24 ' />
    </div>
   </div>
    
  )
}

export default Hero
