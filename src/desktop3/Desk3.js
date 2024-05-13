import './Desk3.css';
import DescComp from './descComp';
import imageList from '../desktop2/images';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFoodFetch from "../components/foodList";
import Belakang from "./batu.jpg";
import Maps from "./googleMaps.js";

function Desk3() {
  const [currFood, setcurrFood] = useState({});
  let par = useParams();
  let id = Number(par.id);
  const { foodF: foodList, loading, error } = useFoodFetch()
  const [index, setIndx] = useState(id);

  useEffect(() => {
    if (foodList.length > 0) {
      setcurrFood(foodList.find(food => {
        return Number(food.id) === index;
      }));
    }
  }, [foodList, index]);

  function subIndex() {
    setIndx((index + 11) % 12);
  }

  function addIndex() {
    setIndx((index + 13) % 12);
  }

  return (
    <div className="foodDetails">
      {foodList && <DescComp name={currFood.name} link={imageList[index]} desc={currFood.description} />}
      <div className="d-flex justify-content-center tombol">
        <a href={`/foods/${(id + 11) % 12}`} className="bn62 left" onClick={subIndex}><span className="bn31span">Prev</span></a>
        <a href={`/foods/${(id + 13) % 12}`} className="bn62 right" onClick={addIndex}><span className="bn31span">Next</span></a>
      </div>
    </div>
  );
}

export default Desk3;
