import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidHide } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from '../utils/APIRoutes';

const Signup = ({ isLogged, setIsLogged }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("customer")) {
      //if already logged in
      navigate('/');
    }
  }, []);

  const [formDetails, setFormDetails] = useState({
    email: "",
    phone: "",
    createPassword: "",
    confirmPassword: "",
    name: ""
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, phone, createPassword, name } = formDetails;
      const { data } = await axios.post(registerRoute, { email, phone, createPassword, name,});

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }

      if (data.status === true) {
        localStorage.setItem('customer', JSON.stringify(data.user.email));
        setIsLogged(true);
        navigate("/");
      }
    }
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    theme: "dark",
    pauseOnHover: true,
    draggable: true
  };

  const handleValidation = () => {
    const { email, phone, createPassword, confirmPassword, name } = formDetails;
    if (createPassword.length < 8) {
      toast.error("Password should be greater than 8 characters.", toastOptions);
      return false;
    } else if (createPassword !== confirmPassword) {
      toast.error("password and confirm password should be same.", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email is required", toastOptions);
      return false;
    }

    return true;
  };

  return (
    <div className=" whole-form-page  w-full bg-black text-white ">
      {/* <div className="flex py-10 w-full justify-center bg-black text-white">
        <form onSubmit={handleSubmit} className=" bg-black text-white main "> */}
        <div className="flex py-10 w-full justify-center bg-black text-white">
  <form onSubmit={handleSubmit} className="bg-black text-white main" style={{ width: 'calc(34% + 20px)' }}>

          <div className="font-bold text-3xl pb-6">Sign Up for your account</div>
          <label style={{ color: 'white' }} htmlFor="name" className="pb-2 text-lg">Name</label>
          <input
          
            name="name"
            id="name"
            type="text"
            placeholder="Enter Name"
            value={formDetails.name}
            onChange={changeHandler}
            className="bg-[#1f201f] "
            />
          <br></br>

          <label style={{ color: 'white' }} htmlFor="email" className="pb-2 text-lg">Email ID</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter Email"
            value={formDetails.email}
            onChange={changeHandler}
            className="bg-[#1f201f] "

          />
          <br />
          <label style={{ color: 'white' }} htmlFor="phone" className="pb-2 text-lg">Phone</label>
          <input
            name="phone"
            id="phone"
            type="tel"
            placeholder="Enter Phone Number"
            value={formDetails.phone}
            onChange={changeHandler}
            className="bg-[#1f201f] "

          />
          <br />

          <label style={{ color: 'white' }} htmlFor="createPassword" className="pb-2 text-lg">Create Password</label>
          <input
            name="createPassword"
            id="createPassword"
            type="password"
            placeholder="Create Password"
            value={formDetails.createPassword}
            onChange={changeHandler}
            className="bg-[#1f201f] "

          />
          <BiSolidHide className="text-red-500 size-6 relative bottom-8 btnn" />
          <label style={{ color: 'white' }} htmlFor="confirmPassword" className="pb-2 text-lg">Confirm Password</label>
          <input
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formDetails.confirmPassword}
            onChange={changeHandler}
            className="bg-[#1f201f] "

          />
          <BiSolidHide className="text-red-500 size-6 relative bottom-8 btnn" />



          <button className="signin pt-3 loginbtnn">Sign Up</button>
          <span className="firsttime pt-1">
            <Link to="/Login" className="">Already have an account? Log in</Link>
          </span>

        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
