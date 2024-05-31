import './Desk3.css';
import DescComp from './descComp';
import imageList from '../desktop2/images';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFoodFetch from "../components/foodList";
import longLat from "./LongLat"
import { Link } from "react-router-dom";

function Desk3() {
  const [currFood, setcurrFood] = useState({});
  let par = useParams();
  let id = Number(par.id);
  const { foodF: foodList, loading, error } = useFoodFetch();
  const [index, setIndx] = useState(id);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      {foodList && <DescComp name={currFood.name} link={imageList[index]} desc={currFood.description} longLat={longLat[id]} />}
      <div className="d-flex justify-content-center tombol">
        <button><Link to={`/foods/${(id + 11) % 12}`} className="learn-more" onClick={subIndex}><span className="bn31span">Prev</span></Link></button>
        <button><Link to={`/foods/${(id + 13) % 12}`} className="learn-more" onClick={addIndex}><span className="bn31span">Next</span></Link></button>
      </div>
    </div>
  );
}

export default Desk3;
