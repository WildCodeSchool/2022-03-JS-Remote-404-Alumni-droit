import React from "react";
import "../styles/Footer.css";
import "../App.css";
import { Link } from "react-router-dom";
import logoFacebook from "../assets/facebook.png";
import logoLinkedin from "../assets/linkedin.png";
import logoTwitter from "../assets/twitter.png";
import logoInstagram from "../assets/instagram.png";
import logoOfficiel from "../assets/officiel.png";

function Footer() {
  return (
    <div>
      <div className="footer flex flex-col justify-between md:flex-row items-center p-8 md:px-16 lg:px-[10rem] xl:px-[15rem]">
        {/* cadre général */}
        <img
          src={logoOfficiel}
          alt="officiel"
          className="w-[80%] md:w-[50%] lg:w-[47%] mb-4"
        />
        {/* GROUPES TEXTE ET GROUPE LOGOS RESEAUX SOCIAUX */}
        <div className="images flex flex-col">
          <div className="global-links">
            <p className="footer-paragraph mb-2">
              Suivez-nous sur les réseaux sociaux :
            </p>
          </div>
          <div className="flex flex-col justify-center w-60 lg:w-70">
            {/* LOGOS RESEAUX SOCIAUX */}
            <div className="flex flex-row mx-auto w-[70%] lg:w-[80%] xl:w-[90%] space-x-2">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/coll%C3%A8ge-de-droit-universit%C3%A9-paris-ii-panth%C3%A9on-assas/"
              >
                <img src={logoLinkedin} alt="logo linkedin" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/CddAssas"
              >
                <img src={logoTwitter} alt="logo twitter" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://fr-fr.facebook.com/cdd.edd.assas/"
              >
                <img src={logoFacebook} alt="logo Facebook" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/collegeecolededroitassas/"
              >
                <img src={logoInstagram} alt="logo Instagram" />
              </a>
            </div>
            {/* MENTIONS LEGALES */}
            <div className="links mt-2 mx-auto">
              <Link to="/RGPD">
                Mentions légales
                <p src="./pages/RGPD" alt="logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
