import React from "react";

import { TextField, Autocomplete } from "@mui/material";

const Diplome = [
  { label: "Diplôme du Collège de Droit" },
  { label: "Certificat de l'École de Droit" },
  { label: "Diplôme de l'École de Droit" },
];

const Année = [
  { label: "1990" },
  { label: "1991" },
  { label: "1992" },
  { label: "1993" },
];

const Profession = [
  { label: "Administrateur judiciaire" },
  { label: "Avocat" },
  { label: "Avocat au Conseil d'Etat et à la Cour de cassation" },
  { label: "Commissaire de justice" },
  { label: "Etudiant" },
  { label: "Juriste d’entreprise" },
  { label: "Magistrat" },
  { label: "Notaire" },
  { label: "Officier" },
  { label: "Universitaire" },
  { label: "Autres professions juridiques" },
  { label: "Autres professions" },
];

function Filters() {
  return (
    <>
      <div className="flex flex-col items-center space-y-2 m-3 md:flex-row justify-center space-x-2">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Diplome}
          sx={{ width: 300, mt: 1 }}
          // label={filters.diplome}
          renderInput={(params) => (
            <TextField {...params} label="Diplôme" color="primary" />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Profession}
          sx={{ width: 300 }}
          // label={filters.profession}
          renderInput={(params) => (
            <TextField {...params} label="Profession" color="primary" />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Année}
          sx={{ width: 300 }}
          // label={filters.annee}
          renderInput={(params) => (
            <TextField {...params} label="Année" color="primary" />
          )}
        />
      </div>
      <div className="flex justify-center m-3">
        <TextField
          id="filled-basic"
          label="Recherche par nom"
          variant="filled"
          sx={{ width: 300 }}
        />
      </div>
    </>
  );
}

export default Filters;
