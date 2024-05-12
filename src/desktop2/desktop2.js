import React from 'react';
import Card from "./Card.js"; 
import useFoodFetch from "../desktop3/components/foodList.js";
import imageList from "./images";

function Desktop2() {
    const { foodF : foodList, loading, error } = useFoodFetch()

  return (
    <div className="desktop2">
      <center>
        <h1>Foods</h1>
      </center>
      <div className="map">

      {foodList && foodList.foodList.map(function (food, index) {
        return (
          <Card
            id={food.id}
            name={food.name}
            link={imageList[index]}
            description={food.description}
          />
        );
      })}
      </div>
    </div>
  );
}

export default Desktop2;
