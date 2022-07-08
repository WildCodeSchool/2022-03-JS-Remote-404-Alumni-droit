import React from "react";
import "../App.css";

function Header() {
  return (
    <div>
      <div className="flex font-playfair flex-col items-center text-black">
        <div className="text-2xl sm:text-3xl">Annuaire</div>
        <div className="text-xl sm:text-2xl">
          du Collège et de l&apos;École de droit
        </div>

        <h1 className="text-xs sm:text-sm flex flex-row mt-1">
          <div className="h-0.5 sm:w-6 w-5 bg-black mt-2 mr-1 sm:mr-3" />
          UNIVERSITÉ PARIS PANTHÉON-ASSAS
          <div className="h-0.5 sm:w-6 w-5 bg-black mt-2 ml-1 sm:ml-3" />
        </h1>
      </div>
    </div>
  );
}

export default Header;
