import React from 'react'
import feauter from '../assets/featured1.png'
import feauter1 from '../assets/featured2.png'
import feauter2 from '../assets/featured3.png'
import feauter3 from '../assets/featured4.png'
import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <>
    <div className='flex justify-end items-end pt-12'>
      <h1 className='text-5xl leading-none font-ace flex flex-col items-end mr-10 font-serif'>DISCOVER<span className='text-sm'>New</span></h1>
    </div>


    <div className="slider-container ">
      <Slide {...settings}>
        <div>
        <div className='bg-red-600 h-72 w-72 rounded-xl mt-20 ml-20'>
      <div className='p-5'>
      <h1 className='text-white text-2xl text-end mt-5 mr-3 relative bottom-4'>01</h1>
        <img src={feauter} alt="1"  className='relative bottom-4'/>
       <div className='flex justify-around'>
       <h1 className='text-white text-sm mr-5'>nike Air Max <br /> <span className='text-xl'>$99</span></h1>
        <button className='text-black  text-2xl bg-white px-4 rounded-full'>+</button>
       </div>
      </div>
    </div>
        </div>
        <div>
        <div className='bg-orange-600 h-72 w-72 rounded-xl mt-20 ml-20'>
      <div className='p-5'>
      <h1 className='text-white text-2xl text-end mt-5 mr-3 relative bottom-4'>02</h1>
        <img src={feauter1} alt="1"  className='relative bottom-4'/>
       <div className='flex justify-around'>
       <h1 className='text-white text-sm mr-5'>nike Zoom Max <br /> <span className='text-xl'>$99</span></h1>
        <button className='text-black  text-2xl bg-white px-4 rounded-full'>+</button>
       </div>
      </div>
    </div>
        </div>
        <div>
        <div className='bg-purple-600 h-72 w-72 rounded-xl mt-20 ml-20'>
      <div className='p-5'>
      <h1 className='text-white text-2xl text-end mt-5 mr-3 relative bottom-4'>03</h1>
        <img src={feauter2} alt="1"  className='relative bottom-4'/>
       <div className='flex justify-around'>
       <h1 className='text-white text-sm mr-5'>Air Jordan <br /> <span className='text-xl'>$99</span></h1>
        <button className='text-black  text-2xl bg-white px-4 rounded-full'>+</button>
       </div>
      </div>
    </div>
        </div>
        <div>
        <div className='bg-yellow-600 h-72 w-72 rounded-xl mt-20 ml-20'>
      <div className='p-5'>
      <h1 className='text-white text-2xl text-end mt-5 mr-3 relative bottom-4'>04</h1>
        <img src={feauter3} alt="1"  className='relative bottom-4'/>
       <div className='flex justify-around'>
       <h1 className='text-white text-sm mr-5'>nike Free Run <br /> <span className='text-xl'>$99</span></h1>
        <button className='text-black  text-2xl bg-white px-4 rounded-full'>+</button>
       </div>
      </div>
    </div>
        </div>
        <div>
        <div className='bg-blue-600 h-72 w-72 rounded-xl mt-20 ml-20'>
      <div className='p-5'>
      <h1 className='text-white text-2xl text-end mt-5 mr-3 relative bottom-4'>05</h1>
        <img src={feauter2} alt="1"  className='relative bottom-4'/>
       <div className='flex justify-around'>
       <h1 className='text-white text-sm mr-5'>nike Air Max <br /> <span className='text-xl'>$99</span></h1>
        <button className='text-black  text-2xl bg-white px-4 rounded-full'>+</button>
       </div>
      </div>
    </div>
        </div>
        <div>
        <div className='bg-green-500 h-72 w-72 rounded-xl mt-20 ml-20'>
      <div className='p-5'>
      <h1 className='text-white text-2xl text-end mt-5 mr-3 relative bottom-4'>06</h1>
        <img src={feauter} alt="1"  className='relative bottom-4'/>
       <div className='flex justify-around'>
       <h1 className='text-white text-sm mr-5'>nike Air Max <br /> <span className='text-xl'>$99</span></h1>
        <button className='text-black  text-2xl bg-white px-4 rounded-full'>+</button>
       </div>
      </div>
    </div>
        </div>
        
      </Slide>
    </div>

     
    

   
  
   
    
    </>
  )
}

export default Slider
