import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RecipeContext from "../Functions/RecipeContext";
import Cards from "./Cards/Cards";
import DishesCardUser from "./Cards/DishesCardUser";
import LoadingScreen from "./Loading/LoadingScreen";
const SavedRecipes = () => {
  const history = useNavigate();
  const context = useContext(RecipeContext);
  const { User, getting_recipe } = context;
  console.log(User);
  useEffect(() => {
    if (localStorage.getItem("key")) {
      getting_recipe();
    } else {
      history("/signin");
    }
  }, []);
  if (User.length < 1) {
    return <div>{<LoadingScreen />}</div>;
  }
  return (
    <>
    <div className="Menu_container">
    <div className="flex-cate">
    <h1 style={{marginTop:"20px"}}>Saved Dishes</h1>
          <div className="flex-ca">
            {User.data.map((elements) => {
              return (
                <DishesCardUser
                  Name={elements.Name}
                  Category={elements.Category}
                  Url={elements.Url}
                  Unique={elements.Unique}
                />
              );
            })}
          </div>
        </div> 
      </div>
    </>
  );
};

export default SavedRecipes;
