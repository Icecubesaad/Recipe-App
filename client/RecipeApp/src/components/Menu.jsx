import React from "react";
import { useContext, useEffect, useState } from "react";
import RecipeContext from "../Functions/RecipeContext";
import Cards from "./Cards/Cards";
import LoadingScreen from "./Loading/LoadingScreen";
const Menu = () => {
  const [loading, setloading] = useState(false);
  const context = useContext(RecipeContext);
  const {
    getApi,
    itemsToRender,
    handleNextClick,
    handleBackClick,
    startIndex,
    setstartIndexMeny,
    dataArray
  } = context;
  const arrayLenght = dataArray.length
  console.log(arrayLenght)
  useEffect(() => {
    getApi("categories");
    setstartIndexMeny(0)
  }, []);
  const LoadingTrigger = ()=>{
    setloading(true)
  }
  setTimeout(() => {
    setloading(false)
  }, 500);
  if (itemsToRender.length === 0) {
    return <div>{<LoadingScreen />}</div>;
  }

  return (
    <>
      {!loading ? <div className="Menu_container">
        <div className="button-div">
          {startIndex > 0 ? (
              <button onClick={()=>{handleBackClick(),LoadingTrigger()}} className="btn-menu">
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
          ) : <button onClick={handleBackClick} className="btn-menu" style={{opacity:"0"}}>
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
        </button>}
        </div>
        <div>
          <h1
            style={{
              fontFamily: "Staatliches",
              marginLeft: "10px",
              marginTop: "20px",
            }}
          >
            Categories :
          </h1>
          <div className="flex-cate">
            <div className="flex-ca">
              {itemsToRender.map((elements) => (
                <Cards
                  key={elements.idCategory}
                  Name={elements.strCategory}
                  Url={elements.strCategoryThumb}
                  Description={elements.strCategoryDescription}
                  Unique={elements.idCategory}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="button-div">
          {startIndex+6>=arrayLenght ? null:<button onClick={()=>{handleNextClick(),LoadingTrigger()}} className="btn-menu">
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
        </button>}
        </div>
      </div> : <div>{<LoadingScreen />}</div>}
    </>
  );
};
export default Menu;
