import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Autocomplete } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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

function SignUp({ setDiplome, setProfession, setYears }) {
  const {
    // register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.warn(data);
  console.warn(errors);

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  return (
    <>
      <div className="w-[90%] md:w-[80%] lg:w-[80%] flex flex-col flex-wrap bg-zinc-100 rounded-lg shadow-md mx-auto p-4 mt-5 md:mt-10 border-2 h-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:mx-auto md:w-[95%] space-y-3"
        >
          <div className="lg:flex lg:flex-row lg:justify-between">
            {/* COLONNE 1 */}
            <div className="flex flex-col lg:flex lg:flex-col lg:w-[48%] space-y-3">
              <div className="flex justify-center flex-col text-center mb-4">
                <h2 className="font-bold text-2xl text-red-800">
                  Création de compte
                </h2>
                <p className="text-xs">champs obligatoires</p>
              </div>
              <TextField label="Nom" size="medium" />
              <TextField label="Prénom" size="medium" />
              <TextField label="Email" type="email" size="medium" />
              <TextField label="Mot de passe" type="password" size="medium" />
              <TextField
                label="Confirmer mot de passe"
                type="password"
                size="medium"
              />
              {/* BLOC DIPLOME ANNEE */}
              <div className="flex flex-col">
                {/* DIPLOME 1 */}
                <p className="text-xs text-center mb-2">
                  Votre cursus au sein du Collège et de l’Ecole de droit :
                </p>
                <div className="flex justify-between flex-wrap">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Diplome}
                    sx={{
                      width: "70%",
                      mb: 1.5,
                    }}
                    onChange={(e, diplome) => setDiplome(diplome.id)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Diplôme 1"
                        color="primary"
                      />
                    )}
                  />
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Years}
                    sx={{
                      width: "28%",
                      mb: 1,
                    }}
                    onChange={(e, years) => setYears(years.id)}
                    renderInput={(params) => (
                      <TextField {...params} label="Année" color="primary" />
                    )}
                  />
                </div>
                {/* DIPLOME 2 */}
                <div className="flex justify-between">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Diplome}
                    sx={{
                      width: "70%",
                      mb: 1.5,
                    }}
                    onChange={(e, diplome) => setDiplome(diplome.id)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Diplôme 2"
                        color="primary"
                      />
                    )}
                  />
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Years}
                    sx={{
                      width: "28%",
                    }}
                    onChange={(e, years) => setYears(years.id)}
                    renderInput={(params) => (
                      <TextField {...params} label="Année" color="primary" />
                    )}
                  />
                </div>
                {/* DIPLOME 3 */}
                <div className="flex justify-between">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Diplome}
                    sx={{
                      width: "70%",
                    }}
                    onChange={(e, diplome) => setDiplome(diplome.id)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Diplôme 3"
                        color="primary"
                      />
                    )}
                  />
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Years}
                    sx={{
                      width: "28%",
                    }}
                    onChange={(e, years) => setYears(years.id)}
                    renderInput={(params) => (
                      <TextField {...params} label="Année" color="primary" />
                    )}
                  />
                </div>
              </div>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Profession}
                onChange={(e, profession) => setProfession(profession.id)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Profession"
                    color="primary"
                    size="medium"
                  />
                )}
              />
              <TextField label="Profession actuelle" size="medium" />
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                size="medium"
              >
                <Typography size="medium">
                  Etat de votre profile : privé
                </Typography>
                <AntSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
                <Typography>publique</Typography>
              </Stack>
            </div>
            {/* COLONNE 2 */}
            <div className="flex flex-col lg:flex lg:flex-col lg:w-[48%] space-y-3">
              <h3 className="text-center font-bold text-2xl text-gray-600 lg:mb-8">
                Champs optionnels
              </h3>
              <TextField label="Employeur actuel" size="medium" />
              <TextField
                label="Email professionnel"
                type="email"
                size="medium"
              />
              <TextField label="Téléphone" type="tel" size="medium" />
              <TextField label="URL Pro" size="medium" />
              <TextField label="Facebook" size="medium" />
              <TextField label="Twitter" size="medium" />
              <TextField label="Instagram" size="medium" />
              <TextField
                label="Votre parcours professionnel"
                size="large"
                multiline
                rows={6}
              />
            </div>
          </div>
          {/* CHAMPS OPTIONNELS */}
          <div className="flex justify-end">
            <input
              type="submit"
              className="text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none
                focus:ring-red-700 font-medium rounded-lg text-sm lg:text-base xl:text-lg
                my-2 px-5 py-2.5 inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            />
          </div>
        </form>
      </div>
      <p className="w-[70%] text-gray-400 text-sm mx-auto my-4">
        « L’Association du Collège et de l’Ecole de droit
        (cdd.edd.paris2@gmail.com) n’est pas responsable de l’utilisation par
        des tiers des données rendues publiquement accessibles sur ce site par
        les utilisateurs. L’Association est susceptible de traiter ces données
        pour tenir à jour ses registres et établir des statistiques. Pour en
        savoir plus sur la gestion de vos données et pour exercer vos droits,
        cliquez ici.
      </p>
    </>
  );
}

export default SignUp;
