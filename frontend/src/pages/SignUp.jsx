import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

import MasterFilter from "@components/MasterFilter";
import { TextField, Autocomplete } from "@mui/material";
// import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { HiPlus, HiMinus } from "react-icons/hi";

function SignUp() {
  const {
    // register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [diplomeInput, setDiplomeInput] = useState([true, false, false]);

  const handleDiplomeInput = (index, type) => {
    const provDiplomeInput = [...diplomeInput];
    if (index < 2 && type === "plus") {
      provDiplomeInput[index + 1] = true;
    } else if (index > 0 && type === "minus") {
      provDiplomeInput[index] = false;
    }
    setDiplomeInput(provDiplomeInput);
  };

  const onSubmit = (data) => console.warn(data);
  console.warn(errors);

  const [diplomeData, setDiplomeData] = useState([]);
  const [professionData, setProfessionData] = useState([]);
  const [promotionData, setPromotionData] = useState([]);

  const getDiplome = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/diplome`)
      .then((res) => {
        setDiplomeData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getProfession = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/profession`)
      .then((res) => {
        setProfessionData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getPromotion = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/promotion`)
      .then((res) => {
        const years = res.data.map((el) => ({
          year: el.year.toString(),
          id: el.year,
        }));
        setPromotionData(years);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getDiplome();
    getProfession();
    getPromotion();
  }, []);

  // const AntSwitch = styled(Switch)(({ theme }) => ({
  //   width: 28,
  //   height: 16,
  //   padding: 0,
  //   display: "flex",
  //   "&:active": {
  //     "& .MuiSwitch-thumb": {
  //       width: 15,
  //     },
  //     "& .MuiSwitch-switchBase.Mui-checked": {
  //       transform: "translateX(9px)",
  //     },
  //   },
  //   "& .MuiSwitch-switchBase": {
  //     padding: 2,
  //     "&.Mui-checked": {
  //       transform: "translateX(12px)",
  //       color: "#fff",
  //       "& + .MuiSwitch-track": {
  //         opacity: 1,
  //         backgroundColor:
  //           theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
  //       },
  //     },
  //   },
  //   "& .MuiSwitch-thumb": {
  //     boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
  //     width: 12,
  //     height: 12,
  //     borderRadius: 6,
  //     transition: theme.transitions.create(["width"], {
  //       duration: 200,
  //     }),
  //   },
  //   "& .MuiSwitch-track": {
  //     borderRadius: 16 / 2,
  //     opacity: 1,
  //     backgroundColor:
  //       theme.palette.mode === "dark"
  //         ? "rgba(255,255,255,.35)"
  //         : "rgba(0,0,0,.25)",
  //     boxSizing: "border-box",
  //   },
  // }));

  return (
    <>
      <div className="w-[90%] md:w-[80%] lg:w-[80%] flex flex-col flex-wrap bg-zinc-100 rounded-lg shadow-md mx-auto p-4 mt-5 md:mt-10 border-2 h-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:mx-auto md:w-[95%] space-y-3"
        >
          <h2 className="font-bold text-3xl text-red-800 text-align">
            Création de compte
          </h2>
          <div className="lg:flex lg:flex-row lg:justify-between">
            {/* COLONNE 1 */}
            <div className="flex flex-col lg:flex lg:flex-col lg:w-[48%] space-y-3 lg:border lg:p-6 rounded">
              <div className="flex justify-center flex-col text-center">
                <p className="text-center text-red-800 font-bold text-xl lg:mb-5">
                  Champs obligatoires
                </p>
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
              <div className="flex flex-col lg:border lg:p-4 rounded">
                <p className="lg:text-sm text-center mt-3 mb-6">
                  Votre cursus au sein du Collège et de l’École de droit :
                </p>
                {diplomeInput.map((diplomeIn, index) => {
                  if (diplomeIn) {
                    return (
                      <div className="flex justify-between">
                        <Autocomplete
                          disablePortal
                          id="combo-box-1"
                          options={diplomeData}
                          getOptionLabel={(option) =>
                            option.title.replace("&apos;E", "'É")
                          }
                          sx={{
                            width: "55%",
                            mb: 1.5,
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label={`#${index + 1} Diplôme`}
                              color="primary"
                            />
                          )}
                        />
                        <Autocomplete
                          disablePortal
                          id="combo-box-2"
                          options={promotionData}
                          getOptionLabel={(option) => option.year}
                          sx={{
                            width: "30%",
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Année"
                              color="primary"
                            />
                          )}
                        />
                        <button
                          type="button"
                          disabled={index === 2}
                          className="pb-3"
                          onClick={() => handleDiplomeInput(index, "plus")}
                        >
                          <HiPlus
                            size={20}
                            color={index === 2 ? "#d3d3d3" : "black"}
                          />
                        </button>
                        <button
                          type="button"
                          disabled={index === 0}
                          className="pb-3"
                          onClick={() => handleDiplomeInput(index, "minus")}
                        >
                          <HiMinus
                            size={20}
                            color={index === 0 ? "#d3d3d3" : "black"}
                          />
                        </button>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
              <Autocomplete
                disablePortal
                id="combo-box-3"
                options={professionData}
                getOptionLabel={(option) => option.job.replace("&apos;E", "'É")}
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

              <div className="mt-20">
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  size="medium"
                >
                  <Typography size="medium">
                    Etat de votre profil : Privé
                  </Typography>
                  <Switch />
                  {/* <AntSwitch
                    defaultChecked
                    inputProps={{ "aria-label": "ant design" }}
                  /> */}
                  <Typography>Public</Typography>
                </Stack>
              </div>

              <p className="flex text-left text-xs pb-6">
                <span>*&nbsp;</span>En mode privé, votre profil ne pourra être
                consulté que par les anciens diplômés inscrits et connectés à
                l’annuaire. À défaut, le profil est visible par tous.
              </p>
            </div>
            {/* COLONNE 2 */}
            <div className="flex flex-col lg:flex lg:flex-col lg:w-[48%] space-y-3 lg:border lg:p-6 rounded">
              <h3 className="text-center font-bold text-xl text-gray-600 lg:mb-5">
                Champs optionnels
                {/* BLOC MASTER ANNEE */}
              </h3>
              <MasterFilter />
              <TextField label="Employeur actuel" size="medium" />
              <TextField
                label="Email professionnel"
                type="email"
                size="medium"
              />
              <TextField label="Téléphone" type="tel" size="medium" />
              <TextField label="Site Web" size="medium" />
              <TextField label="Facebook" size="medium" />
              <TextField label="Twitter" size="medium" />
              <TextField label="Instagram" size="medium" />
              <TextField
                label="Votre parcours en quelques mots"
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
        L’Association du Collège et de l’École de droit
        (cdd.edd.paris2@gmail.com) n’est pas responsable de l’utilisation par
        des tiers des données rendues publiquement accessibles sur ce site par
        les utilisateurs. L’Association est susceptible de traiter ces données
        pour tenir à jour ses registres et établir des statistiques. Pour en
        savoir plus sur la gestion de vos données et pour exercer vos
        droits,&nbsp;
        <Link to="/RGPD" className="underline">
          cliquez ici
        </Link>
        .
      </p>
    </>
  );
}

export default SignUp;
