import React from "react";
import image from "../images/k_Photo_Recipes_2020-10-twv-crispy-fall-tofu-bowl_TheKitchnFallTofuBowl_Option2-removebg-preview.png";
import { Link } from "react-router-dom";
const SideScreen = () => {
  return (
    <div className="SideScreen">
      <div className="Upper-part">
        <div className="left-uper">
          <div className="search-bar">
            <div>
            <xml version="1.0" encoding="utf-8"/>
<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C11.381 15 12.6296 14.4415 13.5355 13.5355C14.4415 12.6296 15 11.381 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5719 16.481 13.0239 15.6063 14.1921L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1921 15.6063C13.0239 16.481 11.5719 17 10 17C6.13401 17 3 13.866 3 10Z" fill="#000000"/>
</svg>
            </div>
            <input placeholder="Search Recipe"/>
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
       
        <div className="right-uper">
          <div className="pic-right">
            <img height="400px" width="300px" src={image} />
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
          <div className="card" style={{ width: "14rem" ,borderRadius:"20px", height:"17rem",backgroundColor:"rgb(14, 18, 24)",color:"white",border:"2px solid rgb(14, 18, 24)"}}>
          <Link to={`/Menu/${"Chicken"}/${"Teriyaki Chicken Casserole"}/${52772}`}>
            <img
              src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
              class="card-img-top"
              id="img-card"
              alt="..."
              style={{ height: "auto" }}
            />
          
          <div className="card-body">
            <p className="card-text" style={{color:"white"}}>Teriyaki Chicken Casserole</p>
          </div>
          </Link>
        </div>
        <div className="card" style={{ width: "14rem" ,borderRadius:"20px", height:"17rem",backgroundColor:"rgb(14, 18, 24)",color:"white",border:"2px solid rgb(14, 18, 24)"}}>
        <Link to={`/Menu/${"Beef"}/${"Big Mac"}/${53013}`}>
          <img
            src="https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg"
            class="card-img-top"
            id="img-card"
            alt="..."
            style={{ height: "auto" }}
          />
        
        <div className="card-body">
          <p className="card-text" style={{color:"white"}}>Big Mac</p>
        </div>
        </Link>
      </div>
      <div className="card" style={{ width: "14rem" ,borderRadius:"20px", height:"17rem",backgroundColor:"rgb(14, 18, 24)",color:"white",border:"2px solid rgb(14, 18, 24)"}}>
      <Link to={`/Menu/${"Pasta"}/${"Fettuccine Alfredo"}/${53064}`}>
        <img
          src="https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg"
          class="card-img-top"
          id="img-card"
          alt="..."
          style={{ height: "auto" }}
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
      <Link to="/Menu"><div className="button"><button id="btn1"><xml version="1.0" encoding="utf-8"/>
<svg width="30px" height="30px" viewBox="0 0 24 24" fill="yellow" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" fill="#FFAE00"/>
</svg> see all</button></div></Link>
      <Link to="/add"><div className="button"><button id="btn2"><xml version="1.0" encoding="utf-8"/>
<svg width="30px" height="30px" viewBox="0 0 24 24" fill="yellow" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" fill="#FFAE00"/>
</svg> add recipe</button></div></Link>
      </div>
      </div>
    </div>
  );
};

export default SideScreen;
