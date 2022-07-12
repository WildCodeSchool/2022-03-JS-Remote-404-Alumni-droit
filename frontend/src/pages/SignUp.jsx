import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

import { TextField, Autocomplete } from "@mui/material";
import Switch from "@mui/material/Switch";
import { HiPlus, HiMinus } from "react-icons/hi";

import years from "@assets/years";

function SignUp() {
  const { register, control, handleSubmit } = useForm();
  const [checked, setChecked] = useState(true);
  const [diplomeData, setDiplomeData] = useState([]);
  const [professionData, setProfessionData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [diplomeInput, setDiplomeInput] = useState([true, false, false]);
  const [masterInput, setMasterInput] = useState([true, false, false]);

  const onSubmit = (data) => {
    console.warn(data);
    console.warn(checked);
  };

  const handleDiplomeInput = (index, type) => {
    const provDiplomeInput = [...diplomeInput];
    if (index < 2 && type === "plus") {
      provDiplomeInput[index + 1] = true;
    } else if (index > 0 && type === "minus") {
      provDiplomeInput[index] = false;
    }
    setDiplomeInput(provDiplomeInput);
  };

  const handleMasterInput = (index, type) => {
    const provMasterInput = [...masterInput];
    if (index < 2 && type === "plus") {
      provMasterInput[index + 1] = true;
    } else if (index > 0 && type === "minus") {
      provMasterInput[index] = false;
    }
    setMasterInput(provMasterInput);
  };

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

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

  const getMaster = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/master`)
      .then((res) => {
        setMasterData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getDiplome();
    getProfession();
    getMaster();
  }, []);

  return (
    <>
      <div className="w-[90%] md:w-[80%] lg:w-[80%] flex flex-col flex-wrap bg-zinc-100 rounded-lg shadow-md mx-auto p-4 mt-5 md:mt-10 border-2 h-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:mx-auto md:w-[95%] space-y-3"
        >
          <div className=" flex justify-center pb-6 lg:p-9">
            <h2 className="font-bold text-3xl text-red-800 text-center">
              Création de compte
            </h2>
          </div>

          <div className="lg:flex lg:flex-row lg:justify-between">
            {/* COLONNE 1 */}
            <div className="flex flex-col lg:flex lg:flex-col lg:w-[48%] space-y-3 lg:border lg:p-6 rounded">
              <div className="flex justify-center flex-col text-center">
                <p className="text-center text-red-800 font-bold text-xl lg:mb-5">
                  Champs obligatoires
                </p>
              </div>
              <Controller
                control={control}
                name="lastname"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Nom"
                    size="medium"
                    {...register("lastname", { required: true })}
                  />
                )}
              />
              <Controller
                control={control}
                name="firstname"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Prénom"
                    size="medium"
                    {...register("firstname", { required: true })}
                  />
                )}
              />
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    size="medium"
                    {...register("email", { required: true })}
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Mot de passe"
                    size="medium"
                    {...register("password", { required: true })}
                  />
                )}
              />
              <Controller
                control={control}
                name="confirmedPassword"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Confirmer mot de passe"
                    type="password"
                    size="medium"
                    {...register("confirmedPassword", { required: true })}
                  />
                )}
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
                        {/* key={Date.now()} */}
                        <Controller
                          control={control}
                          name={`diplome_${index}`}
                          render={({ field: { ref, onChange, ...field } }) => (
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
                              onChange={(_, data) => onChange(data.title)}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  {...field}
                                  label={`#${index + 1} Diplôme`}
                                  color="primary"
                                  inputRef={ref}
                                />
                              )}
                            />
                          )}
                        />
                        <Controller
                          control={control}
                          name={`diplomeYear_${index}`}
                          render={({ field: { ref, onChange, ...field } }) => (
                            <Autocomplete
                              disablePortal
                              id="combo-box-2"
                              options={years}
                              sx={{
                                width: "30%",
                              }}
                              onChange={(_, data) => onChange(data)}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  {...field}
                                  label="Année"
                                  color="primary"
                                  inputRef={ref}
                                />
                              )}
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
              <Controller
                control={control}
                name="profession"
                render={({ field: { ref, onChange, ...field } }) => (
                  <Autocomplete
                    disablePortal
                    id="combo-box-3"
                    options={professionData}
                    getOptionLabel={(option) =>
                      option.job.replace("&apos;E", "'É")
                    }
                    onChange={(_, data) => onChange(data.job)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        {...field}
                        label="Profession"
                        color="primary"
                        inputRef={ref}
                      />
                    )}
                  />
                )}
              />
              <Controller
                control={control}
                name="poste"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Poste actuel"
                    size="medium"
                    {...register("poste", { required: true })}
                  />
                )}
              />

              <div className="pt-10">
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  size="medium"
                >
                  <Typography size="medium">
                    Etat de votre profil : &nbsp;&nbsp; Privé
                  </Typography>
                  <Switch checked={checked} onChange={handleChange} />
                  <Typography>Public</Typography>
                </Stack>
              </div>

              <p className="flex text-left text-xs pb-6">
                <span>*&nbsp;</span>En mode privé, votre profil ne pourra être
                consulté que par les anciens diplômés inscrits et connectés à
                l’annuaire. Par défaut, le profil est visible par tous.
              </p>
            </div>
            {/* COLONNE 2 */}
            <div className="flex flex-col lg:flex lg:flex-col lg:w-[48%] space-y-3 lg:border lg:p-6 rounded">
              <h3 className="text-center font-bold text-xl text-gray-600 lg:mb-5">
                Champs optionnels
                {/* BLOC MASTER ANNEE */}
              </h3>
              <div className="flex flex-col lg:border lg:p-4 rounded">
                <p className="lg:text-sm text-center mb-6 ">
                  Votre cursus de Master :
                </p>
                {masterInput.map((masterIn, index) => {
                  if (masterIn) {
                    return (
                      <div className="flex flex-wrap justify-between mb-5">
                        <Controller
                          control={control}
                          name={`master_${index}`}
                          render={({ field: { ref, onChange, ...field } }) => (
                            <Autocomplete
                              disablePortal
                              id="combo-box-4"
                              options={masterData}
                              getOptionLabel={(option) =>
                                option.title.replace("&apos;E", "'É")
                              }
                              sx={{
                                width: "55%",
                                mb: 1.5,
                              }}
                              onChange={(_, data) => onChange(data.title)}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  {...field}
                                  label={`#${index + 1} Master`}
                                  color="primary"
                                  inputRef={ref}
                                />
                              )}
                            />
                          )}
                        />
                        <Controller
                          control={control}
                          name={`masterYear_${index}`}
                          render={({ field: { ref, onChange, ...field } }) => (
                            <Autocomplete
                              disablePortal
                              id="combo-box-5"
                              options={years}
                              sx={{
                                width: "30%",
                              }}
                              onChange={(_, data) => onChange(data)}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  {...field}
                                  label="Année"
                                  color="primary"
                                  inputRef={ref}
                                />
                              )}
                            />
                          )}
                        />
                        <button
                          type="button"
                          disabled={index === 2}
                          className="pb-3"
                          onClick={() => handleMasterInput(index, "plus")}
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
                          onClick={() => handleMasterInput(index, "minus")}
                        >
                          <HiMinus
                            size={20}
                            color={index === 0 ? "#d3d3d3" : "black"}
                          />
                        </button>
                        <Controller
                          control={control}
                          name={`masterName_${index}`}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              label="Entrer un master"
                              sx={{
                                width: "55%",
                                mb: 1.5,
                              }}
                              size="medium"
                            />
                          )}
                        />
                        <Controller
                          control={control}
                          name={`masterLocation_${index}`}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              label="Université d'obtention"
                              sx={{
                                width: "100%",
                              }}
                              size="medium"
                              {...register(`masterLocation_${index}`)}
                            />
                          )}
                        />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
              {/* CHAMPS OPTIONNELS */}
              <Controller
                control={control}
                name="employeur"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Employeur actuel"
                    size="medium"
                    {...register("employeur")}
                  />
                )}
              />
              <Controller
                control={control}
                name="emailpro"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email professionnel"
                    size="medium"
                    {...register("emailpro")}
                  />
                )}
              />
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Téléphone"
                    size="medium"
                    {...register("phone")}
                  />
                )}
              />
              <Controller
                control={control}
                name="siteweb"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Site web"
                    size="medium"
                    {...register("siteweb")}
                  />
                )}
              />
              <Controller
                control={control}
                name="facebook"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Facebook"
                    size="medium"
                    {...register("facebook")}
                  />
                )}
              />
              <Controller
                control={control}
                name="twitter"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Twitter"
                    size="medium"
                    {...register("twitter")}
                  />
                )}
              />
              <Controller
                control={control}
                name="instagram"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Instagram"
                    size="medium"
                    {...register("instagram")}
                  />
                )}
              />
              <Controller
                control={control}
                name="bio"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Votre parcours en quelques mots"
                    size="large"
                    multiline
                    rows={6}
                    {...register("bio")}
                  />
                )}
              />
            </div>
          </div>
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
