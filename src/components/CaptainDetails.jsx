import React from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EditNoteIcon from "@mui/icons-material/EditNote";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-4">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://i.pinimg.com/474x/7e/6a/f3/7e6af3330209b8b36f5834411bfba5d5.jpg"
            alt=""
          />
          <h4 className="font-medium text-lg">Aria Harrison</h4>
        </div>
      </div>
      <h4 className="text-xl font-semibold">$173.89</h4>
      <p className="text-sm text-gray-600">Earned</p>

      <div className="flex p-3 mt-8 bg-gray-100 rounded-full justify-center gap-5 items-start">
        <div className="text-center">
          <AccessTimeIcon />
          <h5 className="text-lg font-medium">10.5</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <SpeedIcon />
          <h5 className="text-lg font-medium">10.5</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <EditNoteIcon />
          <h5 className="text-lg font-medium">10.5</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
