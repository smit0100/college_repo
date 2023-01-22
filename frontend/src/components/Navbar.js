
import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarToggle } from '../redux/sidebar/sidebarSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const toggle = useSelector(state => state.sidebar.sidebar);
  const ishide = toggle ? "" : "hidden"

  return (
    <>
      <nav className=" border-gray-200  py-2.5  dark:bg-gray-900 z-10 relative w-[96.50vw] sm:w-[98.5vw] bg-black ">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Zometo</span>
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li>
                <button className=" py-2 pl-3 pr-4 text-white text-lg  " onClick={() => dispatch(sidebarToggle())}>
                  <i className="fa-solid fa-location-dot pr-3"></i>
                  Location</button>
              </li>
              <li>
                <Link to="/search" className="block py-2 pl-3 pr-4  rounded text-white text-lg">
                  <i className="fa-solid fa-magnifying-glass pr-3"></i>
                  Search
                </Link>
              </li><li>
                <Link to="/help" className="block py-2 pl-3 pr-4  rounded text-white text-lg">
                  <i className="fa-sharp fa-solid fa-circle-info pr-3"></i>
                  Help
                </Link>
              </li>
              <li>
                <Link to="/login" className="block py-2 pl-3 pr-4  rounded text-white text-lg">
                  <i className="fa-regular fa-user pr-3"></i>
                  Login
                </Link>

              </li>
              <li>
                <Link to="/cart" className="block py-2 pl-3 pr-4 rounded text-white text-lg">
                  <i className="fa-sharp fa-solid fa-bag-shopping pr-3"></i>cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* bg image  */}

      <Sidebar />
      <div className={`h-screen w-screen right-0  bg-black/20 ${ishide} z-20 absolute `} onClick={() => dispatch(sidebarToggle())}>
      </div>
    </>


  )
}

export default Navbar