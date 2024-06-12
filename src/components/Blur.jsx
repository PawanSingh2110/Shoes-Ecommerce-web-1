import React from 'react'
import img from '../assets/thumbnail1.png'
import img1 from '../assets/thumbnail2.png'
import img2 from '../assets/thumbnail3.png'
const Blur = () => {
  return (
    <div className=' bg-transparent backdrop-blur relative bottom-14 flex justify-evenly shadow-2xl mr-10 ml-10 rounded-3xl'>
        <div className='flex p-5 '>
        
            <img src={img} alt="shoes" className='h-24 w-24 drop-shadow-2xl ' />
        
        
          <h1 className='text-xl p-3 font-semibold'>Basketball shoes <br/>
          <span className='text-red-700'>$99</span>
          </h1>
        </div>

        <div className='flex p-5 '>
        
        <img src={img1} alt="shoes" className='h-24 w-24 drop-shadow-2xl ' />
    
    
        <h1 className='text-xl p-3 font-semibold'>Basketball shoes <br/>
          <span className='text-red-700'>$99</span>
          </h1>
    </div>


    <div className='flex p-5 '>
        
        <img src={img2} alt="shoes" className='h-24 w-24  drop-shadow-2xl' />
    
    
        <h1 className='text-xl p-3 font-semibold'>Basketball shoes <br/>
          <span className='text-red-700'>$99</span>
          </h1>
    </div>
      
    </div>
  )
}

export default Blur
