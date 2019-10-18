import React, { useState, useEffect } from "react";
import "./App.css";
import style from "./recipe.module.css";



const Details = ({ match }) => {
  
   const APP_ID = "c1d9e329";
   const APP_KEY = "0d592485277af6f7ce62ee4379a79e5d";

   const [id, setId] = useState(""); 
   useEffect(() => {
     fetchItem();
     console.log(match);
     
   }, []);
   
   const [item, setItems] = useState({

  });
   const fetchItem = async () => {
     const response = await fetch(
       `https://api.edamam.com/search?q=${id}&app_id=${APP_ID}&app_key=${APP_KEY}`
     );
     const item = await response.json();
     setId(item);
     console.log(item);

   };
console.log(match)
  return (
    <div className={style.container}>
    <p>{match.params.id}</p>
      {/* <h1 className={style.recipe}>{title}</h1>
      <img src={image} className={style.img} alt="" /> */}
      {/* <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol> */}
      {/* <p>{Math.round(calories)}Kj</p> */}
    </div>
  );
};
export default Details;