import RecipeContext from "./RecipeContext";
import { useEffect, useState } from "react";
const RecipeState = (props) => {
  const [cards3, setcards3] = useState([]);
  const [cards3Index, setcards3Index] = useState(0);
  const [dataArray, setDataArray] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [Menu, setMenu] = useState([]);
  const [startIndexMeny, setstartIndexMeny] = useState(0);
  const [itemsToRender, setItemsToRender] = useState([]);
  const User_account = [];
  
  const [SignedInCheck, setSignedInCheck] = useState(false);
  const [User, setUser] = useState(User_account);
  const [categories, setCategories] = useState([]);
  const [Dishes, setDishes] = useState([]);
  const [Ingredients, setIngredients] = useState([]);
  const getApi = async (type) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/${type}.php`
      );
      const data = await res.json();
      setDataArray(data.categories)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const newItemsToRender = dataArray.slice(startIndex, startIndex + 6);
    setItemsToRender(newItemsToRender);
  }, [dataArray, startIndex]);
  function handleNextClick() { 
    setStartIndex(startIndex + 6);
  }
  function handleBackClick() {
    setStartIndex(startIndex - 6);
  }
  function handleNextClickMenu() {
    setstartIndexMeny(startIndexMeny + 6);
  }
  function handleBackClickMenu() {
    setstartIndexMeny(startIndexMeny - 6);
  }
  const getDishes = async (type) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`
      );
      const data = await res.json();
      setMenu(data.meals);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const newItemsToRenderMenu = Menu.slice(startIndexMeny,startIndexMeny+6);
    setDishes(newItemsToRenderMenu)
  }, [Menu,startIndexMeny]);
  const getIngredients = async (id) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setIngredients(data.meals);
    } catch (error) {
      console.log(error);
    }
  };
  const [name, setname] = useState("");
  const get_UserDetails = async () => {
    try {
      const res = await fetch("/auth/getDetails", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          jwt_token: localStorage.getItem("key"),
        },
      });
      const data = await res.json();
      setname(data.Email);
    } catch (error) {
      console.log(error);
    }
  };

  const Saving_Recipe = async (
    name,
    area,
    category,
    method,
    url,
    ingredient,
    quantity,
    id
  ) => {
    const res = await fetch("/account/saved", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        jwt_token: localStorage.getItem("key"),
      },
      body: JSON.stringify({
        name,
        area,
        category,
        ingredient,
        quantity,
        method,
        id,
        url,
      }),
    });
    const data = await res.json();
  };
  const getting_recipe = async () => {
    const res = await fetch("/account/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        jwt_token: localStorage.getItem("key"),
      },
    });
    const data = await res.json();
    setUser((us) => ({
      ...us,
      data,
    }));
  };
  return (
    <RecipeContext.Provider
      value={{
        getApi,
        categories,
        Dishes,
        getDishes,
        Ingredients,
        getIngredients,
        Saving_Recipe,
        getting_recipe,
        User,
        get_UserDetails,
        name,
        setname,
        SignedInCheck,
        setSignedInCheck,
        handleNextClick,
        itemsToRender,
        startIndex,
        handleBackClick,
        handleBackClickMenu,
        handleNextClickMenu,
        startIndexMeny,
        setstartIndexMeny,
        Menu
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
export default RecipeState;
