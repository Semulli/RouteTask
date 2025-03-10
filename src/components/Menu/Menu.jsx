import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import "./menu.css";
import Layout from "../Layout";
import { getData } from "../../api/getRequest";
const Menu = () => {
  const [data, setData] = useState([]);

  const handleData = async () => {
    const response = await getData();
    setData(response.products);
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <Layout>
      <div className="menu">
        <h1 className="menuTitle">Our Products</h1>
        <div className="menuList">
          <MenuCard data={data} />
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
