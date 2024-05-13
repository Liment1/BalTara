import React from "react";
import "./desktop2.css";
import { Link } from "react-router-dom";

function Card({ id, link, name, tag, rating }) {
  return (
    <div key={id}>
      <Link to={`/foods/${id}`} className="bg">
        <div className="card">
          <h2 className="name">{name}</h2>
          {tag && <p className="tagtext">{tag}</p>}
          <img className="imageCard" src={link} alt={name}></img>
        </div>
      </Link>
    </div>
  );
}

export default Card;
