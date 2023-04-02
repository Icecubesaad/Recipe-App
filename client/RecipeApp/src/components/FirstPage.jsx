import React, { useState,useEffect, useContext } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";
import data from "../json/MealsData.json"
import Options from "./Cards/Options";
import RecipeContext from "../Functions/RecipeContext";
import NotSignedin from "./Profile/NotSignedin";
import Signedin from "./Profile/Signedin";
const SideScreen = () => {
  useEffect(() => {
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom',
    });
  }, [])
  const context = useContext(RecipeContext)
  const {name,get_UserDetails,SignedInCheck,setSignedInCheck}=context
  useEffect(() => {
    if(localStorage.getItem('key')){
      setSignedInCheck(true)
      get_UserDetails()
    }
    else{
      setSignedInCheck(false)
    }
  }, []);
  const [Searching, seSearching] = useState({
    "value":""
  });
  const [IndexOfArray, setIndexOfArray] = useState(0);
  const [FilteredData, setFilteredData] = useState([]);
  const Change = (e)=>{
    let value_search = e.target.value
    seSearching({
      "value":value_search
    })
    let po = data.Meals.filter((e)=>{
      return e.strMeal.toLowerCase().includes(Searching.value.toLowerCase())
    })
    const icecube = po.slice(IndexOfArray,IndexOfArray+6)
    setFilteredData(icecube)
  }
  return (
    <div className="SideScreen">
    {window.innerWidth<500 ? <div style={{display:"flex",justifyContent:"space-between",marginTop:"30px",alignItems:"center",paddingLeft:"20px",paddingRight:"20px"}}>
      <div style={{color:"white",fontSize:"1.1rem",fontFamily:"Inter"}}>{name.toUpperCase()}</div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      {SignedInCheck ? <Signedin/> : <NotSignedin/>}
      </div>
    </div> : null}
      <div className="Upper-part">
        <div className="left-uper">
        <div className="Search-bar-container">
          <div className="search-bar">
            <div>
            <xml version="1.0" encoding="utf-8"/>
<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C11.381 15 12.6296 14.4415 13.5355 13.5355C14.4415 12.6296 15 11.381 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5719 16.481 13.0239 15.6063 14.1921L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1921 15.6063C13.0239 16.481 11.5719 17 10 17C6.13401 17 3 13.866 3 10Z" fill="#000000"/>
</svg>
            </div>
            <input placeholder="Search Recipe" value={Searching.value} onChange={Change}/>
            
          </div>
          <div className="dropdown">
            {Searching.value.length>1?
              FilteredData.map((e) => <Options Name={e.strMeal} Url={e.strMealThumb} Unique={e.idMeal}/>)
              : null
            }
            </div>
          </div>
          <div className="Text">
          <h2 className="animate__animated animate__bounce animate__slow">
          Your own Chef
          </h2>
          <p>
            Find and create Recipes and share it with the world! Different kind of foods from different countries, areas and from the different people, So let's spread happiness and make cooking more fun.
          </p>
          </div>
        </div>
      </div>
      {window.innerWidth<600 ?  <div className="responsive-buttons">
        <Link to="/Menu"><button className="responsive-btn">Menu</button></Link>
        <Link to="/Saved"><button className="responsive-btn">Saved</button></Link>
       </div> : null}
       {window.innerWidth<600 ? <div style={{fontFamily:"Inter", fontSize:"1.8rem",color:"white",marginLeft:"10px",marginBottom:"20px"}}>Top Dishes</div> : null}
      <div className="Lower-part">
      <div className="left-lower">
      <div className="Cards">
          <div className="flex-lower">
          <div className="card" data-aos="fade-down" style={{ width: "14rem" ,borderRadius:"20px", height:"17rem",backgroundColor:"rgb(14, 18, 24)",color:"white",border:"2px solid rgb(14, 18, 24)"}}>
          <Link to={`/Menu/${"Chicken"}/${"Teriyaki Chicken Casserole"}/${52772}`}>
            <img
              src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
              class="card-img-top"
              id="img-card"
              alt="..."
              style={{ height: "auto",border:"transparent",borderRadius:"20px" }}
            />
          
          <div className="card-body">
            <p className="card-text" style={{color:"white"}}>Teriyaki Chicken Casserole</p>
          </div>
          </Link>
        </div>
        <div data-aos="fade-down" className="card" style={{ width: "14rem" ,borderRadius:"20px", height:"17rem",backgroundColor:"rgb(14, 18, 24)",color:"white",border:"2px solid rgb(14, 18, 24)"}}>
        <Link to={`/Menu/${"Beef"}/${"Big Mac"}/${53013}`}>
          <img
            src="https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg"
            class="card-img-top"
            id="img-card"
            alt="..."
            style={{ height: "auto",border:"transparent",borderRadius:"20px" }}
          />
        
        <div className="card-body">
          <p className="card-text" style={{color:"white"}}>Big Mac</p>
        </div>
        </Link>
      </div>
      <div className="card" data-aos="fade-down" style={{ width: "14rem" ,borderRadius:"20px", height:"17rem",backgroundColor:"rgb(14, 18, 24)",color:"white",border:"2px solid rgb(14, 18, 24)"}}>
      <Link to={`/Menu/${"Pasta"}/${"Fettuccine Alfredo"}/${53064}`}>
        <img
          src="https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg"
          class="card-img-top"
          id="img-card"
          alt="..."
          style={{ height: "auto",border:"transparent",borderRadius:"20px" }}
        />
      
      <div className="card-body">
        <p className="card-text" style={{color:"white"}}>Fettuccine Alfredo</p>
      </div>
      </Link>
    </div>
          </div>
      </div>
      </div>
      <div className="right-lower">
      <Link to="/Menu" style={{textDecoration:"none"}}><div ><button style={{width:"150px"}}  className="responsive-btn-hover">see all</button></div></Link>
      <Link to="/add" style={{textDecoration:"none"}}><div ><button  style={{width:"150px"}} className="responsive-btn-hover">add recipe</button></div></Link>
      </div>
      </div>
    </div>
  );
};

export default SideScreen;
