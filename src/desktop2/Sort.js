import React, { useEffect, useState } from "react";
import "./sort.css";

export default function Sort({ foodList, setFoodList }) {
  const [originalList, setOriginalList] = useState([]);

  useEffect(() => {
    setOriginalList(foodList);
  }, [foodList]);

  const sort = (event) => {
    const value = event.target.value.toLowerCase();

    if (value === "default") {
      setFoodList(originalList);
    } else if (value === "alpha") {
      const sortedList = [...foodList].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setFoodList(sortedList);
    } else if (value === "rating") {
      const sortedList = [...foodList].sort((a, b) => b.rating - a.rating);
      setFoodList(sortedList);
    }
  };

  return (
    <div className="searchBar w-25">
      <select className="form-select" aria-label="Sort select" onChange={sort}>
        <option value="default">Default</option>
        <option value="alpha">A-Z</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}
