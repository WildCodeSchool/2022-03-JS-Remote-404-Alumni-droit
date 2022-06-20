import React from "react";

import officiel from "../assets/officiel.png";
import PortraitAlumni from "../assets/alumni-girl.jpg";

function Navbar() {
  return (
    <div className="flex flex-row justify-between bg-gray-200 h-[4.5rem] mb-3 p-3 px-5 md:px-[2.5rem] lg:px-[5rem] xl:px-[10rem]">
      <img src={officiel} alt="logo" className="h-full" />
      <img
        src={PortraitAlumni}
        alt="alumni girl"
        className="h-full rounded-full"
      />
    </div>
  );
}

export default Navbar;
