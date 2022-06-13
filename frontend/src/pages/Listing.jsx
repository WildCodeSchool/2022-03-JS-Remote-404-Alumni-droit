import React from "react";
// import axios from "axios";

// import { useState, useEffect } from 'react';
import Filters from "@components/Filters";
import UserCard from "@components/UserCard";
import Footer from "@components/Footer";

function Listing() {
  // const [alumnis, setAlumnis] = useState([]);

  // useEffect(() => {
  //   axios.get("")
  //     .then(res => setAlumnis(res.data))
  //     .catch(err => console.error(err))
  // }, [])

  // const [filters, setFilters] = useState();
  return (
    <>
      <Filters />
      {/* filters={filters} onChange={() => setFilters}  */}
      <div className="flex flex-wrap justify-center p-2">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      <Footer />
    </>
  );
}

export default Listing;
