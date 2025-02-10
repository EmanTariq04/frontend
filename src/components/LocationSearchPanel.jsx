// import React from "react";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

// const LocationSearchPanel = () => {
//   const locations = [
//     "John Smith, 999 Anywhere St., Apt 555, Medford MA 0215",
//     "John Smith, 999 Anywhere St., Apt 555, Medford MA 0215",
//     "John Smith, 999 Anywhere St., Apt 555, Medford MA 0215",
//     "John Smith, 999 Anywhere St., Apt 555, Medford MA 0215",
//   ];

//   return (
//     <div>
//       {locations.map(function (elem) {
//         return (
//           <div className="flex gap-2 border-2 p-3 border-white active:border-black rounded-xl items-center my-4 justify-start">
//             <h2 className="px-4 flex items-center justify-between rounded-full">
//               <LocationOnIcon />
//             </h2>
//             <h4 className="font-medium">
//               {elem}
//             </h4>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default LocationSearchPanel;

import React, { forwardRef } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LocationSearchPanel = forwardRef((props, ref) => {
  const locations = [
    "John Smith, 999 Anywhere St., Apt 555, Medford MA 0215",
    "John Smith, 999 Anywhere St., Apt 555, Medford MA 0215",
    "John Smith, 999 Anywhere St., Apt 555, Medford MA 0215",
    "John Smith, 999 Anywhere St., Apt 555, Medford MA 0215",
  ];

  return (
    <div ref={ref}>
      {locations.map((elem, index) => (
        <div
          onClick={() => {
            props.setVehiclePanelOpen(true);
            props.setPanelOpen(false);
          }}
          key={index}
          className="flex gap-2 border-2 p-3 border-white active:border-black rounded-xl items-center my-4 justify-start"
        >
          <div className="p-2 bg-gray-200 rounded-full">
            <LocationOnIcon />
          </div>
          <h4 className="font-medium text-gray-800">{elem}</h4>
        </div>
      ))}
    </div>
  );
});

export default LocationSearchPanel;
