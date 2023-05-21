import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RecipeContext from "../../Functions/RecipeContext";
import SigninFail from "../errors/SigninFail";
import ValidationError from "../errors/ValidationError";
const Signin = () => {
  const context = useContext(RecipeContext);
  const {get_UserDetails,setSignedInCheck} = context;
  const [SError, setError] = useState(false);
  
  const history = useNavigate()
    const [credentials, setcredentials] = useState({
        "Email":"",
        "Password":"",
    });
    const Send = async()=>{
        
        const {Email,Password} = credentials
        const res = await fetch("/auth/signin",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",     
            },
            body:JSON.stringify({
                Email,Password
            })
        })
       const data = await res.json()
       if(res.status === 200){
         localStorage.setItem('Recipekey',data.jwt_token)
         history("/")
         get_UserDetails()
          setSignedInCheck(true)
       }
       else{
        history("/signin")
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 3000);
       }
    }
  const Onchange = (e)=>{
    const key = e.target.name
    const value = e.target.value
    setcredentials({...credentials,[key]:value})
  }
  function show() {
    var x = document.getElementById("pass");
    var y = document.getElementById("bhde");
      if (x.type === "password") {
        x.type = "text";
        y.innerText = "Hide";
     } else {
        x.type = "password";
        y.innerText = "Show";
      }
}

  return (
    <>
    <div className="login-body">
      <main className="login">
        <div className="main-login">
          <div className="top">
          <Link to="/signin"><button>Sign in</button></Link>
            <Link to="/signup"><button>Sign up</button></Link>
          </div>
            <h1>Sign In</h1>  
            <input className="usr put" onChange={Onchange} value={credentials.Email} name="Email" placeholder="Email" type="text" />
            <br />
            <input id="pass" onChange={Onchange} value={credentials.Password} name="Password" className="pss put" placeholder="Password" type="password" />
            <button id="bhde" onClick={show} className="shw" type="button">
              show
            </button>
            {window.innerWidth<500 ? 
              <>
              {SError ? <div style={{color:"red",fontSize:"0.8rem",textAlign:"center"}}>Invalid credidentials</div> : null}
              </>
              : null
            }
            <a className="pass" href="">
              Forgot Password
            </a>
            <button onClick={Send} class="responsive-btn-hover my-2">Sign In</button>

            <div className="lines">
              <div style={{ backgroundColor: "#a5a5a5" }} className="line"></div>
              <p style={{ color: "#a5a5a5" }} className="p-b">
                or
              </p>
              <div style={{ backgroundColor: "#a5a5a5" }} className="line"></div>
            </div>
            <button style={{ border: "2px solid" }} id="btn" className="sub pic facebook" type="submit">
              <div className="logo2"></div>
              Sign in with Facebook
            </button>
            <button style={{ border: "2px solid" }} id="btn" className="sub pic google" type="submit">
              <div className="logol"></div>
              Sign in with Google
            </button>
        </div>
        <div className="banner">
        {SError ? <SigninFail/> : null}
       
          <div className="contain">
            <h1>Welcome Back!</h1>
            <h4>We are happy to have you back, please sign back in to continue</h4>
            <div className="lines">
              <div className="line"></div>
              <p className="p-b">or</p>
              <div className="line"></div>
            </div>
            <p className="pp">Don't have an account? Don't worry.</p>
            <button className="main-btn" ><Link to="/signup">Sign up</Link></button>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default Signin;
