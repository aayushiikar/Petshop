import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
function Login(props){
  const nav=useNavigate();
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    
    const submitReview=async (e)=>
    {
      e.preventDefault();
      await axios.post("http://localhost:9000/api/login",{
            username,
            password,
        }).then((res)=>{
            if(res.data.user){
                console.log(res.data)
                const token=res.data.user
                localStorage.setItem('token',token)
                alert("hello Student")
                nav("/Dash")
            }else{
                alert("try again")
            }
        })
    };

    return (
      <div className="body">
        <div class="container maa">
          <h1 style={{color:'white',textAlign:'center'}}>Hi  <span style={{color:'#C9F4AA'}}>Welcome to our ThePurrfectPetStore</span></h1>
            <div class="row" >
           <div class="login-box col-lg-6">
    <h2>Login</h2>
    <form onSubmit={submitReview}>
      <div class="user-box">
        <input type="email" value={username} name="username" onChange={(e)=>{
          setUserName(e.target.value);
        }} 
        required />
        <label>Username</label>
      </div>
      <div class="user-box">
        <input value={password} type="password" name="password" 
        onChange={(e)=>{
          setPassword(e.target.value);
        }}
        required="" />
        <label>Password</label>
        <h3 style={{textDecoration:'None'}}><Link to="/register">Have you registered?</Link></h3>
      </div>
      <button class="a">Submit</button>
    </form>
  </div>
  </div>
  </div>
        </div>
    )
}

export default Login;

