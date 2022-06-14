import React from "react";

function UserCard({ lastname, firstname, photo, job }) {
  return (
    <div className="w-[45%] md:w-[30%] lg:w-[23%] flex flex-col flex-wrap rounded-lg shadow-md m-2 p-3 border-2 h-auto">
      <div>
        <img src={photo} alt="alumni girl" />
      </div>
      <div className="flex justify-center flex-col text-center bg-red-800 text-slate-50 p-2 xl:p-4 leading-4">
        <p className="text-1xl lg:text-1xl xl:text-2xl">{firstname}</p>
        <p className="font-bold text-xl lg:text-2xl xl:text-2xl">{lastname}</p>
      </div>
      <div className="flex flex-col justify-center w-full h-auto text-xs md:text-sm pt-2 leading-snug">
        <p className="">{job}</p>
        <p className="">Collège de droit 2018</p>
        <p className="">Ecole de droit 2020</p>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-700 font-medium rounded-lg text-sm lg:text-base xl:text-lg mt-5 px-5 py-2.5 inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          <p>Consulter</p>
          <svg
            className="invisible w-0 h-0 ml-0 md:visible md:w-4 md:h-4 md:ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default UserCard;
