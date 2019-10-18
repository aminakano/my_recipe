import React from 'react';
import style from './recipe.module.css';
import { Link } from "react-router-dom";

const Recipe = ({title,calories,image,ingredients}) => {
    return (
      <div className={style.container}>
        
          <h1 className={style.recipe}>{title}</h1>
          <img src={image} className={style.img} alt="" />
          <ol>
            {ingredients.map(ingredient => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
          <p>{Math.round(calories)}Kj</p>
        
      </div>
    );
}

export default Recipe;