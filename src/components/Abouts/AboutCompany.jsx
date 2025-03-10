import React from "react";
import Port from "../../assets/com.jpg";

const AboutCompany = () => {
  return (
    <div className="flex">
      <div className="flex column">
        <h1 className="menuTitle">About Company</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          minima qui porro.
        </p>
        <img src={Port} alt="port" className="imgAbout" />
      </div>
    </div>
  );
};

export default AboutCompany;
