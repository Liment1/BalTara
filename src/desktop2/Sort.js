import React, { useEffect, useState } from "react";
import "./sort.css"

export default function Search({ foodList, setFoodList }) {
    const [originalList, setOriginalList] = useState([]);

    useEffect(() => {
        setOriginalList(foodList);
    }, [foodList, setOriginalList]);

    const search = (event) => {
        const value = event.target.value.toLowerCase();

        if (value === "default") {
            setFoodList(originalList);
        } else if (value === "alpha") {
            const sortedList = [...foodList].sort((a, b) => a.name.localeCompare(b.name));
            setFoodList(sortedList);
        }
    };

    return (
        <div className="search w-25">
            <select className="form-select select-control" aria-label="Default select" onChange={search}>
                <option value="default">Default</option>
                <option value="alpha">A-Z</option>
            </select>
        </div>
    );
}
