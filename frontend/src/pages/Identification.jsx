import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";

import ExportContextUser from "../contexts/UserContext";
// import { data } from "autoprefixer";

function Identification() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState();
  const { setUser } = useContext(ExportContextUser.UserContext);

  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMsg("Veuillez renseigner vos identifiants");
      return;
    }
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, { email, password })
      .then((res) => {
        setUser(res.data);
        navigate(`/profile/${res.data.id}`);
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <form className="flex flex-col justify-center mb-10 w-[100%] md:w-[70%] lg:w-[50%]  mx-auto text-center space-y-4 rounded-md shadow-md border-2 bg-zinc-100 m-3 mt-[2.5rem] p-3">
        <p>Vous avez un compte</p>
        <label htmlFor="Email">
          <input
            type="email"
            placeholder="Email"
            className="p-3 w-[90%]"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="Password">
          <input
            type="password"
            placeholder="Mot de passe"
            className="p-3 w-[90%]"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <div className="px-5 mt-3 flex flex-row justify-between">
          <p>Mot de passe oublié ?</p>
          <button
            className="lg:m-2 xl:m-1 text-right text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-700 font-medium rounded-lg text-sm lg:text-base xl:text-lg px-5 py-2.5 inline-flex items-right dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            type="button"
            onClick={(e) => handleClick(e)}
          >
            {msg && <p>{msg}</p>}
            <p>Se connecter</p>
            {/* se connecter à rendre propre */}
          </button>
        </div>
      </form>
      <p className="text-center mt-50">Vous n’avez pas de compte ?</p>
      <div className="flex justify-center">
        <button
          type="button"
          className="m-14 md:m-10 lg:m-14 xl:m-14 text-center mx-auto text-red-700 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm lg:text-base xl:text-lg mt-5 px-5 py-2.5 inline-flex items-center dark:bg-gray-200 dark:hover:bg-gray-200 dark:focus:ring-gray-200"
        >
          <p>Créer votre compte</p>
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Identification;
