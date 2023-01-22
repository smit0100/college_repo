import React from 'react'
import { Link } from 'react-router-dom'

const FoodCard = () => {
  return (
    <>
      <Link href="/sdf" className="block relative rounded-lg p-4 shadow-sm shadow-indigo-100">
        <div className='before:w-[30px] before:h-[30px] before:left-2 before:skew-y-[16deg] before:-z-0  before:bg-black before:absolute'></div>
        <div className=' absolute top-3 left-2 bg-black text-xs p-1 z-[6] text-white'>BESTSELLING</div>
        <img
          alt="Home"
          src='https://i.ibb.co/x7q0LJG/6.jpg'
          className="h-56 w-full rounded-md object-cover z-[5] relative"
        />

        <div className= "mt-2">
          <dl>
            <div>
              <dd className="text-sm text-gray-500">₹500</dd>
            </div>
            <div>
              <dd className="font-medium">Double cheese burger</dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
              <div className="mt-1.5 sm:ml-3 sm:mt-0">
                <p className="text-gray-500">Review</p>
                <p className="font-medium text-center">1105</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
              <div className="mt-1.5 sm:ml-3 sm:mt-0">
                <p className="text-gray-500">Rating</p>
                <p className="font-medium text-center">4.1</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
              <div className="mt-1.5 sm:ml-3 sm:mt-0">
                <p className="text-gray-500">Discount</p>
                <p className="font-medium text-center">40% </p>
              </div>
            </div>
          </div>
        </div>
      </Link>

    </>

  )
}

export default FoodCard