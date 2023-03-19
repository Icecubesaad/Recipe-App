import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import ValidationError from "../errors/ValidationError";
const Signup = () => {
  const history = useNavigate()
  const [SValidation, setValidation] = useState(false);
  const [message, setmessage] = useState("");
  const [credentials, setcredentials] = useState({
    "Email":"",
    "Password":""
  });
  const Onchange = (e)=>{
    const key = e.target.name
    const value = e.target.value
    setcredentials({...credentials,[key]:value})
  }
  const Post = async()=>{
    const {Email,Password} = credentials
    const res = await fetch("/auth/signup",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        Email,
        Password
      })
    })
    const data =await res.json()
    if(res.status === 405){
      setValidation(true)
      setmessage("Please enter a valid email")
     }
     if(res.status === 401){
      setValidation(true)
      setmessage("Please enter a password of atleast 5 words")
     }
     if(res.status === 422){
      setValidation(true)
      setmessage("Please Enter valid Email and Password")
     }
     if(res.status === 200){
      history("/")
     }
     if(res.status === 403){
      setValidation(true)
      setmessage("User already exist")
     }
     setTimeout(() => {
      setValidation(false)
     }, 5000);
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
            <h1>Sign Up</h1>
            <input className="usr put" onChange={Onchange} value={credentials.Email} name="Email" placeholder="Email or Username" type="text" />
            <br />
            <input id="pass" onChange={Onchange} value={credentials.Password} name="Password" className="pss put" placeholder="Password" type="password" />
            <button id="bhde" onClick={show} className="shw" type="button">
              show
            </button>
            <a className="pass" href="">
              Forgot Password
            </a>
            <button onClick={Post} class="btn-nav-auth my-2">Sign up</button>
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
        {SValidation ? <ValidationError message={message}/> : null}
          <div className="contain">
            <h1>Welcome Back!</h1>
            <h4>We are happy to have you back, please sign back in to continue</h4>
            <div className="lines">
              <div className="line"></div>
              <p className="p-b">or</p>
              <div className="line"></div>
            </div>
            <p className="pp">Already have an account?</p>
            <button className="main-btn" ><Link to="/signin">Sign in</Link></button>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default Signup;
