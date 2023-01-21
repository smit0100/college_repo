import React from 'react'
import { useSelector } from 'react-redux';
const Sidebar = () => {
  const toggle = useSelector(state => state.sidebar.sidebar);
    
    const width = toggle === true ? "w-1/5" : "w-0";
    return (
            <div className={`absolute h-screen ${width} h-4/5 top-24 left-0 z-30 transition-all duration-500 bg-slate-400`}>
                Sidebar
            </div>
    )
}

export default Sidebar