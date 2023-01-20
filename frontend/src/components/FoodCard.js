import React from 'react'

const FoodCard = () => {
  return (
    <>
      {/* <div classNameName='w-[380px] h-[420px] relative overflow-hidden rounded-md cursor-pointer shadow-2xl group text-center'>
            <img classNameName='absolute w-full h-full rounded-md group-hover:scale-110 transition-all duration-500' alt='food pic' src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'></img>
            <p classNameName='absolute bottom-8 left-4 w-full text-3xl'>salad </p>
            <p classNameName='absolute bottom-2 left-4 w-full text-xl'>ok </p>
        </div> */}
      <a href="/sdf" className="block relative rounded-lg p-4 shadow-sm shadow-indigo-100">
        <div className='before:w-[30px] before:h-[30px] before:left-2 before:skew-y-[16deg] before:-z-40  before:bg-black before:absolute'></div>
        <div className=' absolute top-3 left-2 bg-black text-xs p-1 z-20 text-white'>BESTSELLING</div>
        <img
          alt="Home"
          src='https://i.ibb.co/x7q0LJG/6.jpg'
          className="h-56 w-full rounded-md object-cover z-10 relative"
        />

        <div className="mt-2">
          <dl>
            <div>
              <dt className="sr-only">Price</dt>

              <dd className="text-sm text-gray-500">₹500</dd>
            </div>

            <div>
              {/* <dt className="sr-only">Address</dt> */}

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
      </a>

    </>

  )
}

export default FoodCard