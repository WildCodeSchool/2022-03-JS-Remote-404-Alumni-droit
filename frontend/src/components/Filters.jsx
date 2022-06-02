import React from "react";

function Filters() {
  return (
    <div className="flex justify-center m-3 pt-0">
      <input
        type="text"
        placeholder="Rechercher votre nom"
        className="w-96 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ring-red-800"
      />
    </div>
  );
}

export default Filters;
