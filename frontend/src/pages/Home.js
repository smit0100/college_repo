import React from 'react'
import Restaurant from '../components/Restaurant'
import Directory from '../components/Directory'
import FoodCard from '../components/FoodCard'

const Home = () => {
  return (
    <>
      <div className='h-screen absolute top-0 left-0 w-[98.70vw]  z-0  '>

        <Directory />
        <div className='containerr'>
          <div className='row'>
            <div className='column'><Restaurant /></div>
            <div className='column'><Restaurant /></div>
            <div className='column'><Restaurant /></div>
            <div className='column'><Restaurant /></div>
          </div>
        </div>

        <div className='containerr'>
          <div className='row'>
            <div className='column'><FoodCard /></div>
            <div className='column'><FoodCard /></div>
            <div className='column'><FoodCard /></div>
            <div className='column'><FoodCard /></div>
          </div>

        </div>

        {/* <div className='grid grid-cols-12'>
          <div className='col-span-4'>
            aside section 
          </div>
         <div className='grid grid-cols-4 gap-4 col-span-8'> */}
        {/* <div className='grid'>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
            </div> */}
        {/* <div className='grid grid-cols-4 gap-2 gap-y-8 ml-8'>
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </div> */}
        {/* </div>
         
        </div> */}
        {/* <FoodCard /> */}
        {/* <Foodanimatedcard/> */}
      </div>
    </>

  )
}

export default Home