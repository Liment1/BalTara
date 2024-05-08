import React from 'react';
import "./desktop2.css";

function Card({ id, name, link, description }) {
  return (
    <button className="bg">
      <div className="card">
      <h2 className="name">{name}</h2>
      <h2 className="id">{id}</h2>
      <img src={link} alt={name}></img>
      <h2 className="description">{description}</h2>
      </div>
    </button>
  );
}

export default Card;
