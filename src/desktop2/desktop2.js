import Card from "./Card.js";
import useFoodFetch from "../desktop3/components/foodList.js";
import imageList from "./images";
import Search from "./Search.js";
import Find from "./Find.js";
import { useState, useEffect } from "react";

function Desktop2() {
  const { foodF: startFoodList, loading, error } = useFoodFetch();
  const [foodList, setFoodList] = useState(startFoodList);

  useEffect(() => {
    setFoodList(startFoodList);
  }, [startFoodList]);

  useEffect(() => {
    if (startFoodList) {
      startFoodList.map(function (food, index) {
        return (food.link = imageList[index]);
      });
    }
  }, [startFoodList]);

  return (
      <div className="desktop2">
          <center>
              <h1>Foods</h1>
          </center>
          <div className="find d-flex justify-content-around">
              <Search foodList={startFoodList} setFoodList={setFoodList}/>
              <Find foodList={startFoodList} setFoodList={setFoodList}/>
          </div>
          <div className="find d-flex justify-content-end">
              <Sort foodList={startFoodList} setFoodList={setFoodList}/>
          </div>
          <div className="map">
              {foodList &&
                  foodList.map(function (food, index) {
                      return (
                          <div className="foodCards">
                              <Card
                                  id={food.id}
                                  name={food.name}
                                  link={food.link}
                                  tag={food.tag}
                              />
                          </div>
                      );
                  })}
          </div>
      </div>
  );
}

export default Desktop2;
