import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeContext from "../Functions/RecipeContext";
import DishesCards from "./Cards/DishesCard";
import LoadingScreen from "./Loading/LoadingScreen";
import { useLocation } from "react-router-dom";
import ResponsiveCards from "./Cards/ResponsiveCards";
import ResponsiveDishesCard from "./Cards/ResponsiveDishesCard";
const Categories = () => {
  const [stylediv, setstylediv] = useState({
    width:"100%"
  });
  const [loading, setloading] = useState(false);
  const location = useLocation();
  const context = useContext(RecipeContext);
  const {
    getDishes,
    Dishes,
    handleBackClickMenu,
    handleNextClickMenu,
    startIndexMeny,
    setstartIndexMeny,
    Menu,
  } = context;
  const Menu_length = Menu.length;
  const length_of_array = Dishes.length;
  const { category } = useParams();
  useEffect(() => {
    getDishes(category);
    if(window.innerWidth<500){
      setstylediv({
        width:"85%"
      })
    }
    setloading(true)
  }, []);
  if (location.pathname === `/Menu`) {
    setstartIndexMeny(0);
  }

  if (Dishes.length === 0) {
    return <div>{<LoadingScreen />}</div>;
  }
  const loadingTrigger = () => {
    setloading(true);
  };
  setTimeout(() => {
    setloading(false);
  }, 700);
  return (
    <>
      {!loading ? (
        <div className="Menu_container">
          {window.innerWidth>500 ? <div className="button-div">
            {startIndexMeny > 0 ? (
              <button
                onClick={() => {
                  handleBackClickMenu(), loadingTrigger();
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
                    d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
                    fill=""
                  />
                </svg>
              </button>
            ) : (
              <button className="btn-menu" style={{ opacity: "0" }}>
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
          </div>:null}
          <div style={stylediv}>
            <h1
              style={{
                fontFamily: "Staatliches",
                marginLeft: "10px",
                marginTop:"20px"
              }}
            >
              Dishes :
            </h1>
            {window.innerWidth > 500 ? (
              <div className="flex-cate">
                <div className="flex-ca">
                  {Dishes.map((elements) => (
                    <DishesCards
                      Name={elements.strMeal}
                      Url={elements.strMealThumb}
                      Unique={elements.idMeal}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="responsive-flex">
                {Menu.map((elements) => (
                  <ResponsiveDishesCard
                    Name={elements.strMeal}
                    Url={elements.strMealThumb}
                    Unique={elements.idMeal}
                  />
                ))}
              </div>
            )}
          </div>
          {window.innerWidth>500 ? <div className="button-div">
            {startIndexMeny + 6 >= Menu_length ? (
              <button className="btn-menu" style={{ opacity: "0" }}>
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
                onClick={() => {
                  handleNextClickMenu(), loadingTrigger();
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
          </div>:null}
        </div>
      ) : (
        <div>{<LoadingScreen />}</div>
      )}
    </>
  );
};

export default Categories;
