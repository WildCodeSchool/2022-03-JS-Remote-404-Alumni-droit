import React from "react";
// import { useState, useEffect } from 'react';
import Filters from "@components/Filters";
import UserCard from "@components/UserCard";

function Listing() {
  // const [alumnis, setAlumnis] = useState([]);

  // useEffect(() => {
  //   axios.get("")
  //     .then(res => setAlumnis(res.data))
  //     .catch(err => console.error(err))
  // }, [])

  return (
    <>
      <Filters />
      <div className="flex flex-wrap justify-center p-2">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  );
}

export default Listing;
