import React from "react";

function RedBannerAlumni() {
  return (
    <div>
      <div className="flex justify-center bg-red-800 text-white mt-8 mb-4 py-1 lg:py-2 text-lg font-light lg:text-xl text-center tracking-wide">
        <p>
          Annuaire de <span className="font-bold">1000 alumnis</span>
        </p>
        <p className="hidden md:inline md:ml-2">du Collège et Ecole de droit</p>
      </div>
    </div>
  );
}

export default RedBannerAlumni;
