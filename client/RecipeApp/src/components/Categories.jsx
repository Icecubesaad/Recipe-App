import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeContext from '../Functions/RecipeContext';
import DishesCards from './Cards/DishesCard';
import LoadingScreen from './Loading/LoadingScreen';
const Categories = () => {
    const context = useContext(RecipeContext);
    const {getDishes,Dishes} = context
    const {category} = useParams()
    useEffect(() => {
        getDishes(category)
    }, []);
    if (Dishes.length === 0) {
      return <div>{<LoadingScreen/>}</div>;
      }
    return (
        <>
        <h1 style={{fontFamily:'Staatliches',marginLeft:"145px"}}>Dishes :</h1>
        <div className='flex-cate'>
        <div className='flex-ca'>
        {Dishes.map((elements) =>
            <DishesCards
              Unique={elements.idMeal}
              Name={elements.strMeal}
              Url={elements.strMealThumb}
            />
          )}
          </div>
          </div>
          )
        </>
    );
}

export default Categories;
