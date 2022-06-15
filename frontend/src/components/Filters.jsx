import React from "react";
import { TextField, Autocomplete } from "@mui/material";

const Diplome = [
  { label: "Diplôme du Collège de Droit", id: 1 },
  { label: "Certificat de l'École de Droit", id: 2 },
  { label: "Diplôme de l'École de Droit", id: 3 },
];

const Years = [
  { label: "1990", id: 1 },
  { label: "1991", id: 2 },
  { label: "1992", id: 3 },
  { label: "1993", id: 4 },
];

const Profession = [
  { label: "Administrateur judiciaire", id: 1 },
  { label: "Avocat", id: 2 },
  { label: "Avocat au Conseil d'Etat et à la Cour de cassation", id: 3 },
  { label: "Commissaire de justice", id: 4 },
  { label: "Etudiant", id: 5 },
  { label: "Fonctionnaire", id: 6 },
  { label: "Juriste d’entreprise", id: 7 },
  { label: "Magistrat", id: 8 },
  { label: "Notaire", id: 9 },
  { label: "Officier", id: 10 },
  { label: "Universitaire", id: 11 },
  { label: "Autres professions juridiques", id: 12 },
  { label: "Autres professions", id: 13 },
];

function Filters({ setDiplome, setProfession, setYears, setSearch }) {
  return (
    <>
      <div className="flex flex-col items-center mt-10 md:flex-row justify-center">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Diplome}
          sx={{
            width: 300,
            mb: 1,
            "@media screen and (min-width: 48em)": {
              mr: 1,
            },
          }}
          onChange={(e, diplome) => setDiplome(diplome.id)}
          renderInput={(params) => (
            <TextField {...params} label="Diplôme" color="primary" />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Profession}
          sx={{
            width: 300,
            mb: 1,
            "@media screen and (min-width: 48em)": {
              mr: 1,
            },
          }}
          onChange={(e, profession) => setProfession(profession.id)}
          renderInput={(params) => (
            <TextField {...params} label="Profession" color="primary" />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Years}
          sx={{
            width: 300,
            mb: 1,
            "@media screen and (min-width: 48em)": {
              mr: 1,
            },
          }}
          onChange={(e, years) => setYears(years.id)}
          renderInput={(params) => (
            <TextField {...params} label="Année" color="primary" />
          )}
        />
      </div>
      <div className="flex justify-center m-2">
        <TextField
          id="filled-basic"
          label="Recherche par nom"
          variant="filled"
          sx={{
            width: 300,
            "@media screen and (min-width: 48em)": {
              width: 400,
            },
          }}
          // value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
}

export default Filters;
