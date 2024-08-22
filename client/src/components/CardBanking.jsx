import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

const CardBanking = ({ children, to }) => {
  return (
    <div className="bg-green-600 w-full flex justify-center items-center text-white h-20 text-4xl rounded-xl border-2 border-black my-1 text-center text-block font-semibold shadow-lg hover:shadow-xl transition duration-300">
      <Link
        to={to}
        className="w-full h-full flex items-center justify-between px-8 rounded-xl transition duration-300 hover:bg-green-500 hover:text-black hover:scale-105"
      >
        <span className="transition-transform duration-300">{children}</span>{" "}
        <FiExternalLink />
      </Link>
    </div>
  );
};

export default CardBanking;
