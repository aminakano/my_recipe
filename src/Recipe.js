import React from 'react';
import style from './recipe.module.css';
import { Link } from "react-router-dom";

const Recipe = ({ title,calories,image,ingredients }) => {
    const id = title.charAt(0).toLowerCase()
    + title.slice(1).replace(/\s+/g, "").toLowerCase();
    console.log(id);
    return (
      <div className={style.container}>
        <h1 className={style.recipe}>{title}</h1>
        <Link to={`/recipe/${id}`}>
          <img src={image} className={style.img} alt="" />
        </Link>
        <ol>
          {ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient.text}</li>
          ))}
        </ol>
        <p>{Math.round(calories)}Kj</p>
      </div>
    );
}

export default Recipe;