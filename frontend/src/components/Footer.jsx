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
      <div className="footer flex flex-col items-center">
        {/* cadre général */}
        <div className="img-logo-officiel flex-col lg:flex-row ml-20 sm:ml-52 mr-20 sm:mr-52">
          {/* logo officiel */}
          <img src={logoOfficiel} alt="officiel" />
        </div>
        {/* logo officiel */}
        <div className="global-links">
          {/* cadre général / global links */}
          {/* <div className="links"> cadre général / global links / links */}
          <p className="footer-paragraph">
            Suivez-nous sur les réseaux sociaux :
          </p>
        </div>
        {/* cadre général / global links */}
        <div className="images flex flex-row space-x-5">
          {/* cadre général / images */}
          <div className="img-social-media w-10">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/coll%C3%A8ge-de-droit-universit%C3%A9-paris-ii-panth%C3%A9on-assas/"
            >
              <img src={logoLinkedin} alt="logo linkedin" />
            </a>
          </div>
          <div className="img-social-media w-10">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/CddAssas"
            >
              <img src={logoTwitter} alt="logo twitter" />
            </a>
          </div>
          <div className="img-social-media w-10">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/aecdd.assas/?__tn__=%2Cd%2CP-R&eid=ARDiEiQUjTLsqAJiv3-O5jXDEqSGXn9HX3R1KFN_pbvtAuOYe4y8y7N5-mykIkf_OTnPyninYcSnAu5z"
            >
              <img src={logoFacebook} alt="logo Facebook" />
            </a>
          </div>
          <div className="img-social-media w-10">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/collegededroitassas/"
            >
              <img src={logoInstagram} alt="logo Instagram" />
            </a>
          </div>
        </div>
        {/* cadre général / images */}
        <div className="links">
          <Link to="RGPD">
            Mentions légales
            <p src="./pages/RGPD" alt="logo" />
          </Link>
        </div>
      </div>
      {/* cadre général */}
    </div>
  );
}

export default Footer;
