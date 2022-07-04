import React, { useEffect, useState } from "react";
import axios from "axios";

function RedBannerAlumni() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/count`)
      .then((res) => setCount(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="flex justify-center bg-red-800 text-white mt-8 mb-4 py-1 lg:py-2 text-lg font-light lg:text-xl text-center tracking-wide">
        <p>Annuaire de{count ? ` ${count} ` : "s "}alumnis</p>
        <p className="hidden md:inline md:ml-2">
          du Collège et de l&apos;École de droit
        </p>
      </div>
    </div>
  );
}

export default RedBannerAlumni;
