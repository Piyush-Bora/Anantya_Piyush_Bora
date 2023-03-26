import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Loader from "../components/loader";

export default function Contact() {
  const emailRegex = RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const phoneRegex = RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/);
  const history = useHistory();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    messageError: "",
  });

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    await axios
      .post("https://xenia-mailer.herokuapp.com/api/contact-us", userData)
      .then((res) => {
        if (res.data.success) {
          history.push("/");
          toast.success("Message sent successfully");
        }
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  };

  const validate = () => {
    let isValid = true;

    const { name, email, phone, message } = userData;
    let nameError = "";
    let emailError = "";
    let phoneError = "";
    let messageError = "";

    if (name.trim() === "" || !name) {
      nameError = "* Required";
      isValid = false;
    } else if (name.length < 2) {
      nameError = "Name must be at least 2 characters";
      isValid = false;
    } else {
      nameError = "";
    }

    if (email.trim() === "" || !email) {
      emailError = "* Required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      emailError = "Invalid Email";
      isValid = false;
    } else {
      emailError = "";
    }

    if (phone.trim() === "" || !phone) {
      phoneError = "* Required";
      isValid = false;
    } else if (!phoneRegex.test(phone)) {
      phoneError = "Invalid Mobile Number";
      isValid = false;
    } else {
      phoneError = "";
    }

    if (message.trim() === "" || !message) {
      messageError = "* Required";
      isValid = false;
    } else if (message.length < 10) {
      messageError = "Message must be at least 10 characters";
      isValid = false;
    } else {
      messageError = "";
    }

    setError({
      nameError,
      emailError,
      phoneError,
      messageError,
    });

    return isValid;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const isValid = validate();
    if (isValid) {
      await sendMessage();
    }
    setLoading(false);
  };

  return loading ? (
    <Loader></Loader>
  ) : (
    <div className=" overflow-hidden bg-gray-800 rounded-lg shadow-md items-center w-auto xl:w-5/6 mx-auto py-6 my-8">
      <Fade up cascade>
        <div className="w-5/6 mx-auto">
          <div>
            <h1 className="heading-main">Let's Talk</h1>
          </div>
          <h1 className="text-center mt-4 font-secondary font-medium text-lg text-gray-400">
            While I am good with smoke signals, there are simpler ways to get in
            touch and answer your queries.
          </h1>
          <div className="mt-8 space-y-4 lg:flex lg:space-x-8 lg:space-y-0">
            <div className="mx-auto flex-grow transition duration-500 ease-in-out transform hover:scale-105">
              <a href="mailto:yashpande2002@gmail.com" rel="noreferrer">
                <svg
                  className="w-16 h-16 lg:w-10 lg:h-10 mx-auto fill-current text-blue-500 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path d="M 26 3 A 1 1 0 0 0 25.716797 3.0429688 A 1 1 0 0 0 25.636719 3.0683594 L 3.6503906 10.060547 L 3.6503906 10.064453 A 1 1 0 0 0 3 11 A 1 1 0 0 0 3.4824219 11.853516 L 10.164062 17.154297 L 23.373047 6.6269531 L 12.845703 19.835938 L 18.142578 26.513672 A 1 1 0 0 0 19 27 A 1 1 0 0 0 19.935547 26.349609 L 19.939453 26.349609 L 26.9375 4.34375 A 1 1 0 0 0 26.957031 4.2832031 A 1 1 0 0 0 27 4 A 1 1 0 0 0 26 3 z"></path>
                </svg>
                <p className="text-center text-gray-300 font-primary font-bold text-xl">
                  Mail Me:
                </p>
                <p className="text-center text-gray-400 font-secondary font-medium text-lg">
                  yashpande2002@gmail.com
                </p>
              </a>
            </div>

            <div className="mx-auto flex-grow transition duration-500 ease-in-out transform hover:scale-105">
              <a href="tel:+91 9579345348" rel="noreferrer">
                <svg
                  className="w-16 h-16 lg:w-10 lg:h-10 mx-auto fill-current text-blue-500 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path d="M21.225,17.889c-0.406-0.238-0.905-0.233-1.309,0.007l-2.046,1.219c-0.458,0.273-1.03,0.241-1.45-0.087 c-0.726-0.567-1.895-1.521-2.912-2.538c-1.017-1.017-1.971-2.186-2.538-2.912c-0.328-0.42-0.36-0.992-0.087-1.45l1.219-2.046 c0.241-0.404,0.243-0.907,0.005-1.313L9.105,3.641c-0.291-0.496-0.869-0.74-1.428-0.603C7.134,3.17,6.429,3.492,5.69,4.232 c-2.314,2.314-3.543,6.217,5.159,14.919s12.604,7.474,14.919,5.159c0.741-0.741,1.062-1.447,1.195-1.991 c0.135-0.558-0.105-1.132-0.6-1.422C25.127,20.174,22.461,18.613,21.225,17.889z"></path>
                </svg>
                <p className="text-center text-gray-300 font-primary font-bold text-xl">
                  Phone Me:
                </p>
                <p className="text-center text-gray-400 font-secondary font-medium text-lg">
                  +91 9579345348
                </p>
              </a>
            </div>

            <div className="mx-auto flex-grow transition duration-500 ease-in-out transform hover:scale-105">
              <a
                href="https://goo.gl/maps/EjQMJLoY4HJrxZMu9"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-16 h-16 lg:w-10 lg:h-10 mx-auto fill-current text-blue-500 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M 12 1 C 8.686 1 6 3.686 6 7 C 6 11.286 12 18 12 18 C 12 18 18 11.286 18 7 C 18 3.686 15.314 1 12 1 z M 12 4.8574219 C 13.184 4.8574219 14.142578 5.816 14.142578 7 C 14.142578 8.183 13.183 9.1425781 12 9.1425781 C 10.817 9.1425781 9.8574219 8.184 9.8574219 7 C 9.8574219 5.816 10.816 4.8574219 12 4.8574219 z"></path>
                </svg>
                <p className="text-center text-gray-300 font-primary font-bold text-xl">
                  Meet Me:
                </p>
                <p className="text-center text-gray-400 font-secondary font-medium text-lg">
                  Pune, Maharashtra
                </p>
              </a>
            </div>
          </div>
          <div className="mt-8">
            <form autoComplete="on" method="post">
              <div className="lg:flex lg:space-x-8">
                <div className="w-full lg:w-1/2 flex flex-col">
                  <label className="text-gray-400 font-secondary font-medium mb-2 text-lg">
                    Name
                  </label>
                  <input
                    className={
                      error.nameError === ""
                        ? "appearance-none block bg-gray-700 text-white font-primary rounded-md py-4 px-4 leading-tight focus:outline-none focus:bg-gray-600"
                        : "appearance-none block bg-gray-700 text-white font-primary rounded-md py-4 px-4 leading-tight focus:outline-none focus:bg-gray-600 border-2 border-red-500"
                    }
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Mary Jane"
                    onChange={handleChange}
                  />
                  {error.nameError === "" ? null : (
                    <p className="text-red-500 text-xs italic mt-2">
                      {error.nameError}
                    </p>
                  )}
                  <label className="text-gray-400 font-secondary font-medium mb-2 text-lg mt-5">
                    Email
                  </label>
                  <input
                    className={
                      error.emailError === ""
                        ? "appearance-none block bg-gray-700 text-white font-primary rounded-md py-4 px-4 leading-tight focus:outline-none focus:bg-gray-600"
                        : "appearance-none block bg-gray-700 text-white font-primary rounded-md py-4 px-4 leading-tight focus:outline-none focus:bg-gray-600 border-2 border-red-500"
                    }
                    id="email"
                    name="email"
                    type="text"
                    placeholder="maryjane@gmail.com"
                    onChange={handleChange}
                  />
                  {error.emailError === "" ? null : (
                    <p className="text-red-500 text-xs italic mt-2">
                      {error.emailError}
                    </p>
                  )}
                  <label className="text-gray-400 font-secondary font-medium mb-2 text-lg mt-5">
                    Mobile Number
                  </label>
                  <input
                    className={
                      error.phoneError === ""
                        ? "appearance-none block bg-gray-700 text-white font-primary rounded-md py-4 px-4 leading-tight focus:outline-none focus:bg-gray-600"
                        : "appearance-none block bg-gray-700 text-white font-primary rounded-md py-4 px-4 leading-tight focus:outline-none focus:bg-gray-600 border-2 border-red-500"
                    }
                    id="phone"
                    name="phone"
                    type="phone"
                    placeholder="9799108189"
                    onChange={handleChange}
                  />
                  {error.phoneError === "" ? null : (
                    <p className="text-red-500 text-xs italic mt-2">
                      {error.phoneError}
                    </p>
                  )}
                </div>
                <div className="mt-5 lg:mt-0 w-full lg:w-1/2 flex flex-col">
                  <label className="text-gray-400 font-secondary font-medium mb-2 text-lg">
                    Message
                  </label>
                  <textarea
                    rows="8"
                    className={
                      error.messageError === ""
                        ? "appearance-none block h-full bg-gray-700 text-white font-primary rounded-md py-4 px-4 leading-tight resize-none focus:outline-none focus:bg-gray-600"
                        : "appearance-none block h-full bg-gray-700 text-white font-primary rounded-md py-4 px-4 leading-tight resize-none focus:outline-none focus:bg-gray-600 border-2 border-red-500"
                    }
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Hey there, I am interested in your services. Can we schedule a call?"
                    onChange={handleChange}
                  />
                  {error.messageError === "" ? null : (
                    <p className="text-red-500 text-xs italic mt-2">
                      {error.messageError}
                    </p>
                  )}
                </div>
              </div>
              <button
                className="w-full my-2 bg-blue-500 hover:bg-blue-700 text-white font-medium text-center transition duration-500 ease-in-out py-3 px-4 rounded font-primary text-lg mt-8"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </Fade>
    </div>
  );
}
