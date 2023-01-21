import React from 'react';
import FoodCard from './FoodCard'
import Restaurant from './Restaurant'

const Directory = () => {
  return (
    <>
      <img alt='pic' src='https://i.ibb.co/2hdPfQf/1.png' className='blur-[3px] w-screen relative h-full' />
      <div className='absolute  z-[4] top-[25%] left-[12%] sm:top-[35%] sm:left-[20%] md:top-[45%] md:left-[16%] lg:top-[60%] lg:left-[24%] '>
        <p className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white anim align-middle text-center'>Zometo</p>
        <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white anim align-middle text-center'>Discover the best food & drinks in Surat</p>
      </div>

      <div className='flex flex-wrap'>
        <div className='p-3 w-full sm:w-1/4'>
          <ul className='sm:text-right font-medium'>
            <li>category-1</li>
            <li>category-2</li>
            <li>category-3</li>
            <li>category-4</li>
            <li>category-5</li>
          </ul>
        </div>
        <div className='p-3 w-full sm:w-3/4 flex flex-wrap space-y-3'>
          <div className='mx-auto'><Restaurant /></div>
          <div className='mx-auto'><Restaurant /></div>
          <div className='mx-auto'><Restaurant /></div>
        </div>

      </div>

      <div className='flex flex-wrap'>
        <div className='p-3 w-full sm:w-1/4'>
          <ul className='sm:text-right font-medium'>
            <li>category-1</li>
            <li>category-2</li>
            <li>category-3</li>
            <li>category-4</li>
            <li>category-5</li>
          </ul>
        </div>
        <div className='p-3 w-full sm:w-3/4 flex flex-wrap space-y-3'>
          <div className='mx-auto'><FoodCard /></div>
          <div className='mx-auto'><FoodCard /></div>
          <div className='mx-auto'><FoodCard /></div>
        </div>

      </div>

      {/* <div className='grid mt-10 gap-4 grid-rows-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <div className='row-span-4'>
          <ul className='text-right font-medium'>
            <li>category-1</li>
            <li>category-2</li>
            <li>category-3</li>
            <li>category-4</li>
            <li>category-5</li>
          </ul>
        </div>
        <div className='mx-auto'><FoodCard /></div>
        <div className='mx-auto'><FoodCard /></div>
        <div className='mx-auto'><FoodCard /></div>
      </div> */}
      {/* <div className='containerr'>
        <div className='row '>
          <div className='column'><Restaurant /></div>
          <div className='column'><Restaurant /></div>
          <div className='column'><Restaurant /></div>
          <div className='column'><Restaurant /></div>
        </div>
      </div> */}
      {/* <div className='containerr'>
        <div className='row'>
          <div className='column'><FoodCard /></div>
          <div className='column'><FoodCard /></div>
          <div className='column'><FoodCard /></div>
          <div className='column'><FoodCard /></div>
        </div>

      </div> */}
    </>

  )
}

export default Directory