import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import useFoodFetch from "../components/foodList.js";
import imageList from "./images";
import Search from "./Search.js";
import Find from "./Find.js";
import Sort from "./Sort.js";
import "./desktop2.css"; // Ensure this includes the styles

function Desktop2() {
    const { foodF: startFoodList, loading, error } = useFoodFetch();
    const [foodList, setFoodList] = useState(startFoodList);
    const [renderKey, setRenderKey] = useState(Date.now()); // State to force re-render

    const checkVisibility = () => {
        const pageTop = document.documentElement.scrollTop || document.body.scrollTop;
        const pageBottom = pageTop + window.innerHeight;
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top + pageTop;

            if (cardTop < pageBottom) {
                card.classList.add("visible");
            } else {
                card.classList.remove("visible");
            }
        });
    };

    useEffect(() => {
        // Check visibility whenever foodList changes
        checkVisibility();
    }, [foodList]);

    useEffect(() => {
        const handleScroll = () => {
            checkVisibility();
        };
        document.addEventListener("scroll", handleScroll);
        checkVisibility();
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setFoodList(startFoodList);
    }, [startFoodList]);

    useEffect(() => {
        if (startFoodList) {
            startFoodList.forEach((food, index) => {
                food.link = imageList[index];
            });
            checkVisibility(); // Check visibility after setting links
        }
    }, [startFoodList]);



    return (
        <div className="desktop2">
            <center>
                <h1>Foods</h1>
            </center>
            <div className="find d-flex justify-content-around">
                <Search foodList={startFoodList} setFoodList={setFoodList} />
                <Find foodList={startFoodList} setFoodList={setFoodList} />
            </div>
            <div className="find d-flex justify-content-end">
                <Sort foodList={startFoodList} setFoodList={setFoodList} />
            </div>
            <div className="map">
                {foodList &&
                    foodList.map((food, index) => (
                        <div className="foodCards" key={food.id}>
                            <Card
                                id={food.id}
                                name={food.name}
                                link={food.link}
                                tag={food.tag}
                                rating={food.rating}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Desktop2;
