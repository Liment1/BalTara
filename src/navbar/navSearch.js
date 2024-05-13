import React, { useState, useEffect } from "react";

export default function navSearch({ foodList, setFoodList }) {
    const [placeholderText, setPlaceholderText] = useState("Search");
    const [suggestions, setSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        if (inputValue === "") {
            setSuggestions([]);
        } else {
            const filteredSuggestions = foodList.filter(food =>
                food.name.toLowerCase().includes(inputValue.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        }
    }, [inputValue, foodList]);

    const search = (event) => {
        const value = event.target.value.toLowerCase();
        setInputValue(value);
        setFoodList(
            foodList.filter(food =>
                food.name.toLowerCase().includes(value)
            )
        );
    };

    const handleClick = () => {
        setPlaceholderText("Typing");
    };

    const handleBlur = () => {
        setPlaceholderText("Search");
        // Optionally clear suggestions on blur
        // setSuggestions([]);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion.name);
        setFoodList([suggestion]);
        setSuggestions([]);
    };

    return (
        <div className="input-group mb-3 w-25 search">
            <input
                type="text"
                className="form-control form input-control"
                placeholder={placeholderText}
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={inputValue}
                onChange={search}
                onClick={handleClick}
                onBlur={handleBlur}
            />
            {suggestions.length > 0 && (
                <ul className="autocomplete-list">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onMouseDown={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
