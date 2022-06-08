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
      <img
        src={PortraitAlumni}
        alt="alumni girl"
        className="relative z-10 w-[85%] mt-2 mx-auto top-7"
      />
      <div className="flex justify-center items-end flex-row text-center bg-red-800 text-slate-50 xl:p-4 h-20 pb-3 w-full">
        <p className="text-xl mr-2 lg:text-1xl xl:text-2xl">Marie-Françoise</p>
        <p className="text-2xl font-bold lg:text-2xl xl:text-4xl">
          Clara Dupont
        </p>
      </div>
      <div className="flex flex-col justify-center w-[85%] h-auto text-base md:text-sm pt-4 ml-8 leading-snug">
        <p className="font-semibold">
          Email :{" "}
          <span className="font-normal">mariefrancoise.cd@tdgi-paris.fr</span>
        </p>
        <p className="font-semibold mb-5">
          Téléphone : <span className="font-normal">06 62 48 25 69</span>
        </p>

        {/* DIPLOMES OBTENUS */}

        <h2 className="mb-1 text-2xl font-bold text-red-800">
          Diplômes obtenus :
        </h2>
        <p className="font-semibold mb-2">
          Master 2 :
          <span className="font-normal ml-1">
            2022 - Droit pénal et sciences pénales
            <br />
            <span className="italic ml-[4.8rem]">
              Université Paris Panthéon-Assas
            </span>
          </span>
        </p>
        <p className="font-semibold">
          Diplôme 1 :
          <span className="font-normal ml-1">
            2019 - Diplôme du Collège de Droit
          </span>
        </p>
        <p className="font-semibold">
          Diplôme 2 :
          <span className="font-normal ml-1">
            2016 - Certificat de l&apos;École de Droit
          </span>
        </p>
        <p className="font-semibold">
          Diplôme 3 :
          <span className="font-normal ml-1">
            2013 - Diplôme de l&apos;École de Droit
          </span>
        </p>

        {/* PROFESSION ACTUELLE */}

        <h2 className="mb-1 text-2xl font-bold my-5 text-red-800">
          Profession actuelle :
        </h2>
        <p className="font-semibold">
          Employeur :
          <span className="font-normal">
            {" "}
            Tribunal de Grande Instance Paris
          </span>
        </p>
        <p className="font-semibold">
          Poste actuel :<span className="font-normal"> Juriste</span>
        </p>
        {/* <p className="font-semibold">
          Email :
          <span className="font-normal"> mariefrancoise.cd@tdgi-paris.fr</span>
        </p> */}
        <p className="font-semibold mt-3">
          Télécharger CV :<span className="font-normal"> Cliquez-ici</span>
        </p>

        {/* MA BIOGRAPHIE */}

        <h2 className="mb-1 text-2xl font-bold mt-5 text-red-800">
          Ma biographie :
        </h2>
        <p className="w-[85%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
          temporibus at adipisci ad nihil odio tempore saepe reiciendis harum
          maxime amet, numquam veniam et, ipsum laborum praesentium. In, ullam
          asperiores. Laborum distinctio similique veniam voluptatum asperiores
          facere perferendis, doloremque quasi vel sint, non aspernatur
          architecto laudantium. Voluptates explicabo beatae quos magnam
          accusamus cupiditate, iusto, excepturi unde possimus aut dolore ipsum
          rum praes.
        </p>

        {/* RESEAUX SOCIAUX */}

        <h2 className="mb-1 text-2xl font-bold my-5 text-red-800">
          Réseaux Sociaux :
        </h2>

        <div className="flex items-center mt-2">
          <img src={linkedin} alt="alumni girl" className="z-10 w-[6%] mr-2" />
          <p>www.linkedIn.com/MarieFrancoise</p>
        </div>
        <div className="flex items-center mt-2 mb-5">
          <img src={twitter} alt="alumni girl" className="z-10 w-[6%] mr-2" />
          <p>www.twitter.com/MarieFrancoise</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
