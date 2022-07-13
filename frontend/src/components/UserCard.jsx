import React from "react";
import { Link } from "react-router-dom";
import AdminToggle from "./AdminToggle";
import Initiales from "./Initiales";

function UserCard({
  lastname,
  firstname,
  photo,
  job,
  userId,
  diplomes,
  isValid,
}) {
  return (
    <div
      key={Date.now()}
      className="w-[45%] md:w-[22%] lg:w-[18%] xl:w-[15%] flex flex-col flex-wrap rounded-lg shadow-md m-2 p-3 border-2 h-auto"
    >
      <div>
        {photo != null ? (
          <img src={photo} alt={`Portrait de ${firstname} ${lastname}`} />
        ) : (
          <Initiales lastname={lastname} firstname={firstname} /> // Les initiales s'affichent si l'alumni n'a pas uploadé son portrait
        )}
      </div>
      <div className="flex justify-center flex-col text-center bg-red-800 text-slate-50 p-2 xl:p-1 leading-4">
        <p className="text-sm lg:text-1xl xl:text-[1rem]">{firstname}</p>
        {lastname.length < 15 ? (
          <p className="font-bold text-[.7rem] lg:text-[.9rem]">{lastname}</p>
        ) : (
          <p className="font-bold text-[.7rem] lg:text-[.8rem]">{lastname}</p>
        )}
      </div>
      <div className="flex flex-col justify-center w-full h-auto text-xs md:text-[.7rem] xl:text-[.8rem] pt-2 leading-snug">
        <p className="font-bold mb-1">{job}</p>
        {diplomes != null &&
          diplomes
            .sort((a, b) => b.year - a.year)
            .map((dip) => (
              <div className="flex align-items">
                <div className="w-12">
                  <p className="font-semibold">{dip.year}</p>
                </div>
                <p className="font-normal">
                  {dip.title.replace(`&apos;`, `'`)}
                  <br />
                </p>
              </div>
            ))}
      </div>
      {diplomes.length === 1 && (
        <div className="mb-8 md:mb-16 lg:mb-16 xl:mb-18 2xl:mb-19" />
      )}
      {diplomes.length === 2 && <div className="sm:mb-4 md:mb-8" />}
      <div className="flex flex-col justify-end">
        <Link to={`/profile/${userId}`}>
          <button
            type="button"
            className="flex justify-center text-white w-full bg-red-700 hover:bg-red-600 focus:outline-none font-medium rounded-lg text-sm lg:text-base md:mt-1 mt-5 py-2.5 items-center"
          >
            <p className="text-center">Consulter</p>
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
        </Link>
        <AdminToggle userId={userId} isValid={isValid} />
      </div>
    </div>
  );
}

export default UserCard;
