import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaShoppingBag, FaUserClock, FaLink } from "react-icons/fa";
import Positions from "./Positions";
import {Fade} from "react-awesome-reveal";
import { Link, Outlet } from "react-router-dom";

function Roadmaps( {children} ) {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="w-full text-center text-4xl md:text-5xl text-white my-20 drop-shadow-xl font-poppins">
        <Fade  delay={100} duration={1000}>
          Road Maps
        </Fade>
      </span>

      <div className="px-6 py-4 flex justify-center items-center flex-wrap gap-3">
        <Link className="text-white bg-indigo-700 rounded-full p-3" to="/roadmaps/webdev">Web Development</Link>
        <Link className="text-white bg-indigo-700 rounded-full p-3" to="/roadmaps/appdev">App Development</Link>
      </div>
      <Outlet />

      <span className="w-full text-center text-4xl md:text-5xl text-white mt-24 mb-16 drop-shadow-xl font-poppins">
      <Fade  delay={100} duration={1000}>
        Positions
        </Fade>
      </span>

      {/* <div className="flex flex-wrap justify-center items-center mx-4">
      <Fade  delay={100} duration={1000}>
        {Positions.map((item) => (
          <div
            key={item.id}
            className="flex bg-white p-3 rounded-lg mx-2 my-3 md:my-0 max-w-[20rem] md:max-w-[30rem]"
          >
            <img
              src={require(`../images/${item.img}`)}
              alt=""
              className="w-24 h-24 object-contain py-2 pl-2 pr-3 border-r-2"
            />
            <div className="text flex flex-col justify-center items-start p-1">
              <h1 className="font-poppins font-semibold">
                {item.organization}
              </h1>
              <span className="text-sm">{item.title}</span>
              <span className="text-gray-600 text-xs">{item.duration}</span>
            </div>
          </div>
        ))}
        </Fade>
      </div> */}
    </div>
  );
}

export default Roadmaps;
