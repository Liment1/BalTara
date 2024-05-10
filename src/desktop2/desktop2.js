import React from "react";
import Card from "./Card.js";
import foodList from "../desktop3/components/foodList.js";

function Desktop2() {
  return (
    <div className="desktop2">
      <center>
        <h1>Foods</h1>
      </center>
      <div className="map">
        {foodList.map(function (food) {
          return (
            <Card
              name={food.name}
              link={food.link}
              descrip={food.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Desktop2;
