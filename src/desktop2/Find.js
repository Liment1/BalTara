import React from "react";

export default function Search({ foodList, setFoodList }) {
    const search = (event) => {
        if (event.target.value.toLowerCase() === "all") {
            setFoodList(foodList);
        } else {
            setFoodList(
                foodList.filter(food =>
                    food.name.toLowerCase().includes(event.target.value.toLowerCase())
                )
            );
        }
    };


    return (
        <div className="searchBar w-25">
            <select className="form-select" aria-label="Default select" onChange={search}>
                <option value="all">All</option>
                <option value="ayam">Ayam</option>
                <option value="babi">Babi</option>
                <option value="sambal">Sambal</option>
            </select>
        </div>
    );
}
