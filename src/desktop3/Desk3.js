import './Desk3.css';
import  DescComp from './descComp';
import imageList from '../desktop2/images';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import useFoodFetch from "./components/foodList";
import {Link} from "react-router-dom";

function Desk3() {
  const [   currFood, setcurrFood] = useState({});
  let par =  useParams();
  let id = Number(par.id);
  const { foodF : foodList, loading, error } = useFoodFetch()
  const [index, setIndx] = useState(id);

    useEffect(() => {
        if(foodList != null){
            setcurrFood(foodList.foodList.find(food => {
                return food.id === index;
            }));
        }
    }, [foodList, index]);

    function subIndex(){
        setIndx((index + 11) % 12);
    }

    function addIndex(){
        setIndx((index + 13) % 12);
    }


    return (
      <div className="foodDetails">
          {foodList && <DescComp name={currFood.name} link={imageList[index]} desc={currFood.description}/>}
          <div className="d-flex flex-column align-items-center">
              <Link to={`/foods/${(id + 11) % 12}`} className="btn-support" onClick={subIndex}>Prev</Link>
              <Link to={`/foods/${(id + 13) % 12}`} className=" btn-support" onClick={addIndex}>Next</Link>
          </div>
      </div>
  );
}

export default Desk3;
