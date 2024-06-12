import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <nav className=' text-white overflow-hidden tracking-wide bg-red-500 p-3 flex justify-between items-center  rounded-xl ml-5 mr-5'>
      <div> 
         <h2 className='text-4xl font-bold'>L<span className='bg-gradient-to-r from-blue-300 to-blue-400 text-transparent bg-clip-text'>uxeStep</span></h2>
      </div>

      <div className='flex justify-between items-center '>
      <div className='flex justify-between bg-white p-2 rounded-full'>
        {/**search */}
        <input type='text' placeholder='Search' className='outline-none  p-1 text-black ml-5 font-medium text-xl '/>
        <svg  className="bg-white  "xmlns="http://www.w3.org/2000/svg" height={35} width={30} viewBox="0 0 460 512"><path d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z"/></svg>
        cart
      </div>
      <div className='flex sm:hidden lg:flex relative'>
        <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" height={30} width={30} viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
        <div className='bg-white h-3 w-3 rounded-full absolute left-7 -top-1'></div>
      </div>
      </div>
        
    </nav>
  )
}

export default Navbar
