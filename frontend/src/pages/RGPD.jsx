import React from "react";

import Footer from "@components/Footer";

function RGPD() {
  return (
    <div>
      <div className="flex justify-center align-center px-5 md:px-7 lg:px-8 xl:px-12 md:text-start bg-red-800 text-center text-slate-50 h-[1.5rem] lg:h-[3rem] w-full md:w-[100%] rounded-t-md">
        <p>Mentions Légales</p>
      </div>
      <p className="w-[90%] text-gray-400 text-xs mx-auto my-4">
        RGPD : Les utilisateurs de l’annuaire des anciens sont seuls
        responsables des informations qu’ils rendent accessibles aux autres
        utilisateurs (inscrits ou non) au moyen de ce dispositif. En aucun cas,
        l’Association du Collège et de l’Ecole de droit ne saurait être tenue
        responsable de l’utilisation ou de la collecte de ces données par des
        tiers. Les utilisateurs peuvent à tout moment supprimer leur profil et
        ainsi effacer toutes leurs données. Ils peuvent aussi contacter le
        secrétaire général de l’Association ou son adjoint à l’adresse
        <a href="mailto:cdd.edd.paris2@gmail.com" target="_blank">
          cdd.edd.paris2@gmail.com
        </a>{" "}
        pour faire supprimer leur profil.
      </p>

      <p className="w-[90%] text-gray-400 text-xs mx-auto my-4">
        L’Association du Collège et de l’Ecole de droit se réserve la
        possibilité d’utiliser les informations disponibles sur le site de
        l’annuaire, aux fins de tenir une liste à jour des alumni du Collège et
        de l’Ecole de droit et d’établir des statistiques sur l’insertion
        professionnelle des diplômés du Collège et de l’Ecole de droit de
        l’Université Paris Panthéon-Assas. La base légale du traitement est
        l’intérêt légitime de l’Association du Collège et de l’Ecole de droit.
      </p>

      <p className="w-[90%] text-gray-400 text-xs mx-auto my-4">
        Les données collectées seront communiquées aux seuls membres du bureau
        de l’Association du Collège et de l’Ecole de droit.
      </p>

      <p className="w-[90%] text-gray-400 text-xs mx-auto my-4">
        Vous pouvez accéder aux données vous concernant, les rectifier, demander
        leur effacement ou exercer votre droit à la limitation du traitement de
        vos données. Vous pouvez également vous opposer au traitement de vos
        données. Consultez le site{" "}
        <a href="http://www.cnil.fr" target="_blank">
          www.cnil.fr
        </a>{" "}
        pour plus d’informations sur vos droits.
      </p>

      <p className="w-[90%] text-gray-400 text-xs mx-auto my-4">
        Pour exercer ces droits ou pour toute question sur le traitement de vos
        données dans ce dispositif, vous pouvez contacter le secrétaire général
        de l’Association ou son adjoint à l’adresse{" "}
        <a href="mailto:cdd.edd.paris2@gmail.com" target="_blank">
          cdd.edd.paris2@gmail.com
        </a>
        . Si vous estimez, après nous avoir contactés, que vos droits «
        Informatique et Libertés » ne sont pas respectés, vous pouvez adresser
        une réclamation à la CNIL.
      </p>
      <Footer />
    </div>
  );
}
export default RGPD;
