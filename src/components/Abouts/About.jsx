import React from "react";
import AboutCompany from "./AboutCompany";
import AboutProducts from "./AboutProducts";
import Port from "../../assets/port.jpg";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./about.css";

import Layout from "../Layout";

const About = () => {
  const location = useLocation();
  return (
    <Layout>
      <div className="about">
        <h1 style={{ marginTop: "-18px" }}>Learn About Us</h1>
        <div
          className="aboutTop"
          style={{
            backgroundImage: `url(${Port})`,
            height: "60vh",
            marginTop: "12px",
            marginBottom: "24px",
          }}
        ></div>
        <div className="flex">
          <Link
            to="company"
            className={location.pathname === "/about/company" ? "active" : ""}
          >
            About Company
          </Link>

          <Link
            to="products"
            className={location.pathname === "/about/products" ? "active" : ""}
          >
            About Products
          </Link>
        </div>

        <div>
          <Routes>
            <Route path="company" element={<AboutCompany />} />
            <Route path="products" element={<AboutProducts />} />
          </Routes>
        </div>
      </div>
    </Layout>
  );
};

export default About;
