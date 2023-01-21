import React from 'react'
import { useSelector } from 'react-redux';
<<<<<<< HEAD
const Sidebar = () => {
  const toggle = useSelector(state => state.sidebar.sidebar);
    
    const width = toggle === true ? "w-1/5" : "w-0";
    return (
            <div className={`absolute h-screen ${width} h-4/5 top-24 left-0 z-30 transition-all duration-500 bg-slate-400`}>
                Sidebar
            </div>
=======
import { useDispatch } from 'react-redux';
import { sidebarToggle } from '../redux/sidebar/sidebarSlice';
const Sidebar = ({direction}) => {
    const isToggle = useSelector(state => state.sidebarToggle.sidebar);
    const dispatch = useDispatch();

    const toggleSidebar = isToggle === true ? "translate-x-0" : "-translate-x-full";
    // const side=direction=="ltr"?""
    const ishide = isToggle ? "" : "hidden"

    return (

        <>

            <div className={`fixed h-screen ${toggleSidebar} w-1/3 z-30 transition-all duration-500 bg-yellow-300`}>
                <div className="h-full w-full">
                    <div className="absolute left-20 top-10" >
                        <i className="fa-solid fa-xmark text-3xl cursor-pointer" onClick={() => dispatch(sidebarToggle())}></i>

                        <input
                            type="email"
                            className="border-0 mt-6 pl-5 pr-36 py-4 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 font-bold"
                            placeholder="Search for area, street name.."
                        />

                        <div className="border-0 mt-6 pl-5 pr-36 py-4 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 cursor-pointer flex items-center">
                            <i class="fa-sharp fa-solid fa-location-crosshairs text-xl"></i>
                            <p> Get current location</p>
                            <p className="text-slate-500 block">Using GPS</p>
                        </div>

                    </div>
                </div>

            </div>

            <div className={`fixed h-screen w-screen right-0  bg-slate-300 opacity-25 ${ishide} z-20`} onClick={() => dispatch(sidebarToggle())}>
      </div>

        </>
>>>>>>> 67069672a1040d66f7d4eb77d8ac808be5e4935a
    )
}

export default Sidebar