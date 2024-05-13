import React from "react";
import "./desktop2.css";
import { Link } from "react-router-dom";

function Card({ id, link, name, tag, rating }) {
    document.addEventListener("scroll", function() {
        var pageTop = document.documentElement.scrollTop || document.body.scrollTop;
        var pageBottom = pageTop + window.innerHeight;
        var cards = document.querySelectorAll(".card");

        cards.forEach(function(tag) {
            var cardTop = tag.getBoundingClientRect().top + pageTop;

            if (cardTop < pageBottom) {
                tag.classList.add("visible");
            } else {
                tag.classList.remove("visible");
            }
        });
    });


    return (
    <div>
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
