import React from "react";

import { TextField, Autocomplete } from "@mui/material";

const Diplomes = [
  { label: "Diplôme du Collège de Droit" },
  { label: "Certificat de l'École de Droit" },
  { label: "Diplôme de l'École de Droit" },
];

function Filters() {
  return (
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
    </div>
  );
}

export default Filters;
