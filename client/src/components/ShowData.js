import React, { useState, useEffect } from "react";

import axiosWithAuth from "../helpers/axiosWithAuth";

export default function ShowData() {
  const [data, updateData] = useState([]);
  console.log("Data is : ", data);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/restricted/data")
      .then(res => {
        updateData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {data.map(recipe => {
        return (
          <div key={recipe.name} className="recipe-card-wrapper">
            <h2>{recipe.name}</h2>
            <h3>{recipe.course}</h3>
            <h3>{recipe.technique}</h3>
            {recipe.ingredients.map(ingredient => {
              return <p>{ingredient}</p>;
            })}
          </div>
        );
      })}
    </>
  );
}
