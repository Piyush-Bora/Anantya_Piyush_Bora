import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaShoppingBag, FaUserClock, FaLink } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const WebDev = () => {
  return (
    <div className="w-full">
      <VerticalTimeline>
        {/* <Fade delay={100} duration={1000}> */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work drop-shadow-xl"
            //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Dec 2021 - Feb 2022"
            dateClassName="text-white drop-shadow-xl"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
            icon={<FaShoppingBag />}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-poppins font-bold flex justify-between">
              HTML{" "}
            </h3>
            <h4 className="vertical-timeline-element-subtitle py-2">
              Hyper Text MarkUp Language.
            </h4>
            <div className="flex flex-wrap mt-3 text-sm font-poppins">
              <a
                href="https://www.youtube.com/@CodeWithHarry"
                className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1"
              >
                CodeWithHarry
              </a>
              <a
                href="https://www.youtube.com/@CodeWithHarry"
                className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1"
              >
                FreeCodeCamp
              </a>
              <a
                href="https://www.youtube.com/@CodeWithHarry"
                className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1"
              >
                LoveBabbar
              </a>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work drop-shadow-xl"
            //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Dec 2021 - Feb 2022"
            dateClassName="text-white drop-shadow-xl"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
            icon={<FaShoppingBag />}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-poppins font-bold flex justify-between">
              HTML{" "}
            </h3>
            <h4 className="vertical-timeline-element-subtitle py-2">
              Hyper Text MarkUp Language.
            </h4>
            <div className="flex flex-wrap mt-3 text-sm font-poppins">
              <a
                href="https://www.youtube.com/@CodeWithHarry"
                className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1"
              >
                CodeWithHarry
              </a>
              <a
                href="https://www.youtube.com/@CodeWithHarry"
                className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1"
              >
                FreeCodeCamp
              </a>
              <a
                href="https://www.youtube.com/@CodeWithHarry"
                className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1"
              >
                LoveBabbar
              </a>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
            icon={<FaUserClock />}
          />
          {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaShoppingBag />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement> */}
        {/* </Fade> */}
      </VerticalTimeline>
    </div>
  );
};

export default WebDev;
