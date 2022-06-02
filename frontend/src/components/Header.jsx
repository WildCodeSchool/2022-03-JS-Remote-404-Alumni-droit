import React from "react";
import "../App.css";

function Header() {
  return (
    <div>
      <head className="flex font-playfair flex-col items-center text-black">
        <header className="text-2xl sm:text-3xl">Annuaire</header>
        <header className="text-xl sm:text-2xl">
          du Collège et de l&apos;école de droit
        </header>

        <h1 className="text-xs sm:text-sm flex flex-row mt-1">
          <div className="h-0.5 sm:w-6 w-5 bg-black mt-2 mr-1 sm:mr-3" />
          UNIVERSITÉ PARIS II, PANTHÉON-ASSAS
          <div className="h-0.5 sm:w-6 w-5 bg-black mt-2 ml-1 sm:ml-3" />
        </h1>
      </head>
    </div>
  );
}

export default Header;
