import React from "react";
import "../styles/Footer.css";
import "../App.css";
import logoFacebook from "../assets/facebook.png";
import logoLinkedin from "../assets/linkedin.png";
import logoTwitter from "../assets/twitter.png";
import logoInstagram from "../assets/instagram.png";
import logoOfficiel from "../assets/officiel.png";

function Footer() {
  return (
    <div>
      <div className="footer flex flex-col items-center">
        {" "}
        {/* cadre général */}
        <div className="img-logo-officiel ml-20 sm:ml-52 mr-20 sm:mr-52">
          {" "}
          {/* logo officiel */}
          <img src={logoOfficiel} alt="officiel" />
        </div>{" "}
        {/* logo officiel */}
        <div className="global-links">
          {" "}
          {/* cadre général / global links */}
          {/* <div className="links"> cadre général / global links / links */}
          <p className="footer-paragraph">
            Suivez-nous sur les réseaux sociaux :
          </p>
        </div>
        {/* cadre général / global links*/}
        <div className="images flex flex-row space-x-5">
          {/* cadre général / images */}
          <div className="img-social-media w-10">
            <img src={logoLinkedin} alt="logo linkedin" />
          </div>
          <div className="img-social-media w-10">
            <img src={logoFacebook} alt="logo facebook" />
          </div>
          <div className="img-social-media w-10">
            <img src={logoTwitter} alt="logo twitter" />
          </div>
          <div className="img-social-media w-10">
            <img src={logoInstagram} alt="logo instagram" />
          </div>
        </div>{" "}
        {/* cadre général / images */}
        <div className="links">
          <p className="footer-paragraph">Mentions légales</p>
        </div>
      </div>{" "}
      {/* cadre général */}
    </div>
  );
}

export default Footer;
