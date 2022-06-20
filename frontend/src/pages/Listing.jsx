import React, { useState, useEffect } from "react";

import Filters from "@components/Filters";
import UserCard from "@components/UserCard";
import Footer from "@components/Footer";

import axios from "axios";

function Listing() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/annuaire`)
      .then((res) => setRows(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Filters />
      <div className="flex flex-wrap justify-center p-2">
        {rows.map((row) => (
          <UserCard
            key={row.id}
            userid={row.user_id}
            lastname={row.lastname}
            firstname={row.firstname}
            photo={row.photo}
            job={row.profession_id}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Listing;
