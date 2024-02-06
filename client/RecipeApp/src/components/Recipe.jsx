import React, { useContext, useEffect, useState } from "react";
import { useParams,useNavigate} from "react-router-dom";
import RecipeContext from "../Functions/RecipeContext";
import LoadingScreen from "./Loading/LoadingScreen";
import RecipeErrorS from "./errors/RecipeErrorS";
import { Link } from "react-router-dom";
const Recipe = () => {
  const navigate = useNavigate()
  const [loading, setloading] = useState(false);
  const { id, category,Name } = useParams();
  const encodeUrl =  window.location.pathname
  const decodeUrl = decodeURI(encodeUrl)
  const [checkauth, setcheckauth] = useState(true);
  const context = useContext(RecipeContext);
  const { Ingredients, getIngredients, Saving_Recipe,deleting_Recipe } = context;
  useEffect(() => {
    getIngredients(id);
    setloading(true);
  }, []);
  const check=()=>{
    if(!localStorage.getItem("Key")){
      navigate("/signin")
    }
    else{
      Saving_Recipe()
    }
  }
  setTimeout(() => {
    setloading(false);
  }, 500);
  const Delete = ()=>{
    deleting_Recipe(id)
  }
  if (Ingredients.length < 1) {
    return <div>{<LoadingScreen />}</div>;
  }
  return (
    <>
    
      {loading ? (
        <div>{<LoadingScreen />}</div>
      ) : (
        Ingredients.map((element) => (
          <div className="Recipe-Main" style={{overflow:"hidden"}}>
          <div className="Recipe-grid">
              <div className="img-Recipe">
                <img src={element.strMealThumb} height="auto" width="60%" />
                <div className="buttons-Recipes">
                  <button
                    className="responsive-btn-hover"
                    onClick={() => {
                      check(
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
                  {`/saved/Menu/${category}/${Name}/${id}` === decodeUrl ? <Link to="/saved"><button className="responsive-btn my-2" style={{marginLeft:"50px"}} onClick={Delete}>
                  Delete
                  </button></Link>:null}
                  </div>
              </div>

              <div className="Info-Recipe">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h2>{element.strMeal}</h2>
                 {window.innerWidth<500? <button
                    style={{ background: "transparent", border: "transparent" }}
                    onClick={() => {
                      check(
                        element.strMeal,
                        element.strArea,
                        element.strCategory,
                        element.strInstructions,
                        element.strMealThumb,
                        element.idMeal
                      );
                      
                    }}
                  >
                    {`/saved/Menu/${category}/${Name}/${id}` === decodeUrl ? <Link to="/saved"><button onClick={Delete} style={{backgroundColor:"transparent",border:"transparent"}}><div id="main-content" style={{ paddingRight: "20px" }}>
                    <div>
                      <input type="checkbox" id="checkbox1" />
                      <label for="checkbox1">
                        <svg
                          id="heart-svg"
                          viewBox="467 392 58 57"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="Group"
                            fill="red"
                            fillRule="evenodd"
                            transform="translate(467 392)"
                          >
                            <path
                              d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                              id="heart"
                              fill="red"
                            />
                            <circle
                              id="main-circ"
                              fill="#E2264D"
                              opacity="0"
                              cx="29.5"
                              cy="29.5"
                              r="1.5"
                            />

                            <g
                              id="grp7"
                              opacity="0"
                              transform="translate(7 6)"
                            >
                              <circle
                                id="oval1"
                                fill="#9CD8C3"
                                cx="2"
                                cy="6"
                                r="2"
                              />
                              <circle
                                id="oval2"
                                fill="#8CE8C3"
                                cx="5"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="grp6"
                              opacity="0"
                              transform="translate(0 28)"
                            >
                              <circle
                                id="oval1"
                                fill="#CC8EF5"
                                cx="2"
                                cy="7"
                                r="2"
                              />
                              <circle
                                id="oval2"
                                fill="#91D2FA"
                                cx="3"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="grp3"
                              opacity="0"
                              transform="translate(52 28)"
                            >
                              <circle
                                id="oval2"
                                fill="#9CD8C3"
                                cx="2"
                                cy="7"
                                r="2"
                              />
                              <circle
                                id="oval1"
                                fill="#8CE8C3"
                                cx="4"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="grp2"
                              opacity="0"
                              transform="translate(44 6)"
                            >
                              <circle
                                id="oval2"
                                fill="#CC8EF5"
                                cx="5"
                                cy="6"
                                r="2"
                              />
                              <circle
                                id="oval1"
                                fill="#CC8EF5"
                                cx="2"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="grp5"
                              opacity="0"
                              transform="translate(14 50)"
                            >
                              <circle
                                id="oval1"
                                fill="#91D2FA"
                                cx="6"
                                cy="5"
                                r="2"
                              />
                              <circle
                                id="oval2"
                                fill="#91D2FA"
                                cx="2"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="grp4"
                              opacity="0"
                              transform="translate(35 50)"
                            >
                              <circle
                                id="oval1"
                                fill="#F48EA7"
                                cx="6"
                                cy="5"
                                r="2"
                              />
                              <circle
                                id="oval2"
                                fill="#F48EA7"
                                cx="2"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="grp1"
                              opacity="0"
                              transform="translate(24)"
                            >
                              <circle
                                id="oval1"
                                fill="#9FC7FA"
                                cx="2.5"
                                cy="3"
                                r="2"
                              />
                              <circle
                                id="oval2"
                                fill="#9FC7FA"
                                cx="7.5"
                                cy="2"
                                r="2"
                              />
                            </g>
                          </g>
                        </svg>
                      </label>
                    </div>
                  </div></button></Link> :  <div id="main-content" style={{ paddingRight: "20px" }}>
                      <div>
                        <input type="checkbox" id="checkbox" />
                        <label for="checkbox">
                          <svg
                            id="heart-svg"
                            viewBox="467 392 58 57"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              id="Group"
                              fill="none"
                              fillRule="evenodd"
                              transform="translate(467 392)"
                            >
                              <path
                                d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                                id="heart"
                                fill="#AAB8C2"
                              />
                              <circle
                                id="main-circ"
                                fill="#E2264D"
                                opacity="0"
                                cx="29.5"
                                cy="29.5"
                                r="1.5"
                              />

                              <g
                                id="grp7"
                                opacity="0"
                                transform="translate(7 6)"
                              >
                                <circle
                                  id="oval1"
                                  fill="#9CD8C3"
                                  cx="2"
                                  cy="6"
                                  r="2"
                                />
                                <circle
                                  id="oval2"
                                  fill="#8CE8C3"
                                  cx="5"
                                  cy="2"
                                  r="2"
                                />
                              </g>

                              <g
                                id="grp6"
                                opacity="0"
                                transform="translate(0 28)"
                              >
                                <circle
                                  id="oval1"
                                  fill="#CC8EF5"
                                  cx="2"
                                  cy="7"
                                  r="2"
                                />
                                <circle
                                  id="oval2"
                                  fill="#91D2FA"
                                  cx="3"
                                  cy="2"
                                  r="2"
                                />
                              </g>

                              <g
                                id="grp3"
                                opacity="0"
                                transform="translate(52 28)"
                              >
                                <circle
                                  id="oval2"
                                  fill="#9CD8C3"
                                  cx="2"
                                  cy="7"
                                  r="2"
                                />
                                <circle
                                  id="oval1"
                                  fill="#8CE8C3"
                                  cx="4"
                                  cy="2"
                                  r="2"
                                />
                              </g>

                              <g
                                id="grp2"
                                opacity="0"
                                transform="translate(44 6)"
                              >
                                <circle
                                  id="oval2"
                                  fill="#CC8EF5"
                                  cx="5"
                                  cy="6"
                                  r="2"
                                />
                                <circle
                                  id="oval1"
                                  fill="#CC8EF5"
                                  cx="2"
                                  cy="2"
                                  r="2"
                                />
                              </g>

                              <g
                                id="grp5"
                                opacity="0"
                                transform="translate(14 50)"
                              >
                                <circle
                                  id="oval1"
                                  fill="#91D2FA"
                                  cx="6"
                                  cy="5"
                                  r="2"
                                />
                                <circle
                                  id="oval2"
                                  fill="#91D2FA"
                                  cx="2"
                                  cy="2"
                                  r="2"
                                />
                              </g>

                              <g
                                id="grp4"
                                opacity="0"
                                transform="translate(35 50)"
                              >
                                <circle
                                  id="oval1"
                                  fill="#F48EA7"
                                  cx="6"
                                  cy="5"
                                  r="2"
                                />
                                <circle
                                  id="oval2"
                                  fill="#F48EA7"
                                  cx="2"
                                  cy="2"
                                  r="2"
                                />
                              </g>

                              <g
                                id="grp1"
                                opacity="0"
                                transform="translate(24)"
                              >
                                <circle
                                  id="oval1"
                                  fill="#9FC7FA"
                                  cx="2.5"
                                  cy="3"
                                  r="2"
                                />
                                <circle
                                  id="oval2"
                                  fill="#9FC7FA"
                                  cx="7.5"
                                  cy="2"
                                  r="2"
                                />
                              </g>
                            </g>
                          </svg>
                        </label>
                      </div>
                    </div>}
                  </button>:null}
                </div>
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
