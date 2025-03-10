import React from "react";
import "./menu.css";
import { useNavigate } from "react-router-dom";
import {ROUTER} from "../../Constants/Router";
const MenuCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      {data.map((el) => {
        return (
          <div key={el.id} className="menuCard">
            <img className="cardImg" src={el.images[0]} />
            <h4>{el.title}</h4>
            <h6>{el.description.slice(0, 20)}</h6>
            <h6>{el.brand}</h6>
            <p>${el.price}</p>
            <button
              className="btnC"
              onClick={() => {
                navigate(`${ROUTER.Product}/${el.id} `);
              }}
            >
              Go Details Page
            </button>
          </div>
        );
      })}
    </>
  );
};

export default MenuCard;
