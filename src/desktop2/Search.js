import React from "react";

export default function Search ({foodList, setFoodList}) {
    const search = (event) => {
        setFoodList(
            foodList.filter(food =>
                food.name.toLowerCase().includes(event.target.value.toLowerCase())
            )
        );
    };
    return (
    <div className="input-group mb-3 w-25">
        <input type="text" className="form-control" placeholder="Search" aria-label="Username"
               aria-describedby="basic-addon1" onChange={search}/>
    </div>)
}
