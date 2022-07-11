import React from "react";

function Initiales({ lastname, firstname }) {
  return (
    <div className="flex justify-center items-center min-h-[8rem] w-auto bg-gray-200">
      {/* <p className="content-center rounded-lg shadow-md m-2 p-3 border-2 h-auto"> */}
      <p className="flex justify-center items-center w-[4.5rem] h-[4.5rem] text-[1.5rem] tracking-wider text-red-800 font-medium text-center border-2 bg-white border-red-800 rounded-full">
        {firstname.charAt(0)}
        {lastname.charAt(0)}
      </p>
    </div>
  );
}

export default Initiales;

// className="text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-700 font-medium rounded-lg text-sm lg:text-base xl:text-lg md:mt-1 mt-5 px-5 py-2.5 inline-flex items-center dark:bg-red-800 dark:hover:bg-red-800 dark:focus:ring-red-800"
