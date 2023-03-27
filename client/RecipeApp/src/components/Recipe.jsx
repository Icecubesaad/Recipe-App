import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeContext from "../Functions/RecipeContext";
import LoadingScreen from "./Loading/LoadingScreen";
const Recipe = () => {
  const [loading, setloading] = useState(false);
  const { id } = useParams();
  const context = useContext(RecipeContext);
  const { Ingredients, getIngredients, Saving_Recipe } = context;
  console.log(Ingredients);
  useEffect(() => {
    getIngredients(id);
    setloading(true);
  }, []);
  setTimeout(() => {
    setloading(false)
  }, 500);
  if (Ingredients.length < 1) {
    return <div>{<LoadingScreen />}</div>;
  }
  return (
    <>
      {loading ? (
        <div>{<LoadingScreen />}</div>
      ) : (
        Ingredients.map((element) => (
          <div className="Recipe-Main">
            <div className="Recipe-grid">
              <div className="img-Recipe">
                <img src={element.strMealThumb} height="auto" width="60%" />
                <div className="buttons-Recipes">
                  <button
                    className="btn1"
                    onClick={() => {
                      Saving_Recipe(
                        element.strMeal,
                        element.strArea,
                        element.strCategory,
                        element.strInstructions,
                        element.strMealThumb,
                        element.idMeal
                      );
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>

              <div className="Info-Recipe">
                <h2>{element.strMeal}</h2>
                {window.innerWidth < 500 ? (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src={element.strMealThumb} height="auto" width="60%" />
                  </div>
                ) : null}
                <h5>Area : {element.strArea}</h5>
                <h5>Category : {element.strCategory}</h5>
                <div className="ingredients">
                  <div className="items">
                    <h1 style={{ fontFamily: "Staatliches", fontSize: "2rem" }}>
                      Ingredients
                    </h1>
                    <ul>
                      <li>{element.strIngredient1}</li>
                      <li>{element.strIngredient2}</li>
                      <li>{element.strIngredient3}</li>
                      <li>{element.strIngredient4}</li>
                      <li>{element.strIngredient5}</li>
                      <li>{element.strIngredient6}</li>
                      <li>{element.strIngredient7}</li>
                      <li>{element.strIngredient8}</li>
                      <li>{element.strIngredient9}</li>
                      <li>{element.strIngredient10}</li>
                      <li>{element.strIngredient11}</li>
                      <li>{element.strIngredient12}</li>
                      <li>{element.strIngredient13}</li>
                      <li>{element.strIngredient14}</li>
                      <li>{element.strIngredient15}</li>
                      <li>{element.strIngredient16}</li>
                      <li>{element.strIngredient17}</li>
                      <li>{element.strIngredient18}</li>
                      <li>{element.strIngredient19}</li>
                      <li>{element.strIngredient20}</li>
                    </ul>
                  </div>
                  <div className="quantity">
                    <h1 style={{ fontFamily: "Staatliches" }}>Quantity</h1>
                    <ul>
                      <li>{element.strMeasure1}</li>
                      <li>{element.strMeasure2}</li>
                      <li>{element.strMeasure3}</li>
                      <li>{element.strMeasure4}</li>
                      <li>{element.strMeasure5}</li>
                      <li>{element.strMeasure6}</li>
                      <li>{element.strMeasure7}</li>
                      <li>{element.strMeasure8}</li>
                      <li>{element.strMeasure9}</li>
                      <li>{element.strMeasure10}</li>
                      <li>{element.strMeasure11}</li>
                      <li>{element.strMeasure12}</li>
                      <li>{element.strMeasure13}</li>
                      <li>{element.strMeasure14}</li>
                      <li>{element.strMeasure15}</li>
                      <li>{element.strMeasure16}</li>
                      <li>{element.strMeasure17}</li>
                      <li>{element.strMeasure18}</li>
                      <li>{element.strMeasure19}</li>
                      <li>{element.strMeasure20}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="method">
              <h1 style={{ fontFamily: "Staatliches" }}>Method</h1>
              <h5>{element.strInstructions}</h5>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Recipe;
