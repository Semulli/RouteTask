import React from "react";
import "./home.css";
import Banner from "../../assets/desktopcom.jpg";
import Layout from "../Layout";
import { ROUTER } from "../../Constants/Router";
import { useNavigate } from "react-router-dom";
const Home = () => {
const navigate = useNavigate()
  return (
    <Layout>
      <div className="homeImg" style={{ backgroundImage: `url(${Banner})` }}>
        <button className="btn" onClick={()=>{navigate(ROUTER.Product)}}>Order</button>
      </div>
    </Layout>
  );
};

export default Home;
