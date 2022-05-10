import './App.css';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import React,{useState, useEffect} from 'react'
import {Route, Routes } from "react-router-dom";
import Login from './components/Login'
import SelNavBar from './components/SelNavBar'
import Massage from './components/massage';
// import Payment from './components/payment'
import CarShop from './components/carShop'


function App() {

  const [user, setUser]=useState('')
  const [cost, setCost]=useState('')

    const[name, setName]=useState('')
    const[request, setRequest]=useState('')
    const[price, setPirce]=useState(0)

  function handleAdd(add){

    if (price >= 0) setPirce( price+parseFloat(add.target.value))
    }
    
  function handleSubtract(x){
  if (price > 0) setPirce(price-parseFloat(x.target.value))
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

function logout(){
  setUser(null)
}
function login(x){
  setUser(x)
  // setUser(parseInt(x))
}

  function dataString(e){
    setName( e.target.name )
  }
  function dataAddNumber(e){
    setPirce( price+ parseFloat( e.target.value) )
  }
  function dataSubNumber(e){
    if ( price >0) setPirce( price- parseFloat( e.target.value) )
  }
  function dataRequest(e){
    setRequest( e.target.value )
  }


  return (

    <div className="App">
      <ThemeProvider theme ={theme}>
      {user?(
          <>
            <SelNavBar user={user} logout={logout} cost={price} />
      <Routes>
        
        <Route exact path='/' element={<Login user={user} login={login}/> }/>

        <Route exact path='/massage' element={<Massage  setCost={setCost} price={price} request={request} name={name} dataString={dataString} dataRequest={dataRequest} dataSubNumber={dataSubNumber} dataAddNumber={dataAddNumber} add={handleAdd} subtract={handleSubtract}/>} />

        <Route exact path='/carshop' element={<CarShop setCost={setCost} service={dataString} priceAdd={dataAddNumber} priceSubtract={dataSubNumber} price={price} name={name} add={handleAdd} subtract={handleSubtract} />} />

        {/* <Route exact path='/payment' element={<Payment cost={cost} />} /> */}
      </Routes>
          </>

        ):(
          <>
            <Login user={user} login={login}/>
          </>
        )}
      </ThemeProvider>
    </div>
  );
}
export default App;