import React from 'react';
import { Link } from 'react-router-dom';

const LeftHome = ({ title, content, imageUrl1, imageUrl2, linkUrl }) => {
  return (
    <div className="flex flex-wrap items-center justify-between h-[80vh] px-10">
      <div className="image w-full md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0 space-x-4">
        <div className="relative">
          <img
            src={imageUrl1}
            alt=""
            className="w-80 h-56 md:w-96 md:h-72 object-cover rounded-lg shadow-md"
            style={{ marginTop: "-60px" }}
          />
        </div>
        <div className="relative">
          <img
            src={imageUrl2}
            alt=""
            className="w-80 h-56 md:w-96 md:h-72 object-cover rounded-lg shadow-md"
            style={{ marginTop: "30px" }}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-8 text-center pl-10">
          {content}
        </p>
        <Link
          to={linkUrl}
          className="bg-green-600 hover:bg-green-900 text-xl text-white font-bold py-3 px-6 rounded-lg inline-block"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default LeftHome;
