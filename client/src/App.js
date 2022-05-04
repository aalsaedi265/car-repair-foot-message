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

  const [user, setUser]=useState('')
  const [cost, setCost]=useState(0)

  function handleAdd(add){

    if (cost >= 0) setCost( cost+parseFloat(add.target.value))
    }
    
  function handleSubtract(x){
  if (cost > 0) setCost(cost-parseFloat(x.target.value))
  }

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
//will use user to give access to 
//massage and car shop using ternary

function logout(){
  setUser(null)
}
function login(x){
  setUser(x)
  // setUser(parseInt(x))
}


fetch('/car_shops')
.then(response => response.json().then(d=> console.log(d) ) )


const[name, setName]=useState('')
const[request, setRequest]=useState('')
const[price, setPirce]=useState(0)


  function dataString(e){
    setName( e.target.name )
  }
  function dataAddNumber(e){
    setPirce( cost+ parseFloat( e.target.value) )
  }
  function dataSubNumber(e){
    if ( cost >0) setPirce( cost- parseFloat( e.target.value) )
  }
  function dataRequest(e){
    setRequest( e.target.value )
  }


  return (


    // {pin? render the nav bart and convertLength
    
    // : will render the login and sigh up.}

    <div className="App">
      <ThemeProvider theme ={theme}>

        <SelNavBar user={user} logout={logout} cost={cost} />
      <Routes>

        <Route exact path='/' element={<Login user={user} login={login}/> }/>

        <Route exact path='/massage' element={<Massage price={price} request={request} name={name} dataString={dataString} dataRequest={dataRequest} dataSubNumber={dataSubNumber} dataAddNumber={dataAddNumber} add={handleAdd} cost={cost} subtract={handleSubtract}/>} />

        <Route exact path='/carshop' element={<CarShop service={dataString} priceAdd={dataAddNumber} priceSubtract={dataSubNumber} price={price} name={name} add={handleAdd} cost={cost} subtract={handleSubtract} />} />

        <Route exact path='/payment' element={<Payment name={name} request={request} cost={cost} />} />

      </Routes>

      </ThemeProvider>
    </div>
  );
}

export default App;
