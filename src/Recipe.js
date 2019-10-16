import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
    return (
      <div>
        <h1 className={style.recipe}>{title}</h1>
        <img src={image} alt="" />
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