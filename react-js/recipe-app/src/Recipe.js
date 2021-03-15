import React from "react";
import style from "./recipe.module.css";

export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className={style.Recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li key={title}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
}
