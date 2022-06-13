import React from "react";
import Footer from "../components/Footer";

function SignUp() {
  return (
      <>

      <div className="flex flex-col justify-center text-center space-y-4 rounded-md shadow-md border-2 bg-zinc-100 m-3 mt-[2.5rem] p-3">
        <p>Déjà inscrit</p>
        <label htmlFor="Email" >
          <input
            type="text"
            placeholder="Email"
            className="p-3 w-[90%]"
          />
        </label>
        <label htmlFor="MDP">
          <input
            type="text"
            placeholder="MDP"
            className="p-3 w-[90%]"
          />
        </label>
        <div className="px-5 mt-3 flex flex-row justify-around">
        <p>Mot de passe oublié</p>
        <button
        type="button"
        className="text-center mx-auto text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-700 font-medium rounded-lg text-sm lg:text-base xl:text-lg px-5 py-2.5 inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
      <p>Login</p>
      </button>
    </div>
     </div>
    <p className="text-center mt-20">Vous n’avez pas de compte ?</p>
    <div className="flex justify-center">
    <button
    type="button"
    className="text-center mx-auto text-red-700 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm lg:text-base xl:text-lg mt-5 px-5 py-2.5 inline-flex items-center dark:bg-gray-200 dark:hover:bg-gray-200 dark:focus:ring-gray-200"
  >
   <p>Créer votre compte</p>
  
  </button></div>
      <Footer />
</>
  );
}
export default SignUp;
