import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";


const Invest = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const details = location.state.project;
  return (
    <div className="w-full h-full px-5 bg-black text-white">
      <h1 className="pt-10 text-6xl ">{details.projectTitle}</h1>
      <p className="mb-10 mt-3 text-xl">{details.company_name}</p>
      <img
        src={details.project_image}
        alt=""
        className="w-full h-[25rem] md:h-[35rem] rounded-xl object-cover"
      />
  
      <div className="flex justify-start items-center my-8 gap-1  ">
        <p className=" flex items-center gap-1">
          <IoTimeOutline />
          {details.deadline} days left
        </p>
        <p>|</p>
        <p> {details.project_percent}% funded </p>
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="min-w-[40rem] max-w-[50rem]">
          <h1 className="text-3xl">Project Description</h1>
          <p className="my-5">{details.projectDescription}</p>
          <p>
            <p className="">Goal Amount: {details.goalAmount} </p>
            <p className="">Project Deadline: {details.deadline}</p>
          </p>
        </div>

        <div className="w-min-[30rem] flex  grow justify-center py-10">

        
          <div className="form flex flex-col w-fit items-center  justify-center border shadow-md rounded-xl bg-green-100/50 py-5 px-10">
            {/* <p>Connected Account: {accounts[0]}</p> */}
            {/* <form onSubmit={contributeToProject} className="flex flex-col"> */}
              {/* <div className="my-2">
                <label htmlFor="amount" className=" me-3">
                  Amount
                </label>
                <input
                  type="text"
                  name="amount"
                  className="text-black"
                  id="amount"
                  value={contributionAmount}
                  onChange={(e) => setContributionAmount(e.target.value)}
                  placeholder="Enter contribution amount (ETH)"
                />
              </div> */}
              {/* <div className="flex justify-center">
                {projectContract && (<button
                  type="submit"
                  className="border rounded-md py-2 m-3 px-6 w-fit bg-green-900/50 text-white "
                >
                  Contribute
                </button>)}
              </div>
            </form> */}
          </div>
        

        </div>
      </div>
      {/* {accounts.length > 0 ? (
        <p>Connected Account: {accounts[0]}</p>
      ) : (
        <p>Connect to MetaMask</p>
      )}
      <button onClick={initWeb3}>Connect MetaMask</button>
      <input
        type="text"
        value={contributionAmount}
        onChange={(e) => setContributionAmount(e.target.value)}
        placeholder="Enter contribution amount (ETH)"
      />
      {projectContract && (
        <button onClick={contributeToProject}>Contribute to Project</button>
      )} */}
    </div>
  );
};

export default Invest;
