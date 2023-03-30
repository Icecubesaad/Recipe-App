import React, { useContext, useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeContext from "../Functions/RecipeContext";
import Cards from "./Cards/Cards";
import DishesCardUser from "./Cards/DishesCardUser";
import LoadingScreen from "./Loading/LoadingScreen";
const SavedRecipes = () => {
  let arrayLenght
  const [loading, setloading] = useState(false);
  const history = useNavigate();
  const context = useContext(RecipeContext);
  const { User, getting_recipe, StartIndexUser,ItemsToRenderUser,setStartIndexUser } = context;
  if(User.length>1){
    arrayLenght = User[0].length
  }
  else{
    arrayLenght = User.length
  }
  console.log(arrayLenght)
  const handleNextClick=()=>{
    setStartIndexUser(StartIndexUser+6)
  }
  const handleBackClick=()=>{
    setStartIndexUser(StartIndexUser-6)
  }
  const LoadingTrigger = () => {
    setloading(true);
  };
  setTimeout(() => {
    setloading(false);
  }, 500);
  useEffect(() => {
    setStartIndexUser(0)
    if (localStorage.getItem("key")) {
      getting_recipe();
    } else {
      history("/signin");
    }
  }, []);
  if (ItemsToRenderUser.length < 1) {
    return <div>{<LoadingScreen />}</div>;
  }
  return (
    <>   
    {!loading ? (
      <div className="Menu_container">
        {window.innerWidth>500 ? <div className="button-div">
          {StartIndexUser > 0 ? (
            <button
              onClick={() => {
                handleBackClick(), LoadingTrigger();
              }}
              className="btn-menu"
              style={{height:"58px",width:"58px"}}
            >
              <xml version="1.0" encoding="utf-8" />
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 1024 1024"
                fill="#000000"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
                  fill=""
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={handleBackClick}
              className="btn-menu"
              style={{ opacity: "0" }}
            >
              <xml version="1.0" encoding="utf-8" />
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 1024 1024"
                fill="#000000"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
                  fill=""
                />
              </svg>
            </button>
          )}
        </div> : null}
        <div style={{width:"100%"}}>
          <h1
            className="smthsmth"
            style={{
              fontFamily: "Staatliches",
              marginLeft: "10px",
              marginTop: "20px",
            }}
          >
            Saved Recipies :
          </h1>
          {window.innerWidth > 500 ? (
            <div className="flex-cate">
              <div className="flex-ca">
              {ItemsToRenderUser.map((elements) => {
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
          ) : (
            <div className="responsive-flex">
            {ItemsToRenderUser.map((elements) => {
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
          )}
        </div>
        {window.innerWidth>500 ? <div className="button-div">
          {StartIndexUser + 6 >= arrayLenght ? null : (
            <button
              onClick={() => {
                handleNextClick(), LoadingTrigger();
              }}
              className="btn-menu"
            >
              <xml version="1.0" encoding="utf-8" />
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 1024 1024"
                fill="#000000"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z"
                  fill=""
                />
              </svg>
            </button>
          )}
        </div> : null}
      </div>
    ) : (
      <div>{<LoadingScreen />}</div>
    )}
    </>
   
  );
};

export default SavedRecipes;
