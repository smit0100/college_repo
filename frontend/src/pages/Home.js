import React from 'react'

import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='h-screen absolute top-0 left-0 w-[98.70vw]  z-0  '>
      <Outlet />

      </div>
    </>

  )
}

export default Home