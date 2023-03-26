import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Fade } from "react-awesome-reveal";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import HashLoader from "react-spinners/HashLoader";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { useEffect } from "react";
import Typed from "typed.js";
import mainImg from "../images/portfoliowebimg.png";

export default function Contactme() {
  const form = useRef();

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
      strings: ["Designer", "Developer", "FreeLancer"], // Strings to display
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

  // const [alert, setAlert] = useState(null);
  // const [visible, setVisible] = useState(false);
  const phoneRegex = RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/);
  const emailRegex = RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const navigate = useNavigate();

  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    messageError: "",
  });
  const [loading, setLoading] = useState(false);
  // const [message, setmessage] = useState('');
  // const [submit, setSubmit] = useState(false);

  // const sendFormData = {
  //   service_id: "service_v4hd6t8",
  //   template_id: "template_h19fn2f",
  //   user_id: "6CO0sworPceiYB565",
  //   template_params: {
  //     'user_name': data.name,
  //     'user_email': data.email,
  //     'user_phone': data.phone,
  //     'message': data.message,
  //   },
  // };

  const sendEmail = async () => {
    // e.preventDefault();
    await emailjs
      .sendForm(
        "service_v4hd6t8",
        "template_h19fn2f",
        form.current,
        "6CO0sworPceiYB500"
      )
      .then(
        (result) => {
          console.log("received");
          navigate("/contact");
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Sorry, Something went wrong!");
        }
      );

    // await axios
    //   .post("https://api.emailjs.com/api/v1.0/email/send", sendFormData)
    //   .then((res) => {
    //     if (res.data.success) {
    //       navigate.push("/");
    //       toast.success("Message sent successfully");
    //     }
    //   })
    //   .catch((err) => {
    //     toast.error("Something went wrong");
    //   });
    // setVisible(true);
    // setAlert("Email sent successfully");
    // setTimeout(() => {
    //   setVisible(false);
    // }, 4000);
  };

  const validate = () => {
    let isValid = true;

    const { user_name, user_email, user_phone, message } = data;
    let nameError = "";
    let emailError = "";
    let phoneError = "";
    let messageError = "";

    if (user_name.trim().length === 0) {
      isValid = false;
      nameError = "*Required";
    } else if (user_name.trim().length < 2) {
      isValid = false;
      nameError = "Invalid Name";
    } else {
      nameError = "";
    }

    if (user_email.trim() === "" || !user_email) {
      isValid = false;
      emailError = "*Required";
    } else if (!emailRegex.test(user_email)) {
      isValid = false;
      emailError = "Inavalid Email Address";
    } else {
      emailError = "";
    }

    if (user_phone.trim() === "" || !user_phone) {
      isValid = false;
      phoneError = "*Required";
    } else if (!phoneRegex.test(user_phone)) {
      isValid = false;
      phoneError = "Inavalid Phone";
    } else {
      phoneError = "";
    }

    if (message.trim() === "" || !message) {
      isValid = false;
      messageError = "*Required";
    } else if (message.length < 10) {
      isValid = false;
      messageError = "Message should be at least 10 characters long";
    } else {
      messageError = "";
    }

    setErrors({
      nameError,
      emailError,
      phoneError,
      messageError,
    });

    return isValid;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    setLoading(true);
    if (isValid) {
      await sendEmail();
    }
    setLoading(false);
  };

  return loading ? (
    <div className="min-w-full min-h-full flex justify-center items-center">
      <HashLoader
        color={"#36A6D6"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : (
    <div className="w-full flex flex-col justify-center items-center font-poppins">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="main-intro md:grid md:grid-cols-2 mx-5">
        <Fade>
          <section className="img-side flex justify-center md:justify-end md:mr-12 md:h-full h-fit  ">
            <img src={mainImg} alt="" className="w-11/12 object-contain" />
          </section>
          <section className="flex flex-col justify-start md:justify-center md:items-start md:ml-4 lg:space-y-6 space-y-4 h-full md:my-5">
            <p className="text-[#0891B2] text-4xl text-center tracking-widest md:text-left md:text-5xl md:tracking-[.7rem] font-light spacing font-gilroy mt-2 md:mt-0">
              PIYUSH BORA
            </p>
            <p className="text-white text-4xl text-center md:text-left md:text-6xl font-semibold font-poppins">
              I am a <span className="text-[#0891B2]" ref={el}></span>
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

      <Fade duration={1000}>
        <div className="contact w-[22rem] md:w-[50rem] bg-[#103c55] px-6 py-5 rounded-2xl mt-8">
          <form
            className="flex flex-col space-y-4"
            ref={form}
            // onSubmit={sendEmail}
          >
            <span className="text-center text-3xl text-white filter drop-shadow-2xl mb-4 mt-3">
              Contact Me
            </span>
            {/* name */}
            <div className="name md:flex md:justify-between items-center space-y-3 md:space-y-0">
              <div className="fname w-full px-4 flex flex-col md:space-y-2">
                <label htmlFor="fname" className=" text-white">
                  First name: <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  id="fname"
                  name="user_name"
                  placeholder="John"
                  className="rounded-lg px-2 focus:outline-none focus:ring-4 focus:ring-[#6f9edc]/50 py-2"
                  onChange={handleChange}
                />
                {errors.nameError === "" ? null : (
                  <p className="text-red-500 text-xs italic mt-2">
                    {errors.nameError}
                  </p>
                )}
              </div>
              <div className="lname w-full px-4 flex flex-col  md:space-y-2">
                <label htmlFor="lname" className=" text-white">
                  Last name: <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Doe"
                  className="rounded-lg px-2 focus:outline-none focus:ring-4 focus:ring-[#6f9edc]/50 py-2"
                />
              </div>
            </div>
            {/* name end */}

            {/* Email n Phone */}
            <div className="name md:flex md:justify-between items-center space-y-3 md:space-y-0">
              <div className="email w-full px-4 flex flex-col  md:space-y-2">
                <label htmlFor="email" className=" text-white">
                  Email Id: <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  id="emailId"
                  name="user_email"
                  placeholder="example@email.com"
                  onChange={handleChange}
                  className="rounded-lg px-2 focus:outline-none focus:ring-4 focus:ring-[#6f9edc]/50 py-2"
                />
                {errors.emailError === "" ? null : (
                  <p className="text-red-500 text-xs italic mt-2">
                    {errors.emailError}
                  </p>
                )}
              </div>
              <div className="phone w-full px-4 flex flex-col  md:space-y-2">
                <label htmlFor="phone" className=" text-white">
                  Mobile Number:
                </label>
                <input
                  required
                  type="phone"
                  id="phone"
                  name="user_phone"
                  placeholder="9999999999"
                  onChange={handleChange}
                  className="rounded-lg px-2 focus:outline-none focus:ring-4 focus:ring-[#6f9edc]/50 py-2"
                />
                {errors.phoneError === "" ? null : (
                  <p className="text-red-500 text-xs italic mt-2">
                    {errors.phoneError}
                  </p>
                )}
              </div>
            </div>
            {/* Email n Phone end */}

            {/* messge  */}
            <div className="message md:flex md:justify-between items-center space-y-3 md:space-y-0 ms: mt-2">
              <div className="message w-full px-4 flex flex-col md:space-y-2">
                <label htmlFor="message" className=" text-white">
                  Message: <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  type="text"
                  id="message_for_me"
                  name="message"
                  placeholder="Enter your message here"
                  onChange={handleChange}
                  className="rounded-lg px-2 focus:outline-none focus:ring-4 focus:ring-[#6f9edc]/50 h-36 resize-none py-2"
                />
                {errors.messageError === "" ? null : (
                  <p className="text-red-500 text-xs italic mt-2">
                    {errors.messageError}
                  </p>
                )}
              </div>
            </div>

            <div className="submit w-full flex justify-center items-center px-4">
              <button
                id="subbtn"
                type="submit"
                // value="Send"
                className="bg-[#69c1f4] px-10 py-2 focus:outline-none hover:bg-[#096da6] rounded-lg text-2xl font-semibold drop-shadow-lg disabled:opacity-75"
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Fade>
    </div>
  );
}
