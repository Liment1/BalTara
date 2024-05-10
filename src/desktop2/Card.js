import React from 'react';
import "./desktop2.css";
import {Link}  from "react-router-dom";

function Card({ id, name, link, description }) {
  return (
      <div>
        <Link to={`/foods/${id + 1}`} className="bg">
          <div className="card">
          <h2 className="name">{name}</h2>
          <img src={link} alt={name}></img>
          <h2 className="description">{description}</h2>
          </div>
        </Link>
      </div>
  );
}

export default Card;
