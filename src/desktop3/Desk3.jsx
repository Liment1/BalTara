import './Desk3.css';
import  DescComp from './descComp';
import foodList from './components/foodList';
import {useState} from "react";

function Desk3(a) {
  const [index, setIndx] = useState(a.indx);
  function subIndx(){
      setIndx((index - 1 + 12) % 12);
  }

  function addIndx(){
    setIndx((index + 1) % 12);
  }


  const currFood = foodList.find(food => {
    return food.id === index;
  });

  return (
      <div>
        <DescComp name={currFood.name} link={currFood.link} desc={currFood.description}/>
        <button className="btn btn-support" onClick={subIndx}>Prev</button>
        <button className="btn btn-support" onClick={addIndx}>Next</button>
      </div>
  );
}

export default Desk3;
