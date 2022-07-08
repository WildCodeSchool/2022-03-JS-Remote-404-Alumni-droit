import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ExportContextUser from "../contexts/UserContext";

import officiel from "../assets/officiel.png";

function Navbar() {
  const { user } = useContext(ExportContextUser.UserContext);
  return (
    <div className="flex flex-row justify-between bg-gray-200 h-[4.5rem] mb-3 p-3 px-5 md:px-[2.5rem] lg:px-[5rem] xl:px-[10rem]">
      <img src={officiel} alt="logo" className="h-full" />
      {user ? (
        <img
          src={user.image_url}
          alt={user.image_alt}
          className="h-full rounded-full"
        />
      ) : (
        <div>
          <Link to="/identification">Se connecter</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
