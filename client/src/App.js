import './App.css';
import { createTheme,ThemeProvider } from '@mui/material/styles';

import React,{useState, useEffect} from 'react'
import {Route, Routes } from "react-router-dom";

import Login from './components/Login'
import SelNavBar from './components/SelNavBar'
import Massage from './components/massage';
import Payment from './components/payment'
import CarShop from './components/carShop'


function App() {

  const [user, setUser]=useState("")
  const [cost, setCost]=useState("")

  useEffect(() => {
    fetch('/me')
    .then(response => response.json())
    .then(data => setUser(data) )
  },[])

  const theme = createTheme({
    palette: {
      primary: {
        main: '#e0e0e0'
        //sliver
        ,
      },
      secondary: {
        main: '#fffffb',
        //ligh light brown
      },
    },
    typography:{
      fontFamily:'Century Gothic,CenturyGothic,AppleGothic,sans-serif',
      color: '#a98274'
      //baige like my car
    }
  });
//will use pin to give access to 
//massage and car shop using ternary

function logout(){
  setUser(null)
}
function login(x){
  setUser(x)
}

  return (


    // {pin? render the nav bart and convertLength
    
    // : will render the login and sigh up.}

    <div className="App">
      <ThemeProvider theme ={theme}>

        <SelNavBar user={user} logout={logout} cost={cost} />
      <Routes>

        <Route exact path='/' element={<Login user={user} login={login}/> }/>

        <Route exact path='/massage' element={<Massage setCost={setCost}/>} />

        <Route exact path='/carshop' element={<CarShop setCost={setCost} />} />

        <Route exact path='/payment' element={<Payment cost={cost} />} />

      </Routes>

      </ThemeProvider>
    </div>
  );
}

export default App;
