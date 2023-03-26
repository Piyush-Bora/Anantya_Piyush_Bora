import React from "react";
import { FaGithub, FaGlobe, FaLink } from "react-icons/fa";

function Cards(props) {
  return (
    <div className="cards max-w-[25rem] m-3 min-h-[25rem] rounded-lg flex flex-col hover:scale-105 transform duration-200 shadow-xl md:m-0 md:mx-3 md:my-3 md:w-[28rem]">
      <div className="img focus:outline-none">
        <img
          src={
            props.imgUrl
              ? props.imgUrl
              : "https://media.slidesgo.com/storage/6724973/conversions/31-graphic-design-project-proposal-thumb.jpg"
          }
          alt="Portfolio bg img"
          className="rounded-t-lg object-cover h-64 min-w-full focus:outline-none"
        />
      </div>
      <div className="text-part bg-white flex flex-col justify-between rounded-b-lg focus:outline-none">
        <span className="px-2 py-5 font-poppins font-semibold text-xl text-center">
          {props.title}
        </span>
        <div className="bg-gray-300 h-[2px] mx-5 rounded-full"></div>
        <p className="p-5 font-poppins md:text-sm text-justify flex-1">
          {props.desc}
        </p>
        {/* <a rel="noreferrer" href="/" className="m-3"> */}
        <div className="h-[2px] bg-gray-300 mx-5 rounded-full"></div>
        <div className="text-white rounded-lg p-2 md:p-4 min-w-full flex justify-center items-center space-x-2 md:space-x-9">
          <a href={props.link} className="text-slate-800 text-4xl">
            <FaLink />
          </a>
        </div>
        {/* </a> */}
      </div>
    </div>
  );
}

export default Cards;
