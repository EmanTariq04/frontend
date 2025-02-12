import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const RidePopUp = (props) => {
  return (
    <div>
      {" "}
      <ExpandMoreIcon
        className="absolute top-0 left-4"
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      />
      <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-xl mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://i.pinimg.com/474x/7e/6a/f3/7e6af3330209b8b36f5834411bfba5d5.jpg"
            alt=""
          />
          <h2 className="text-xl font-medium">Aria Harrison</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-1">
            <LocationOnIcon />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Square Street, New Jersey
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-1">
            <LocationOnIcon />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Square Street, New Jersey
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <CreditCardIcon />
            <div>
              <h3 className="text-lg font-medium">193.09</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className=" mt-5 w-full items-center flex justify-between">
          <button
            onClick={() => {
              props.setRidePopupPanel(false);
            }}
            className="text-gray-700 bg-gray-300 font-semibold p-3 px-8 rounded-lg"
          >
            Ignore
          </button>
          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(true);
            }}
            className=" text-white bg-green-600 font-semibold p-3 px-8 rounded-lg"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
