import React from "react";
import './header.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import Map from './Map'
  import UserProfile from './UserProfile';
  import Login from './login/login'
  import { Navigate } from 'react-router-dom';
  import render from 'react-dom'; 


  export default function Header() {
    const email = UserProfile.getName().toString(); 
    return (
      <div> 
         <div class="topnav" id="myTopnav">
      <Link to="/">Home</Link>
      <Link to ="/user">Save address</Link>
      <Link to="/map">Checek destination</Link>
      <Link to="/login" onClick={UserProfile.unSet()}>Logout {email}</Link>
      
    </div>
      </div>
    );
  }


