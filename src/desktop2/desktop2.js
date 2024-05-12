import React from 'react';
import Card from "./Card.js";
import useFoodFetch from "../desktop3/components/foodList.js";
import imageList from "./images";

function Desktop2() {
    const { foodList, loading, error } = useFoodFetch();
    return (
        <div className="desktop2">
            <center>
                <h1>Foods</h1>
            </center>
            <div className="map">
                {foodList && foodList.map(function (food, index) {
                    return (
                        <Card
                            key={food.id} // Assuming food has an id property
                            name={food.name}
                            link={imageList[index]}
                            description={food.description}
                        />
                    );
                })}
            </div>
            <div className="input-container">
                <center>
                    <h1>Foods</h1>
                </center>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                           aria-describedby="basic-addon1"/>
                </div>
                <div className="searchBar">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div className="map">
                {foodList && foodList.map(function (food, index) {
                    return (
                        <div className="foodCards" key={index}>
                            <Card
                                id={food.id} // Assuming food has an id property
                                name={food.name}
                                link={imageList[index]}
                                tag={food.tag} // Assuming food has a tag property
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Desktop2;
