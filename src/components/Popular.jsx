import React from "react";
import product from '../assets/product-1.jpg'
import product1 from '../assets/product-2.jpg'
import product2 from '../assets/product-3.jpg'
import product3 from '../assets/product-4.jpg'
import product4 from '../assets/product-5.jpg'
import product5 from '../assets/product-6.jpg'
import product6 from '../assets/product-7.jpg'
import product7 from '../assets/product-8.jpg'
const Popular = () => {
  return (
    <div id="Pop">
      <div className="flex justify-start items-start pt-12 mt-20">
        <h1 className="text-5xl leading-none font-ace flex flex-col items-end ml-10 font-serif">
          POPULAR<span className="text-sm">Collection</span>
        </h1>
      </div>

     <div className="grid grid-cols-4 gap-5 mt-20 ml-5 ">
     <div className=" relative">
        <img src={product} alt="" className=" w-auto h-96 rounded-2xl " />
        <h1 className=" absolute top-4 left-4 uppercase text-lg">nike air max</h1>
        <div className="flex  absolute bottom-2 ">
          <h1 className="mt-5 ml-5  font-medium">$ <span className="text-xl">89.00</span></h1>
          <button className=' border text-white   px-9 py-2 mb-3 rounded-2xl bg-black text-semibold font-medium  ml-14 mt-4 ' >SHOP NOW</button>

        </div>
      </div>
     <div className=" relative">
        <img src={product1} alt="" className=" w-auto h-96 rounded-2xl" />
        <h1 className=" absolute top-4 left-4 uppercase text-lg">nike dunk</h1>
        <div className="flex  absolute bottom-2 ">
          <h1 className="mt-5 ml-5  font-medium">$ <span className="text-xl">99.00</span></h1>
          <button className=' border text-white   px-9 py-2 mb-3 rounded-2xl bg-black text-semibold font-medium  ml-14 mt-4 ' >SHOP NOW</button>

        </div>
      </div>
     <div className=" relative ">
        <img src={product2} alt="" className=" w-auto h-96 rounded-2xl" />
        <h1 className=" absolute top-4 left-4 uppercase text-lg">nike zoom max</h1>
        <div className="flex  absolute bottom-2 ">
          <h1 className="mt-5 ml-5  font-medium">$ <span className="text-xl">60.00</span></h1>
          <button className=' border text-white   px-9 py-2 mb-3 rounded-2xl bg-black text-semibold font-medium  ml-14 mt-4 ' >SHOP NOW</button>

        </div>
      </div>
     <div className=" relative">
        <img src={product3} alt="" className=" w-auto h-96 rounded-2xl" />
        <h1 className=" absolute top-4 left-4 uppercase text-lg">nike run shoes</h1>
        <div className="flex  absolute bottom-2 ">
          <h1 className="mt-5 ml-5  font-medium">$ <span className="text-xl">79.00</span></h1>
          <button className=' border text-white   px-9 py-2 mb-3 rounded-2xl bg-black text-semibold font-medium  ml-14 mt-4 ' >SHOP NOW</button>

        </div>
      </div>
     <div className=" relative">
        <img src={product4} alt="" className=" w-auto h-96 rounded-2xl" />
        <h1 className=" absolute top-4 left-4 uppercase text-lg">nike free max</h1>
        <div className="flex  absolute bottom-2 ">
          <h1 className="mt-5 ml-5  font-medium">$ <span className="text-xl">59.00</span></h1>
          <button className=' border text-white   px-9 py-2 mb-3 rounded-2xl bg-black text-semibold font-medium  ml-14 mt-4 ' >SHOP NOW</button>

        </div>
      </div>
     <div className=" relative">
        <img src={product5} alt="" className=" w-auto h-96 rounded-2xl" />
        <h1 className=" absolute top-4 left-4 uppercase text-lg">nike air max</h1>
        <div className="flex  absolute bottom-2 ">
          <h1 className="mt-5 ml-5  font-medium">$ <span className="text-xl">109.00</span></h1>
          <button className=' border text-white   px-9 py-2 mb-3 rounded-2xl bg-black text-semibold font-medium  ml-14 mt-4 ' >SHOP NOW</button>

        </div>
      </div>
     <div className=" relative">
        <img src={product6} alt="" className=" w-auto h-96 rounded-2xl" />
        <h1 className=" absolute top-4 left-4 uppercase text-lg">nike air max</h1>
        <div className="flex  absolute bottom-2 ">
          <h1 className="mt-5 ml-5  font-medium">$ <span className="text-xl">99.00</span></h1>
          <button className=' border text-white   px-9 py-2 mb-3 rounded-2xl bg-black text-semibold font-medium  ml-14 mt-4 ' >SHOP NOW</button>

        </div>
      </div>
     <div className=" relative">
        <img src={product7} alt="" className=" w-auto h-96 rounded-2xl" />
        <h1 className=" absolute top-4 left-4 uppercase text-lg">nike air max</h1>
        <div className="flex  absolute bottom-2 ">
          <h1 className="mt-5 ml-5  font-medium">$ <span className="text-xl">110.00</span></h1>
          <button className=' border text-white   px-9 py-2 mb-3 rounded-2xl bg-black text-semibold font-medium  ml-14 mt-4 ' >SHOP NOW</button>

        </div>
      </div>
    
     </div>


      











    </div>
  );
};

export default Popular;
