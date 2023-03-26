import React from "react";
import prog from "../images/progvector.svg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Cards from "./Cards";
import Courses from "./Courses";
import Skills from "./Skills";
import Slider from "react-slick";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Settings } from "./Settings";
import { Fade } from "react-awesome-reveal";

function Home() {
  const socialMediaLinks = [
    {
      id: 1,
      name: <FaGithub className="text-3xl" />,
      link: "http://github.com/Piyush-Bora",
    },
    {
      id: 2,
      name: <FaLinkedin className="text-3xl" />,
      link: "http://linkedin.com/in/piyushbora",
    },
    {
      id: 3,
      name: <FaEnvelope className="text-3xl" />,
      link: "mailto:29piyushbora@gmail.com",
    },
    {
      id: 4,
      name: <FaPhoneAlt className="text-3xl" />,
      link: "tel:+917666066207",
    },
  ];

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Coding", "Development", "Designing"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      showCursor: true,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-w-screen flex-1">
      {/* main img and intro text */}
      <div className="main-intro md:grid md:grid-cols-2 mx-5 mt-7">
        <Fade>
          <section className="img-side flex justify-center md:justify-end md:mr-12 md:h-full h-fit  ">
            <img src={prog} alt="" className="w-11/12 object-contain" />
          </section>
          <section className="flex flex-col justify-start md:justify-center md:items-start md:ml-4 lg:space-y-6 space-y-4 h-full md:my-5">
            <p className="text-[#0891B2] text-4xl text-center tracking-widest md:text-left md:text-5xl md:tracking-[.7rem] font-light spacing font-gilroy mt-2 md:mt-0">
              Hola Coder!
            </p>
            <p className="text-white text-4xl text-center md:text-left md:text-6xl font-semibold font-poppins">
              Learn <span className="text-[#0891B2]" ref={el}></span>
            </p>
            {/* <p className="typed text-gray-600 text-3xl text-center md:text-left md:text-4xl font-semibold font-poppins">Web Developer</p> */}
            <button className="text-white text-xl mx-auto md:mx-0 py-3 px-4 font-poppins font-semibold bg-[#0891B2] rounded-full w-fit">
              Contact Me
            </button>
            <div className="handles flex flex-row text-4xl items-center justify-center gap-5">
              {socialMediaLinks?.map((icon) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.link}
                  key={icon.id}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <span>{icon.name}</span>
                  {/* <ion-icon name={icon.name}></ion-icon> */}
                </a>
              ))}
            </div>
          </section>
        </Fade>
      </div>

      {/* Projects  */}
      <div className="min-w-full flex justify-center items-center py-8 mt-20">
        <span className="text-center text-white text-4xl font-semibold tracking-wide">
          <Fade delay={100} duration={1000}>
            Recommended Courses
          </Fade>
        </span>
      </div>
      {/* className="box-border min-w-full flex flex-wrap justify-center items-center md:px-32" */}
      <Fade fraction={0.3} duration={1000}>
        <div className="slides-container mx-9 md:mx-20">
          <Slider {...Settings}>
            {Courses?.filter((item, index) => index < 3).map((newItem) => (
              <Cards
                key={newItem.id}
                title={newItem.title}
                desc={newItem.description}
                imgUrl={newItem.im}
                link={newItem.link}
              />
            ))}
          </Slider>
        </div>
      </Fade>

      {/* Skills  */}
      <div className="min-w-full flex justify-center items-center py-8 mt-8 md:mt-16">
        <Fade delay={500} duration={1000}>
          <span className="text-center text-white text-4xl font-semibold tracking-wide">
            Emerging Technologies
          </span>
        </Fade>
      </div>

      {/* Language */}
      <div className="min-w-full flex justify-center items-center md:pt-5 pb-8">
        <Fade delay={500} duration={1000}>
          <span className="text-center text-[#0891B2] text-3xl">Languages & Frameworks</span>
        </Fade>
      </div>
      <Fade delay={500} duration={1000}>
        <div className="box-border min-w-full flex flex-wrap justify-center items-center px-1 md:px-30">
          {Skills?.filter((item) => item.category === "Language").map(
            (item) => (
              <div className="w-[8rem] md:w-[9rem] wrapper flex flex-col bg-white rounded-xl md:mx-4 mx-2 my-2 p-3 justify-center items-center hover:scale-105 duration-150">
                <img
                  src={
                    item.img
                      ? item.img
                      : "https://media.slidesgo.com/storage/6724973/conversions/31-graphic-design-project-proposal-thumb.jpg"
                  }
                  alt="logo"
                  className="w-14 h-16 mb-2 object-contain"
                />
                <span className="text-center font-poppins font-semibold">
                  {item.name}
                </span>
              </div>
            )
          )}
        </div>
      </Fade>

      {/* Tools */}
      <div className="min-w-full flex justify-center items-center py-8">
        <Fade delay={500} duration={1000}>
          <span className="text-center text-[#0891B2] text-3xl mt-4">
            Tools
          </span>
        </Fade>
      </div>
      <Fade delay={500} duration={1000}>
        <div className="box-border min-w-full flex flex-wrap justify-center items-center px-1 md:px-30">
          {Skills?.filter((item) => item.category === "Tools").map((item) => (
            <div className="w-[8rem] md:w-[9rem] wrapper flex flex-col bg-white rounded-xl md:mx-4 mx-2 my-2 p-3 justify-center items-center hover:scale-105 duration-150">
              <img
                src={
                  item.img
                    ? item.img
                    : "https://media.slidesgo.com/storage/6724973/conversions/31-graphic-design-project-proposal-thumb.jpg"
                }
                alt="logo"
                className="w-14 h-16 mb-2 object-contain"
              />
              <span className="text-center font-poppins font-semibold">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}

export default Home;
