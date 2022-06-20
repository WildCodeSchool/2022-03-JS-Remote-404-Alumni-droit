import React from "react";

import Footer from "@components/Footer";

import PortraitAlumni from "../assets/alumni-girl.jpg";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

// const updateTag = ({ name, content }) => {
//   const meta = document.createElement('meta');
//   meta.content = content;
//   meta.name = name;
//   document.getElementsByTagName('head')[0].appendChild(meta);
// }

// const updateMetaData = (data) => {
//   if (data.description) {
//     updateTag({ name: 'description', content: data.description })
//   }

//   if (data.title) {
//     updateTag({ name: 'title', content: data.title })
//   }

//   if (data.ogUrl) {
//     updateTag({ property: 'og:url', content: data.ogUrl })
//   }

//   if (data.ogType) {
//     updateTag({ property: 'og:type', content: data.ogType })
//   }

//   if (data.ogTitle) {
//     updateTag({ property: 'og:title', content: data.ogTitle })
//   }

//   if (data.ogDescription) {
//     updateTag({ property: 'og:description', content: data.ogDescription })
//   }

//   if (data.ogImage) {
//     updateTag({ property: 'og:image', content: data.ogImage })
//   }
// }

// useEffect(() => {
//   fetch('')
//     .then(res => res.json())
//     .then(data => {
//       setProfile(data);
//       updateMetaData(data);
//     })
// }, [])

function Profile() {
  return (
    <>
      <div className="md:flex md:flex-col md:justify-start bg-zinc-100 m-3 mt-8 md:mt-10 md:mx-10 lg:mx-20 xl:mx-40 rounded-md shadow-md border-2">
        <div className="md:flex md:flex-row md:items-center mb-2">
          <div className="flex justify-between items-center px-5 md:px-7 lg:px-9 xl:px-12 md:text-start bg-red-800 text-slate-50 h-[2.5rem] lg:h-[3rem] w-full md:w-[100%] rounded-t-md">
            <img
              src={PortraitAlumni}
              alt="alumni girl"
              className="md:flex md:justify-start z-10 w-[22%] md:w-[13%] lg:w-[12%] xl:w-[10%] md:left-20 lg:left-[8rem] xl:left-60 rounded-full"
            />
            <div className="flex items-center">
              <p className="text-sm mr-2 lg:text-[1.3rem]">Marie-Françoise</p>
              <p className="text-base font-bold lg:text-2xl">Clara Dupont</p>
            </div>
          </div>
        </div>

        {/* INFORMATIONS */}

        <div className="flex flex-col md:flex-row justify-center md:justify-around w-[90%] md:w-[95%] h-auto text-base md:text-sm pt-4 md:pt-0 mx-auto md:mt-5 xl:mt-[2rem] xl:mb-[2rem] leading-snug">
          {/* COLONNE 1 */}
          <div className="md:w-[45%]">
            {/* PROFESSION ACTUELLE */}
            <h2 className="mt-0 mb-1 text-2xl font-bold my-5 text-red-800">
              Profession actuelle :
            </h2>
            <p className="font-semibold">
              Employeur :
              <span className="font-normal">
                Tribunal de Grande Instance Paris
              </span>
            </p>
            <p className="font-semibold">
              Poste actuel :<span className="font-normal"> Juriste</span>
            </p>
            <p className="font-semibold mt-2">
              Consulter CV :<span className="font-normal"> Cliquez-ici</span>
            </p>

            {/* COORDONNEES */}
            <h2 className="mt-3 mb-1 text-2xl font-bold text-red-800">
              Coordonnées :
            </h2>
            <p className="font-semibold">
              Email :{" "}
              <span className="font-normal">
                mariefrancoise.cd@tdgi-paris.fr
              </span>
            </p>
            <p className="font-semibold mb-5">
              Téléphone : <span className="font-normal">06 62 48 25 69</span>
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              temporibus at adipisci ad nihil odio tempore saepe reiciendis
              harum maxime amet, numquam veniam et, ipsum laborum praesentium.
              In, ullam asperiores. Laborum distinctio similique veniam
              voluptatum asperiores facere perferendis, doloremque quasi vel
              sint, non aspernatur architecto laudantium. Voluptates explicabo
              beatae quos magnam accusamus cupiditate, iusto, excepturi unde
              possimus aut dolore ipsum rum praes.
            </p>

            {/* RESEAUX SOCIAUX */}

            <h2 className="mb-1 text-2xl font-bold my-5 text-red-800">
              Réseaux Sociaux :
            </h2>

            <div className="flex items-center mt-2">
              <img
                src={linkedin}
                alt="alumni girl"
                className="z-10 w-[6%] mr-2"
              />
              <p>www.linkedIn.com/MarieFrancoise</p>
            </div>
            <div className="flex items-center mt-2 mb-5">
              <img
                src={twitter}
                alt="alumni girl"
                className="z-10 w-[6%] mr-2"
              />
              <p>www.twitter.com/MarieFrancoise</p>
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
    </>
  );
}

export default Profile;
