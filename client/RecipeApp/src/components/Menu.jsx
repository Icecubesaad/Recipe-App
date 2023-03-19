import React from "react";
import { useContext , useEffect } from "react";
import RecipeContext from "../Functions/RecipeContext";
import Cards from "./Cards/Cards";
import LoadingScreen from "./Loading/LoadingScreen";
const Menu = () => {
    const context = useContext(RecipeContext);
    const { getApi, categories } = context;
  
    useEffect(() => {
      getApi("categories");
    }, []);
  
    if (categories.length === 0) {
      return <div>{<LoadingScreen/>}</div>;
    }
  
    return (
      <>
      <h1 style={{fontFamily:'Staatliches',marginLeft:"145px"}}>Categories :</h1>
      <div className="flex-cate">
      <div className='flex-ca'>
      
        {categories.map((elements) =>
            <Cards
              key={elements.idCategory}
              Name={elements.strCategory}
              Url={elements.strCategoryThumb}
              Description={elements.strCategoryDescription}
              Unique={elements.idCategory}
            />
          )}
          </div>
          </div>
          )
      </>
    );
  };
export default Menu;  