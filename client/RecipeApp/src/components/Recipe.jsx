import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeContext from '../Functions/RecipeContext';
import LoadingScreen from './Loading/LoadingScreen';
const Recipe = () => {
    const {id} = useParams()
    const context = useContext(RecipeContext);
    const {Ingredients,getIngredients,Saving_Recipe} = context
    useEffect(() => {
        getIngredients(id)
    }, []);
    if(Ingredients.length < 1){
        return <div>{<LoadingScreen/>}</div>;
    }
    const ingredient = [];
    const quantity = [];
    Ingredients.map((element)=>{
        ingredient.push(element.strIngredient1)
        ingredient.push(element.strIngredient2)
        ingredient.push(element.strIngredient3)
        ingredient.push(element.strIngredient4)
        ingredient.push(element.strIngredient5)
        ingredient.push(element.strIngredient6)
        ingredient.push(element.strIngredient7)
        ingredient.push(element.strIngredient8)
        ingredient.push(element.strIngredient9)
        ingredient.push(element.strIngredient10)
        ingredient.push(element.strIngredient11)
        ingredient.push(element.strIngredient12)
        ingredient.push(element.strIngredient13)
        ingredient.push(element.strIngredient14)
        ingredient.push(element.strIngredient15)
        ingredient.push(element.strIngredient16)
        ingredient.push(element.strIngredient17)
        ingredient.push(element.strIngredient18)
        ingredient.push(element.strIngredient19)
        ingredient.push(element.strIngredient20)
      })
    Ingredients.map((element)=>{
        quantity.push(element.strMeasure1)
        quantity.push(element.strMeasure2)
        quantity.push(element.strMeasure3)
        quantity.push(element.strMeasure4)
        quantity.push(element.strMeasure5)
        quantity.push(element.strMeasure6)
        quantity.push(element.strMeasure7)
        quantity.push(element.strMeasure8)
        quantity.push(element.strMeasure9)
        quantity.push(element.strMeasure10)
        quantity.push(element.strMeasure11)
        quantity.push(element.strMeasure12)
        quantity.push(element.strMeasure13)
        quantity.push(element.strMeasure14)
        quantity.push(element.strMeasure15)
        quantity.push(element.strMeasure16)
        quantity.push(element.strMeasure17)
        quantity.push(element.strMeasure18)
        quantity.push(element.strMeasure19)
        quantity.push(element.strMeasure20)
      })
    return (
        <>
        {Ingredients.map((element) => (
            <div className='Recipe-Main'>
            <div className='Recipe-grid'>
                <div className='img-Recipe'><img src={element.strMealThumb} height="auto" width="60%"/>
                <div className='buttons-Recipes'>
                <button className='btn1' onClick={()=>{Saving_Recipe(element.strMeal,element.strArea,element.strCategory,element.strInstructions,element.strMealThumb,ingredient,quantity,element.idMeal)}}>Save</button>
                </div>
                </div>
               
                <div className='Info-Recipe'>
                <h2>{element.strMeal}</h2>
                <h5>Area : {element.strArea}</h5>
                <h5>Category : {element.strCategory}</h5>
                <div className='ingredients'>
                <div className='items'>
                <h1 style={{fontFamily:'Staatliches'}}>Ingredients</h1>
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
                <div className='quantity'>
                <h1 style={{fontFamily:'Staatliches'}}>Quantity</h1>
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
            <div  className='method'>
            <h1 style={{fontFamily:'Staatliches'}}>Method</h1>
            <h5>{element.strInstructions}</h5>
            </div>
            </div>
            
          ))}
        </>
    );
}

export default Recipe;
