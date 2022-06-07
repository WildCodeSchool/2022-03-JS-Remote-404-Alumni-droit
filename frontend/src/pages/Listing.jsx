import React from "react";
// import { useState, useEffect } from 'react';

import UserCard from "@components/UserCard";
import { TextField, Autocomplete } from "@mui/material";


const Diplomes = [
  { label: "Diplôme du Collège de Droit" },
  { label: "Certificat de l'École de Droit" },
  { label: "Diplôme de l'École de Droit" },
];

const Years = [
  { label: "1990" },
  { label: "1991" },
  { label: "1992" },
  { label: "1993" },
];



function Listing() {
  // const [alumnis, setAlumnis] = useState([]);

  // useEffect(() => {
  //   axios.get("")
  //     .then(res => setAlumnis(res.data))
  //     .catch(err => console.error(err))
  // }, [])
  
  return (
    <>
      <div className="flex justify-center m-3">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Diplomes}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Diplômes" color="primary" />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Years}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Années" color="primary" />
          )}
        />
      </div>
      <div className="flex justify-center m-3">
        <TextField
          id="filled-basic"
          label="Recherche par nom"
          variant="filled"
          sx={{ width: 600 }}
        />
      </div>
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

export default Filters;
