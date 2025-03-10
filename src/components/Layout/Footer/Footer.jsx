import React from "react";
import "./footer.css";
import { BsFacebook, BsLinkedin, BsWhatsapp , BsInstagram , BsTwitter} from "react-icons/bs";
import { ImGoogle3 , ImYoutube} from "react-icons/im";


const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <BsFacebook />
        <BsLinkedin />
        <BsWhatsapp />
        <BsInstagram/>
        <BsTwitter/>
        <ImGoogle3/>
        <ImYoutube/>  
      </div>

      <p>Address : Baku My plaza</p>
    </div>
  );
};

export default Footer;
