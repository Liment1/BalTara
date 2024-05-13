import React from 'react';
import "./desktop2.css";
import {Link}  from "react-router-dom";

function Card({ id, link, name, tag, rating}) {
  return (
      <div key={id}>
        <Link to={`/foods/${id}`} className="bg">
          <div className="card">
          <h2 className="name">{name}</h2>
          {tag && <h2 className="tag">{tag}</h2>}
          <img src={link} alt={name}></img>
          <div>{rating}</div>
          </div>
        </Link>
      </div>
  );
}

export default Card;
