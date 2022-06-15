import React, { useState, useEffect } from "react";

import Filters from "@components/Filters";
import UserCard from "@components/UserCard";
import Footer from "@components/Footer";

import axios from "axios";

function Listing() {
  const [rows, setRows] = useState([]);
  const [diplome, setDiplome] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/annuaire`)
      .then((res) => setRows(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    let url = `${import.meta.env.VITE_BACKEND_URL}/annuaire`;
    if (diplome) {
      url += `?diplome=${diplome}`;
    }
    axios
      .get(url)
      .then((res) => setRows(res.data))
      .catch((err) => console.error(err));
  }, [diplome]);

  // const getFilters = () => {
  //   axios
  //     .get("")
  //     .then((res) => {
  //       setFilters(res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  // useEffect(() => {
  //   getAlumnis();
  //   getFilters();
  // }, []);

  return (
    <>
      <Filters setDiplome={setDiplome} />
      {/* filters={filters} onChange={() => setFilters()}  */}
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
