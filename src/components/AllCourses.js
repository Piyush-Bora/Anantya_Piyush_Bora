import React from "react";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import Courses from "./Courses";
import Cards from "./Cards";

function AllCourses() {
  return (
    <div className="flex flex-col justify-center items-center min-w-full leading-loose text-center space-y-4 py-8 flex-1 px-4">
      <span className="text-5xl md:text-6xl text-[#0891B2] font-poppins font-bold mb-3 filter drop-shadow-md">
        <Fade delay={100} duration={200}>
          All Courses
        </Fade>
      </span>

      <div className="w-full flex justify-center items-start gap-x-2 gap-y-2 flex-wrap">
        {Courses?.map((newItem) => (
          <Cards
            key={newItem.id}
            title={newItem.title}
            desc={newItem.description}
            imgUrl={newItem.im}
            link={newItem.link}
          />
        ))}
      </div>

      {/* <Fade
        duration={200}
        fraction={0.2}
        className="w-full min-h-[35rem] md:min-h-[50rem] pt-20"
      >
        <div className="resume-container flex flex-col mx-auto md:w-2/3 h-full pt-2 font-poppins">
          <div className="w-full bg-[#132d49] flex justify-between items-center rounded-t-lg py-4 px-3 md:px-5">
            <span className="text-white text-lg md:text-xl mr-2">
              Piyush Bora Resume
            </span>
            <a
              href="https://drive.google.com/file/d/1s5R0oiUZ8JLBHsLrHChoFfzJYed2SqCz&export=download"
              download
            >
              <div className="flex justify-center items-center space-x-2 bg-[#7bcce0] py-2 px-4 rounded-lg">
                <BsFillCloudDownloadFill className="w-6 h-6 " />
                <span className="text-slate-800 font-semibold">Download</span>
              </div>
            </a>
          </div>
          <iframe
            title="myResume"
            src="https://drive.google.com/file/d/1s5R0oiUZ8JLBHsLrHChoFfzJYed2SqCz/preview"
            // frameBorder="0"
            className="h-full w-full"
          ></iframe>
        </div>
      </Fade> */}
    </div>
  );
}

export default AllCourses;
