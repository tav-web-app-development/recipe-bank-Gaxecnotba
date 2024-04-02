import { useState, useEffect } from "react";
import "./Style.css";

export default function Content() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://api.sampleapis.com/recipes/recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipes(data);
      });
    return () => {
      console.log("Unmounted");
    };
  }, []);

  return (
    <div className="recipe-container">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe">
          <h2
            onClick={() => {
              document.title = recipe.title;
            }}
          >
            {recipe.title}
          </h2>
          <p>
            <strong>Description:</strong> {recipe.description}
          </p>
          <p>
            <strong>Ingredients:</strong> {recipe.ingredients}
          </p>
          <p>
            <strong>Directions:</strong> {recipe.directions}
          </p>
        </div>
      ))}
    </div>
  );
}
