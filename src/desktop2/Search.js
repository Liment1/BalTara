import React, { useState } from "react";
import "./search.css";

export default function Search({ foodList, setFoodList }) {
    const [placeholderText, setPlaceholderText] = useState("Search"); 

    const search = (event) => {
        setFoodList(
            foodList.filter(food =>
                food.name.toLowerCase().includes(event.target.value.toLowerCase())
            )
        );
    };


    const handleClick = () => {
        setPlaceholderText("Typing"); 
    };

    const handleBlur = () => {
        setPlaceholderText("Search"); 
    };

    return (
        <div className="input-group mb-3 w-25 search">
            <input
                type="text"
                className="form-control form input-control"
                placeholder={placeholderText} 
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={search}
                onClick={handleClick} 
                onBlur={handleBlur} 
            />
        </div>
    );
}
