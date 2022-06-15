import React, { useState, useEffect } from "react";

import Filters from "@components/Filters";
import UserCard from "@components/UserCard";
import Footer from "@components/Footer";

import axios from "axios";

function Listing() {
  const [rows, setRows] = useState([]);
  const [diplome, setDiplome] = useState();
  const [profession, setProfession] = useState();
  const [years, setYears] = useState();

  useEffect(() => {
    let url = `${import.meta.env.VITE_BACKEND_URL}/annuaire`;
    if (diplome) {
      url += `?diplome=${diplome}`;
    }
    if (profession) {
      url += `?diplome=${profession}`;
    }
    if (years) {
      url += `?years=${years}`;
    }
    axios
      .get(url)
      .then((res) => setRows(res.data))
      .catch((err) => console.error(err));
  }, [diplome]);

  return (
    <>
      <Filters
        setDiplome={setDiplome}
        setProfession={setProfession}
        setYears={setYears}
      />
      <div className="flex flex-wrap justify-center p-2">
        {rows.map((row) => (
          <UserCard
            lastname={row.lastname}
            firstname={row.firstname}
            photo={row.photo}
            job={row.profession_id1}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Listing;
