import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidHide } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";

const Login = ({ isLogged, setIsLogged }) => {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (localStorage.getItem("customer")) {
      navigate("/");
    }
  }, [navigate]);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, password } = formDetails;
      try {
        const { data } = await axios.post(loginRoute, { email, password });

        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        } else if (data.status === true) {
          localStorage.setItem("customer", JSON.stringify(data.user.email));
          setIsLogged(true);
          navigate("/");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleValidation = () => {
    const { email, password } = formDetails;
    if (password.length < 8) {
      toast.error(
        "Password should be greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email.trim() === "") {
      toast.error("Email is required", toastOptions);
      return false;
    }
    return true;
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    theme: "dark",
    pauseOnHover: true,
    draggable: true,
  };

  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-center bg-black text-white ">
        <form
          onSubmit={handleSubmit}
          className="main bg-black text-white  form-login"
        >
          <div className="font-bold text-3xl pb-6 text-white">
            Login to your account
          </div>
          <label
            htmlFor="email"
            className="pb-2 text-lg"
            style={{ color: "white" }}
          >
            E-mail ID
          </label>
          <input
            className="bg-[#1f201f] border-0 border-white pl-3"
            name="email"
            id="email"
            type="email"
            placeholder="Enter ID"
            value={formDetails.email}
            onChange={changeHandler}
          />
          <span>
            <Link to="/forgot-password" className="text-sm text-red-500">
              Forgot Login ID?
            </Link>
          </span>
          <br />
          <label
            htmlFor="password"
            style={{ color: "white" }}
            className="pb-2 text-lg form-class"
          >
            Password
          </label>~
          <input
            className="bg-[#1f201f] border-0 border-white pl-3"
            preventDefault
            name="password"
            id="password"
            type="password"
            placeholder="Enter Password"
            value={formDetails.password}
            onChange={changeHandler}
          />
          <BiSolidHide className="text-red-500 size-6 relative bottom-8 btnn" />
          <span>
            <Link to="/forgot-password" className="text-sm text-red-500">
              Forgot Password?
            </Link>
          </span>
          <br />
          <button className="signin loginbtnn">Log In</button>
          <span className="firsttime pt-1">
            <Link to="/Signup" className="">
              First time user? REGISTER HERE
            </Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
