import React from "react";
import logo from "../images/pLogo.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import {Fade} from "react-awesome-reveal";

function Footer() {
  const socialMedia = [
    {
      id: 101,
      name: <FaGithub className="text-2xl" />,
      link: "http://github.com/Piyush-Bora",
    },
    {
      id: 102,
      name: <FaLinkedin className="text-2xl" />,
      link: "http://linkedin.com/in/piyushbora",
    },
    {
      id: 103,
      name: <FaEnvelope className="text-2xl" />,
      link: "mailto:29piyushbora@gmail.com",
    },
    {
      id: 104,
      name: <FaPhoneAlt className="text-2xl" />,
      link: "tel:+917666066207",
    },
  ];

  return (
    <div className=" px-5 md:px-8">
      {/* <Fade direction={"up"} cascade={true}> */}
        <footer className="relative min-w-full bottom-0 left-0 text-gray-400  mt-14 border-t-2 border-dashed border-gray-400">
          <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
            <p
              href="/"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-200"
            >
              <img src={logo} alt="" className="h-8" />
              {/* <span className="mx-3 text-3xl">|</span> */}
              <span className="ml-4 text-xl border-l-2 px-4 border-gray-300">
                Made by Piyush Bora
              </span>
            </p>
            {/* <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © Piyush Bora
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Piyush-Bora
            </a>
          </p> */}
            {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="/" className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span> */}
            <div className="handles flex flex-row text-4xl items-center justify-center sm:ml-auto sm:mt-0 mt-4 sm:justify-start gap-4">
              {socialMedia?.map((icon) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.link}
                  key={icon.id}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <span>{icon.name}</span>
                </a>
              ))}
            </div>
          </div>
        </footer>
      {/* </Fade> */}
    </div>
  );
}

export default Footer;
