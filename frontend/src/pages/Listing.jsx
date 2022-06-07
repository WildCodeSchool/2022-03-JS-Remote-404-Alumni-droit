import React from "react";

// import { useState, useEffect } from 'react';

import UserCard from "@components/UserCard";

function Listing() {
  // const [alumnis, setAlumnis] = useState([]);

  // useEffect(() => {
  //   axios.get("")
  //     .then(res => setAlumnis(res.data))
  //     .catch(err => console.error(err))
  // }, [])

  return (
    <div className="flex flex-wrap justify-center p-2">
      {/* MAIN */}
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}

export default Listing;
