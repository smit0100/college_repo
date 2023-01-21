import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 67069672a1040d66f7d4eb77d8ac808be5e4935a

// import Navbar from "components/Navbars/AuthNavbar.js";
// import Footer from "components/Footers/Footer.js";

export default function RestaurantPage() {
  return (
    <>
<<<<<<< HEAD
     

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
          <p className="text-sm">₹150</p>
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
=======
      {/* <Navbar transparent /> */}
      {/* <main className="profile-page bg-black ">
        <section className="relative block h-500-px">
          <div
            className=""
          
          >
            <img alt="background" className="absolute top-0 w-screen h-1/2" src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80" />
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        // src={require("assets/img/team-2-800x800.jpg").default}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Friends
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Photos
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    Jenna Stones
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    Los Angeles, California
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    University of Computer Science
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-lightBlue-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main> */}
      <div className="relative w-screen h-5/6">
        <img alt="bg" className="absolute w-full object-cover h-full first-letter blur-sm" src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80"/>
      </div>
      <div className="w-5/6 mx-auto  bg-white shadow-xl h-screen relative -top-56 rounded-md ">
        <div className="absolute h-full w-full rounded-full flex justify-center overflow-hidden  md:-top-28 -top-20 left-">
         
          <img src="./svg/pagenotfound.svg" alt="background" className="md:w-56 md:h-56 w-40 h-40 bg-black rounded-full"/>
          
        </div>
        <div className="flex md:gap-20 md:top-10 relative md:left-32 ">
          <div className="text-center">
          <div className="font-bold  text-xl">344343</div>

            <div className="text-base ">product</div>
          </div>
          <div className="text-center">
          <div className="font-bold  text-xl">4.5</div>

            <div className="text-base ">rating</div>
          </div>
        </div>

        <div className="flex flex-col  absolute right-32 top-10">
          <div className="font-bold text-2xl">Store name</div>
          <div>address</div>
          
        </div>
        <hr  className="top-1/4 relative"/>
        <div className="top-1/4 relative">
          <div>
            category
          </div>
          <div>
            product
          </div>
          <div>
            cart
          </div>
        </div>
      </div>
    
      {/* <Footer /> */}
    </>
  );
>>>>>>> 67069672a1040d66f7d4eb77d8ac808be5e4935a
}