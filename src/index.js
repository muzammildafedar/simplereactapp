import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider, theme } from '@chakra-ui/react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Map from './comp/Map'
import Header from './comp/header'
import Login from './comp/login/login'
import User from './comp/userInfo/User'





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
        <Route  path="/" element={<App/>}/>
        <Route  path="/map" element={<Map/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/user" element={<User/>}/>


      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
)
