import React, { useState, useEffect } from "react";

import Filters from "@components/Filters";
import UserCard from "@components/UserCard";
import Footer from "@components/Footer";
import RedBannerAlumni from "@components/RedBannerAlumni";

import axios from "axios";

function Listing() {
  const [rows, setRows] = useState([]);
  const [diplome, setDiplome] = useState("");
  const [profession, setProfession] = useState("");
  const [years, setYears] = useState("");
  const [search, setSearch] = useState("");

  function urlParams(url) {
    return url.includes("?") ? "&" : "?";
  }

  useEffect(() => {
    let url = `${import.meta.env.VITE_BACKEND_URL}/annuaire`;
    if (diplome) {
      url += `${urlParams(url)}diplome=${diplome}`;
    }
    if (profession) {
      url += `${urlParams(url)}profession=${profession}`;
    }
    if (years) {
      url += `${urlParams(url)}years=${years}`;
    }
    axios
      .get(url)
      .then((res) => setRows(res.data))
      .catch((err) => console.error(err));
  }, [diplome, profession, years]);

  return (
    <>
      <Filters
        setDiplome={setDiplome}
        setProfession={setProfession}
        setYears={setYears}
        setSearch={setSearch}
      />
      <RedBannerAlumni />
      <div className="flex flex-wrap justify-center p-2 md:px-[1rem] lg:px-[1.5rem] xl:px-[7rem]">
        {rows
          .filter(
            (row) =>
              row.lastname.toLowerCase().includes(search.toLowerCase()) ||
              row.firstname.toLowerCase().includes(search.toLowerCase())
          )
          .map((row) => (
            <UserCard
              lastname={row.lastname}
              firstname={row.firstname}
              photo={row.photo}
              job={row.job}
              key={row.id}
              userId={row.id}
              diplomes={row.diplomes}
              isValid={row.is_valid}
            />
          ))}
      </div>
      <Footer />
    </>
  );
}

export default Listing;
