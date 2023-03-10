import React from "react";
import { Link } from "react-router-dom";

// import Navbar from "components/Navbars/AuthNavbar.js";
// import Footer from "components/Footers/Footer.js";

export default function RestaurantPage() {
  return (
    <>
     

      <div className="relative w-full h-5/6">
        <img alt="bg" className="w-full object-cover h-[40vh] md:h-[60vh] first-letter blur-sm" src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80" />
      </div>

      <div className="w-5/6 mx-auto  bg-white shadow-xl h-screen relative -top-36 rounded-md ">
        {/* rounded_image */}
        <div className="absolute h-full w-full rounded-full flex justify-center overflow-hidden  md:-top-28 -top-20 left-">
          <img src="./svg/pagenotfound.svg" alt="background" className="md:w-56 md:h-56 w-40 h-40 bg-black rounded-full anim" />
        </div>
        {/* restroName & rating  */}
        <div className="row">
          <div className="restroColumn space-x-56 sm:space-x-6 md:space-x-10 lg:left-28 relative left-6 top-4 md:top-7 anim">
            <div className="text-center">
              <div className="font-bold  text-xl">344343</div>
              <div className="text-base ">product</div>
            </div>
            <div className="text-center">
              <div className="font-bold  text-xl">4.5</div>
              <div className="text-base ">rating</div>
            </div>
          </div>
          <div className="restroColumn justify-center relative sm:left-10 top-4 md:top-7 anim">
            <div className="text-center">
              <div className="font-bold text-2xl">Store name</div>
              <div>address</div>
            </div>
          </div>
        </div>

        <hr className="top-[200px] relative" />

        <div className="row mt-56">
          <div className="p-3 w-full bg-red-300 sm:w-5/12">
            <ul className="text-right px-8">
              <li>category-1</li>
              <li>category-1</li>
              <li>category-1</li>
              <li>category-1</li>
              <li>category-1</li>
            </ul>
          </div>
          <div className="sm:p-3 w-full bg-red-50 sm:w-7/12 space-y-7 pt-10">
            <RestroCategoryCard />
            <RestroCategoryCard />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export const RestroCategoryCard = () => {
  return (
    <>
      <div className="flex flex-wrap-reverse justify-between anim py-3">
        <div className="sm:pt-5 lg:pt-0">
          <img alt="github" className="w-5 mr-1" src="./svg/github.svg" />
          <p className="font-bold capitalize">Double cheese schezewan Burger </p>
          <p className="text-sm">???150</p>
        </div>
        <div className="relative ">
          <img className="h-36 w-36 rounded-md object-cover" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="food" />
          <Link
            class="inline-block absolute left-7 bg-white hover:text-white hover:bg-green-600 -bottom-4 font-bold  rounded border border-current px-8 py-[6px] text-xs uppercase  text-green-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-green-500"
            to="cart"
          >
            Add
          </Link>
        </div>
      </div>
    </>
  )
}