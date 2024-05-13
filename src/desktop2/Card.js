import React from "react";
import "./desktop2.css";
import { Link } from "react-router-dom";
import star from "./photos/star.png";

function Card({ id, link, name, tag, rating }) {

    return (
    <div>
      <Link to={`/foods/${id}`} className="bg">
        <div className="card">
            <div className="cardTitle">
                <h2 className="name">{name} {rating}
                <img className="star" src={star}/>
                </h2>
            </div>
            {tag && <p className="tagtext">{tag}</p>}
          <img className="imageCard" src={link} alt={name}></img>
        </div>
      </Link>
    </div>
  );
}

export default Card;
