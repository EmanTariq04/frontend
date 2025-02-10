import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://i.pinimg.com/236x/54/35/7f/54357fd031e052433732f631ec0218ad.jpg)] h-screen pt-8 flex justify-between flex-col w-full">
        <img
          className="w-16 ml-8"
          src="https://i.pinimg.com/236x/48/1f/92/481f9273ee7de4024acd7f249397defc.jpg"
          alt=""
        />
        <div className="bg-black py-4 px-4 pb-7">
          <h2 className="text-3xl font-bold text-white">
            Get Started with Uber
          </h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-white font-semibold text-xl text-black py-3 rounded mt-4"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
