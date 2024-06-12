import React from 'react'
import about from '../assets/about.jpg'
import product from '../assets/product-1.jpg'
import product1 from '../assets/product-2.jpg'
const About = () => {
  return (
    <div id="About">
    <div className='flex justify-start items-start pt-12 mt-20'>
    <h1 className='text-5xl leading-none font-ace flex flex-col items-end ml-10 font-serif'>About<span className='text-sm'>US</span></h1>
  </div>
    
    <div className=' mt-5 flex ml-20 '>
        <div>
          <img src={about} alt="about" className='rounded-2xl ml-14' />
        </div>

        <div >

          {/** two box */}
        <div className='flex ml-24'>
          
          <div className='bg-green-600 flex  px-6 py-3 h-28 rounded-xl ' >
            <div>
              <h1 className='mt-1 ml-3 text-white text-semibold text-xl'>Nike jordan</h1>
              <h1 className=' ml-3  text-white text-semibold text-lg'>$99</h1>
              <button className=' border   px-4 py-1 mb-3 rounded-2xl bg-slate-200 text-semibold font-medium'>SHOP</button>
            </div>
            <img src={product} alt=""  className='h-20 w-20 rounded-lg ml-3 '/>
  
          </div>
          <div className='bg-blue-600 flex px-8 py-3 h-28 rounded-xl ml-10 ' >
            <div>
            <h1 className='mt-1 ml-3 text-white text-semibold text-xl'>jordan A1</h1>
              <h1 className=' ml-3  text-white text-semibold text-lg'>$99</h1>
              <button className=' border   px-4 py-1 mb-3 rounded-2xl bg-slate-200 text-semibold font-medium'>SHOP</button>
            </div>
            <img src={product1} alt=""  className='h-20 w-20 rounded-lg ml-3 '/>
  
          </div>
  
  
  
          </div>


          <h1 className='ml-24 mt-5 text-3xl font-medium'> unveiling Our Journey Crafting Ulimited  <br />Shopping Experience</h1>

          <div className=' ml-24 mt-6 flex'>
            <h1 className='text-2xl font-semibold '>800k+ <br /><span className='text-sm text-neutral-600'>Our happy customer</span></h1>
            <h1 className='text-2xl font-semibold ml-5 '>100+ <br /><span className='text-sm text-neutral-600'>Design every year</span></h1>
            <h1 className='text-2xl font-semibold ml-5'>20+ <br /><span className='text-sm text-neutral-600'> year experience</span></h1>
            <h1 className='text-2xl font-semibold ml-5'>200k+ <br /><span className='text-sm text-neutral-600'>Company postive rev</span></h1>

          </div>

          <div className='flex ml-24 mt-4'>
              <button className=' border text-white   px-9 py-2 mb-3 rounded-2xl bg-black text-semibold font-medium '>SHOP NOW</button>
            
            <p className='ml-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit <br/> Nemo, soluta recusandae incidun</p>
          </div>
  




        </div>
        
       





    </div>





    </div>
  )
}

export default About
