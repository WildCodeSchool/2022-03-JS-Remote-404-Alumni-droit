import React from "react";
import { Link } from "react-router-dom";

import Footer from "@components/Footer";

function RGPD() {
  return (
    <div>
      <div className="flex justify-center flex-col bg-zinc-100 mx-auto w-[90%] lg:w-[80%] xl:w-[70%] m-8 mb-2 rounded-md shadow-md">
        <div className="flex justify-center items-center px-6 py-4 bg-red-800 text-center text-slate-50 h-[1.5rem] lg:h-[2.3rem] xl:h-[2.5rem] rounded-t-md">
          <p>Mentions Légales</p>
        </div>
        <div className="p-2 md:px-12 md:py-8 lg:px-10 xl:px-20">
          <p className="w-[90%] text-gray-400 text-xs mx-auto my-4">
            RGPD : Les utilisateurs de l’annuaire des anciens sont seuls
            responsables des informations qu’ils rendent accessibles aux autres
            utilisateurs (inscrits ou non) au moyen de ce dispositif. En aucun
            cas, l’Association du Collège et de l’Ecole de droit ne saurait être
            tenue responsable de l’utilisation ou de la collecte de ces données
            par des tiers. Les utilisateurs peuvent à tout moment supprimer leur
            profil et ainsi effacer toutes leurs données. Ils peuvent aussi
            contacter le secrétaire général de l’Association ou son adjoint à
            l’adresse
            <a
              href="mailto:cdd.edd.paris2@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              cdd.edd.paris2@gmail.com
            </a>
            pour faire supprimer leur profil.
          </p>

          <p className="w-[90%] text-gray-400 text-xs mx-auto my-4">
            L’Association du Collège et de l’Ecole de droit se réserve la
            possibilité d’utiliser les informations disponibles sur le site de
            l’annuaire, aux fins de tenir une liste à jour des alumni du Collège
            et de l’Ecole de droit et d’établir des statistiques sur l’insertion
            professionnelle des diplômés du Collège et de l’Ecole de droit de
            l’Université Paris Panthéon-Assas. La base légale du traitement est
            l’intérêt légitime de l’Association du Collège et de l’Ecole de
            droit.
          </p>

          <p className="w-[90%] text-gray-400 text-xs mx-auto my-4">
            Les données collectées seront communiquées aux seuls membres du
            bureau de l’Association du Collège et de l’Ecole de droit.
          </p>

          <p className="w-[90%] text-gray-400 text-xs mx-auto my-4">
            Vous pouvez accéder aux données vous concernant, les rectifier,
            demander leur effacement ou exercer votre droit à la limitation du
            traitement de vos données. Vous pouvez également vous opposer au
            traitement de vos données. Consultez le site
            <a href="http://www.cnil.fr" target="_blank" rel="noreferrer">
              www.cnil.fr
            </a>
            pour plus d’informations sur vos droits.
          </p>

          <p className="w-[90%] text-gray-400 text-xs mx-auto my-4">
            Pour exercer ces droits ou pour toute question sur le traitement de
            vos données dans ce dispositif, vous pouvez contacter le secrétaire
            général de l’Association ou son adjoint à l’adresse
            <a
              href="mailto:cdd.edd.paris2@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              cdd.edd.paris2@gmail.com
            </a>
            . Si vous estimez, après nous avoir contactés, que vos droits «
            Informatique et Libertés » ne sont pas respectés, vous pouvez
            adresser une réclamation à la CNIL.
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-col mx-auto w-[90%] lg:w-[80%] xl:w-[70%] mb-6">
        <div className="flex justify-end">
          <Link to="/">
            <button
              type="button"
              className="text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-700 font-medium rounded-lg text-sm lg:text-base xl:text-lg mt-5 px-5 py-2.5 inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              <p>Retour à la liste</p>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default RGPD;
