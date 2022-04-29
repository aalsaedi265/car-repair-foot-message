import './App.css';
import { createTheme,ThemeProvider } from '@mui/material/styles';

import React,{useState} from 'react'
import {Route, Routes } from "react-router-dom";

import Login from './components/Login'
import SelNavBar from './components/SelNavBar'
import Massage from './components/massage';
import Payment from './components/payment'
import CarShop from './components/carShop'

function App() {

  const [pin, setPin]=useState(null)

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




  return (
    <div className="App">
      <ThemeProvider theme ={theme}>

        <SelNavBar/>
      <Routes>

        <Route exact path='/' element={<Login setPin={setPin}/> }/>

        <Route exact path='/massage' element={<Massage/>} />

        <Route exact path='/carshop' element={<CarShop/>} />

        <Route exact path='/payment' element={<Payment/>} />

      </Routes>

      </ThemeProvider>
    </div>
  );
}

export default App;
