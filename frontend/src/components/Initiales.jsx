import React from "react";

function Initiales({ lastname, firstname }) {
  return (
    <div className="flex justify-center items-center min-h-[8rem] w-auto bg-gray-200">
      <p className="flex justify-center items-center w-[4.5rem] h-[4.5rem] text-[1.5rem] tracking-wider text-red-800 font-medium text-center border-2 bg-white border-red-800 rounded-full">
        {firstname.charAt(0)}
        {lastname.charAt(0)}
      </p>
    </div>
  );
}

export default Initiales;
