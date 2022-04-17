import React from 'react'
import Map from './comp/Map'
import Login from './comp/login/login'
import User from './comp/userInfo/User'
import UserProfile from './comp/UserProfile';
import { Navigate } from 'react-router-dom';
import Header from './comp/header'


import {
  Routes,
  Route,
  Link
} from "react-router-dom";

 function App(){
   if (UserProfile.getName().toString() == ""){
    
    return (
<Navigate
         to="/login" 
      />);
} else {
  const name = UserProfile.getName().toString(); 

  return (

    <div className="MyApp">
        

      Welcome {name}
      {/* <Login/> */}
    </div >
    
  
)

}



  
}
export default App
