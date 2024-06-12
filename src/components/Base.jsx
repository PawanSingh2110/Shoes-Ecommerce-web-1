import React from 'react'

const Base = () => {
  return (
    <div className='bg-black h-28  mt-40 flex justify-center items-center '>
      <h1 className='text-white text-5xl  font-medium'> GET LATEST UPDATES</h1>

      <div className=' bg-white px-7 py-3  ml-5 rounded-full'>
        <input type="text " placeholder='Search ' className='outline-none text-xl font-medium' />
        <button  className='bg-black text-white rounded-full px-5 py-2 ml-4 uppercase'>subscribe</button>
      </div>

      
      
        

      
    </div>
  )
}

export default Base
