import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from './Sidebar';
import { useDispatch } from 'react-redux';
import { sidebarToggle } from '../redux/sidebar/sidebarSlice';
const Navbar = () => {
  const dispatch=useDispatch();
    return (
    <>
      <nav className="bg-white border-gray-200  py-2.5 rounded dark:bg-gray-900 z-10 absolute w-[98.50vw] bg-inherit ">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <Link href="/home" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Zometo</span>
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li>
                <button className="block py-2 pl-3 pr-4 text-white text-lg" onClick={() => dispatch(sidebarToggle())}>click</button>
              </li>
              <li>
                <Link to='/' className="block py-2 pl-3 pr-4 text-white text-lg">Home</Link>
              </li>
              <li>
                <Link to="/search" className="block py-2 pl-3 pr-4  rounded text-white text-lg">Search</Link>
              </li><li>
                <Link to="/help" className="block py-2 pl-3 pr-4  rounded text-white text-lg">Help</Link>
              </li>
              <li>
                <Link to="/login" className="block py-2 pl-3 pr-4  rounded text-white text-lg">Login</Link>
              </li>
              <li>
              {/* <img
                      alt="..."
                      className="w-6 h-6 text-white bg-orange-500"
                      src='./svg/bag.svg'

              /> */}
                <Link to="/contect" className="block py-2 pl-3 pr-4 rounded text-white text-lg">cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Sidebar/>
      <Outlet />
    </>


  )
}

export default Navbar