import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import Footer from "@components/Footer";

import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

function Profile() {
  const { userId } = useParams();
  const [rows, setRows] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/annuaire/${userId}`)
      .then((res) => setRows(res.data))
      .catch((err) => console.error(err));
  }, [userId]);

  return (
    rows != null && (
      <div>
        <div className="md:flex md:flex-col md:justify-start bg-zinc-100 m-3 mt-8 md:mt-10 md:mx-10 md:pb-6 lg:mx-20 xl:mx-40 rounded-md shadow-md border-2">
          <div className="md:flex md:flex-row md:items-center mb-2">
            <div className="flex justify-between items-center px-5 md:px-7 lg:px-9 xl:px-12 md:text-start bg-red-800 text-slate-50 h-[2.5rem] lg:h-[3rem] w-full md:w-[100%] rounded-t-md">
              <img
                src={rows != null && rows.photo}
                alt={
                  rows != null && rows.firstname
                    ? `Portrait de ${rows.firstname} ${rows.lastname}`
                    : ""
                }
                className="md:flex md:justify-start z-10 w-[22%] md:w-[13%] lg:w-[12%] xl:w-[10%] md:left-20 lg:left-[8rem] xl:left-60 rounded-full"
              />
              <div className="flex items-center">
                <p className="text-sm mr-2 lg:text-[1.3rem]">
                  {rows != null && rows.firstname}
                </p>
                <p className="text-base font-bold lg:text-2xl">
                  {rows != null && rows.lastname}
                </p>
              </div>
            </div>
          </div>

          {/* INFORMATIONS */}

          <div className="flex flex-col md:flex-row justify-center md:justify-around w-[90%] md:w-[95%] h-auto text-base md:text-sm pt-4 md:pt-0 mx-auto md:mt-5 xl:mt-[2rem] xl:mb-[2rem] leading-snug">
            {/* COLONNE 1 */}
            <div className="md:w-[45%]">
              {/* PROFESSION ACTUELLE */}
              <h2 className="mt-0 mb-1 text-2xl font-bold my-5 text-red-800">
                Profession :
              </h2>
              <p className="font-semibold">
                Profession :{" "}
                <span className="font-normal">{rows != null && rows.job}</span>
              </p>
              <p className="font-semibold">
                Poste actuel :{" "}
                <span className="font-normal">
                  {rows != null && rows.poste}
                </span>
              </p>
              <p className="font-semibold">
                Employeur :{" "}
                <span className="font-normal">
                  {rows != null && rows.employeur}
                </span>
              </p>

              <p className="font-semibold mt-2">
                Consulter CV :
                <span src={rows != null && rows.cv}>
                  {" "}
                  <a
                    className="font-normal hover:text-red-800 visited:text-red-700"
                    href={rows != null && rows.cv}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {rows.cv ? "Cliquez-ici" : "Non Renseigné"}
                  </a>
                </span>
              </p>
              {/* COORDONNEES */}
              <h2 className="mt-3 mb-1 text-2xl font-bold text-red-800">
                Coordonnées :
              </h2>
              <p className="font-semibold">
                Email :{" "}
                <span className="font-normal">
                  <a
                    className="font-normal hover:text-red-800
                  visited:text-red-700"
                    href={rows.emailpro ? `mailto:${rows.emailpro}` : ""}
                  >
                    {rows.emailpro ? rows.emailpro : "Non Renseigné"}
                  </a>
                </span>
              </p>
              <p className="font-semibold mb-5">
                Téléphone :{" "}
                <span className="font-normal">
                  {" "}
                  {rows.phone ? rows.phone : "Non Renseigné"}
                </span>
              </p>
              {/* DIPLOMES OBTENUS */}
              <h2 className="mt-3 mb-1 text-2xl font-bold text-red-800">
                Diplômes obtenus :
              </h2>
              {rows.diplome != null &&
                rows.diplome
                  .sort((a, b) => b.year - a.year)
                  .map((dip) => (
                    <div className="flex align-items">
                      <div className="w-12">
                        <p className="font-semibold">{dip.year}</p>
                      </div>
                      <p className="font-normal">
                        {dip.title.replace("&apos;E", "'É")}
                        <br />
                      </p>
                    </div>
                  ))}
              <br />
              {rows.masters != null &&
                rows.masters
                  .sort((a, b) => b.year - a.year)
                  .map((mast) => (
                    <div className="flex align-items">
                      <div className="w-12">
                        <p className="font-semibold">{mast.year}</p>
                      </div>
                      <p className="font-normal">
                        {mast.title.replace("&apos;", "'")}
                        <br />
                        <span className="italic">{mast.university}</span>
                      </p>
                    </div>
                  ))}
            </div>

            {/* COLONNE 2 */}

            {/* MA BIOGRAPHIE */}
            <div className="md:w-[45%]">
              <h2 className="mb-1 text-2xl font-bold mt-5 md:mt-0  text-red-800">
                Parcours professionnel :
              </h2>
              <p className="w-full md:w-[90%]">
                {rows != null && rows.bio
                  ? rows.bio
                  : `${rows.firstname} ${rows.lastname} n'a pas encore rempli cette partie de son profil`}
              </p>

              {/* RESEAUX SOCIAUX */}

              <h2 className="mb-1 text-2xl font-bold my-5 text-red-800">
                Réseaux Sociaux :
              </h2>

              {rows.linkedin ? (
                <div className="flex items-center mt-2 mb-3">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="z-10 w-[6%] mr-2"
                  />
                  <a
                    className="font-normal hover:text-red-800 visited:text-red-700"
                    href={rows != null && rows.linkedin}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <p>{rows != null && rows.linkedin}</p>
                  </a>
                </div>
              ) : (
                ""
              )}
              {rows.twitter ? (
                <div className="flex items-center mt-2 mb-3">
                  <img
                    src={twitter}
                    alt="Twitter"
                    className="z-10 w-[6%] mr-2"
                  />
                  <a
                    className="font-normal hover:text-red-800 visited:text-red-700"
                    href={rows != null && rows.twitter}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <p>{rows != null && rows.twitter}</p>
                  </a>
                </div>
              ) : (
                ""
              )}
              {rows.instagram ? (
                <div className="flex items-center mt-2 mb-3">
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="z-10 w-[6%] mr-2"
                  />
                  <a
                    className="font-normal hover:text-red-800 visited:text-red-700"
                    href={rows != null && rows.instagram}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <p>{rows != null && rows.instagram}</p>
                  </a>
                </div>
              ) : (
                ""
              )}
              {rows.twitter ? (
                <div className="flex items-center mt-2 mb-3">
                  <img
                    src={facebook}
                    alt="facebook"
                    className="z-10 w-[6%] mr-2"
                  />
                  <a
                    className="font-normal hover:text-red-800 visited:text-red-700"
                    href={rows != null && rows.facebook}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <p>{rows != null && rows.facebook}</p>
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-5 mr-5 md:mx-10 lg:mx-20 xl:mx-40">
          <button
            type="button"
            className="text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-700 font-medium rounded-lg text-sm lg:text-base xl:text-lg mt-5 px-5 py-2.5 inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            <p>Retour à la liste</p>
          </button>
        </div>
        <Footer />
      </div>
    )
  );
}

export default Profile;
