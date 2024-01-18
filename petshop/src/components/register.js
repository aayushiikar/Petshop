import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";
function Register(props){
  const nav=useNavigate();
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    
    const submitReview=async (e)=>
    {
      e.preventDefault();
      await axios.post("http://localhost:9000/api/register",{
            name,
            username,
            password,
        }).then((res)=>{
            nav('/')
        })
    };

    return (
        <div class="container">
           <h1 style={{color:'white',textAlign:'center'}}>Hi  <span style={{color:'#C9F4AA'}}>Welcome to our ThePurrfectPetStore</span></h1>
            <div class="row">
           <div class="login-box col-lg-6">
    <h2>Register</h2>
    <form onSubmit={submitReview}>
      <div class="user-box">
        <input type="text" value={name} name="name" onChange={(e)=>{
          setName(e.target.value);
        }} 
        required />
        <label>Name</label>
      </div>
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
      </div>
      <button  class="a">Submit</button>
    </form>
  </div>
  
  </div>
        </div>
    )
}

export default Register;
