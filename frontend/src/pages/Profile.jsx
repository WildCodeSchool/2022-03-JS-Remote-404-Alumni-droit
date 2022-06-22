import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import Footer from "@components/Footer";

import linkedin from "../assets/linkedin.png";
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

  // métier ?
  return (
    <div>
      <div className="md:flex md:flex-col md:justify-start bg-zinc-100 m-3 md:mt-10 md:mx-10 lg:mx-20 xl:mx-40 rounded-md shadow-md border-2">
        <div className="md:flex md:flex-row md:items-center">
          <img
            src={rows != null && rows.photo} /// /
            alt={
              rows != null && rows.firstname
                ? `Portrait de ${rows.firstname} ${rows.lastname}`
                : ""
            }
            className="relative md:absolute md:flex md:justify-start z-10 w-[30%] md:w-[15%] lg:w-[13%] xl:w-[10%] mt-2 mx-auto top-2 md:top-[5rem] lg:top-[4rem] md:left-20 lg:left-[8rem] xl:left-60 md:mt-5 rounded-full"
          />
          <div className="flex justify-center items-center md:relative md:text-start bg-red-800 text-slate-50 h-[3rem] md:h-[3rem] w-full md:w-[100%] md:rounded-t-md">
            <p className="text-xl mr-2 md:pl-[8rem] lg:text-1xl xl:text-2xl">
              {rows != null && rows.firstname}
            </p>
            <p className="text-2xl font-bold lg:text-2xl xl:text-3xl">
              {rows != null && rows.lastname}
            </p>
          </div>
        </div>

        {/* INFORMATIONS */}

        <div className="flex flex-col md:flex-row justify-center md:justify-around w-[90%] md:w-[95%] h-auto text-base md:text-sm pt-4 md:pt-0 mx-auto md:mt-10 xl:mt-[4rem] xl:mb-[2rem] leading-snug">
          {/* COLONNE 1 */}
          <div className="md:w-[45%]">
            {/* PROFESSION ACTUELLE */}
            <h2 className="mt-0 mb-1 text-2xl font-bold my-5 text-red-800">
              Profession :
            </h2>
            <p className="font-semibold">
              Profession :{" "}
              <span className="font-normal">
                {rows != null && rows.profession_id}
              </span>
            </p>
            <p className="font-semibold">
              Poste actuel :{" "}
              <span className="font-normal">{rows != null && rows.poste}</span>
            </p>
            <p className="font-semibold">
              Employeur :{" "}
              <span className="font-normal">
                {rows != null && rows.employeur}
              </span>
            </p>
            <p className="font-semibold">
              {/* Poste actuel :<span className="font-normal"> {job}</span> */}
            </p>
            <p className="font-semibold mt-2">
              Consulter CV :
              <span className="font-normal" src={rows != null && rows.cv}>
                {" "}
                Cliquez-ici
              </span>
            </p>

            {/* COORDONNEES */}
            <h2 className="mt-3 mb-1 text-2xl font-bold text-red-800">
              Coordonnées :
            </h2>
            <p className="font-semibold">
              Email :{" "}
              <span className="font-normal">
                {rows != null && rows.emailpro}
              </span>
            </p>
            <p className="font-semibold mb-5">
              Téléphone :{" "}
              <span className="font-normal"> {rows != null && rows.phone}</span>
            </p>

            {/* DIPLOMES OBTENUS */}
            <h2 className="mt-3 mb-1 text-2xl font-bold text-red-800">
              Diplômes obtenus :
            </h2>
            <p className="font-semibold">
              Diplôme :{" "}
              <span className="font-normal ml-1">
                2019 - Diplôme du Collège de Droit
              </span>
            </p>
            <p className="font-semibold">
              Diplôme :
              <span className="font-normal ml-1">
                2016 - Certificat de l&apos;École de Droit
              </span>
            </p>
            <p className="font-semibold">
              Diplôme :
              <span className="font-normal ml-1">
                2013 - Diplôme de l&apos;École de Droit
              </span>
              <p className="font-semibold mt-2">
                Master 2 :
                <span className="font-normal ml-1">
                  2011 - Droit pénal et sciences pénales
                  <span className="italic ml-1">
                    Université Paris Panthéon-Assas
                  </span>
                </span>
              </p>
            </p>
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
                : ` n'a pas encore rempli cette partie de son profil`}
              {/* `${rows.firstname} ${rows.lastname} */}
            </p>

            {/* RESEAUX SOCIAUX */}

            <h2 className="mb-1 text-2xl font-bold my-5 text-red-800">
              Réseaux Sociaux :
            </h2>

            <div className="flex items-center mt-2">
              <img src={linkedin} alt="LinkedIn" className="z-10 w-[6%] mr-2" />
              <p>{rows != null && rows.linkedin}</p>
            </div>
            <div className="flex items-center mt-2 mb-5">
              <img src={twitter} alt="Twitter" className="z-10 w-[6%] mr-2" />
              <p>{rows != null && rows.twitter}</p>
              {/* <div className="flex items-center mt-2 mb-5">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="z-10 w-[6%] mr-2"
                />
                <p>{rows != null && rows.instagram}</p>
              </div> */}
            </div>
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
  );
}

export default Profile;
