import React from "react";
import "./notFound.css";
import NotFoundImg from "../../assets/404.jpg";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="NotFound">
      <img src={NotFoundImg} alt="notfound" className="notFoundImg" />
      <button
        className="btn"
        style={{ marginTop: "12px" }}
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
