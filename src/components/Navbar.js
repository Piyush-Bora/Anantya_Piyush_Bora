import React, {useState} from "react";
import logo from "../images/pLogo.png";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'

function Navbar(props) {

  const [navOpen, setNav] = useState('false');

  const toggleNavBar = ()=> {
    if (navOpen === 'false') {
      setNav('true');
    }
    else{
      setNav('false');
    }
  }

  return (
    <div className="sticky top-0 z-[100] h-28 w-full backdrop-filter backdrop-blur-md box-border">
      <header className="max-w-full max-h-full rounded-3xl md:my-4 mt-2 bg-[#1f203b] text-white flex md:mx-5 mx-3 justify-between md:justify-center items-center opacity-70 md:opacity-70 py-5">
        {/* <!-- left elements div --> */}
        <div className="pl-2 md:absolute md:left-6 left-div logo hover:scale-105 transition duration-300">
          <Link to="/"><img className="h-14" src={logo} alt="" /></Link>
        </div>

        {/* <!-- right elements div --> */}
        <nav className="right-div">
          <button onClick={toggleNavBar} className="p-2 mr-1 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* :className="{'translate-x-full': !navOpen, 'translate-x-0': navOpen}" */}
          {/* <div className="backdrop-blur-xl"> */}
          <ul
            className={`fixed left-0 right-0 min-h-screen bg-[#1f203b] space-y-2 p-5 mt-3 font-gilroy text-lg z-50 transform translate-x-full ${navOpen === "false" ? "translate-x-full" : "translate-x-0"} duration-300 md:relative md:flex md:min-h-0 md:space-y-0 md:p-0 md:bg-opacity-0 md:opacity-100 md:mt-0 md:space-x-4 md:translate-x-0 md:mr-2`}
          >
            <Link to="/" onClick={toggleNavBar}>
              <li className="hover:bg-[#29648a] rounded-2xl px-3 py-1 my-1 text-center focus:outline-none focus:bg-[#29648a]">
                Home
              </li>
            </Link>
            <Link to="/allcourses" onClick={toggleNavBar}>
              <li className="hover:bg-[#29648a] rounded-2xl px-3 py-1 my-1 text-center focus:outline-none focus:bg-[#29648a]">
                All Courses
              </li>
            </Link>
            <Link to="/roadmaps" onClick={toggleNavBar}>
              <li className="hover:bg-[#29648a] rounded-2xl px-3 py-1 my-1 text-center focus:outline-none focus:bg-[#29648a]">
                Roadmaps
              </li>
            </Link>
            <Link to="/techNews" onClick={toggleNavBar}>
              <li className="hover:bg-[#29648a] rounded-2xl px-3 py-1 my-1 text-center focus:outline-none focus:bg-[#29648a]">
                News
              </li>
            </Link>
            <Link to="/contact" onClick={toggleNavBar}>
              <li className="border-2 border-[#29648a] rounded-2xl px-3 py-1 my-1 text-center focus:outline-none hover:bg-teal-600 duration-300">
                Developer
              </li>
            </Link>
          </ul>
          {/* </div> */}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
