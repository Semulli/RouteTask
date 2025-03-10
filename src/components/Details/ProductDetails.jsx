import React, { useState, useEffect } from "react";
import "./detail.css";
import { getSingleData } from "../../api/getRequest";
import Layout from "../Layout";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  const handleData = async () => {
    const response = await getSingleData(id);
    setData(response);
  };
  useEffect(() => {
    handleData();
  }, [id]);

  return (
    <Layout>
      <div className="detailPage flex">
        <div className="detail">
          {data ? (
            <>
              <div className="imgDiv">
                <img className="cardImg2" src={data.images[0]} />
              </div>
              <div className="cardBody flex">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <p className="card-text">{data.price}</p>
                <p className="card-text">{data.brand}</p>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
