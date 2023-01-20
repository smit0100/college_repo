import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { sidebarToggle } from '../redux/sidebar/sidebarSlice';
const Sidebar = () => {
    const toggle = useSelector(state => state.sidebar.sidebar);
  const dispatch=useDispatch();
    
    const width = toggle === true ? "w-screen" : "w-0";
    return (

        <div className={`absolute h-screen ${width} bg-black/20 z-20 transition-all duration-500 flex`}>
            <div className={`h-screen w-2/5 bg-slate-400`}>
                Sidebar
            </div>
            <div className='{`h-screen w-3/5 `}' onClick={()=>dispatch(sidebarToggle())}>

            </div>
        </div>
    )
}

export default Sidebar