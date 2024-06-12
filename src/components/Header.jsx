import React from 'react'

const Header = () => {
  return (
  <div className='relative  bottom-8 right-10 flex justify-center bg-neutral-600 text-white w-full xl:w-[600px] mx-auto shadow-sm rounded-full p-5   '>
    <a href="#" className='ml-5  text-center font-semi text-lg hover:underline '>HOME</a>
    <a href="#" className='ml-5  text-center font-semi text-lg hover:underline '>Features</a>
    <a href="#About" className='ml-5  text-center font-semi text-lg hover:underline '>ABOUT</a>
    <a href="#Pop" className='ml-5  text-center font-semi text-lg hover:underline '>Shop</a>
    <a href="#" className='ml-5  text-center font-semi text-lg hover:underline '>contact</a>
  </div>
  )
}

export default Header
