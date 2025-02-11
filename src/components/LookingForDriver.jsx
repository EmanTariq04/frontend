import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const LookingForDriver = (props) => {
  return (
    <div>
      {" "}
      <ExpandMoreIcon
        className="absolute top-0 left-4"
        onClick={() => {
          props.setVehicleFound(false);
        }}
      />
      <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>
      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2T80mE3molYgk4BCI9vmfXlAT8ebK1NdIBA&s"
          alt=""
        />
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
      </div>
    </div>
  );
};

export default LookingForDriver;
