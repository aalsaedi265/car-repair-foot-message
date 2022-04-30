import React,{useState} from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';




function Login ({login, user}){

    const [press, setPress] =useState("")
    const [error, setError] =useState("")

    function handleSubmit(e){

      e.preventDefault()
      fetch('/login',{

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body :JSON.stringify({press})

      })
      .then(response =>{
        if (response.ok){
          response.json()
          .then(data=> login(data))
        }else{
          response.json()
          .catch( err =>{
            setError("wrong number, try again")
          })
        }
      })
    

    }

    let num=[...Array(9).keys()]

    let btns= num.map(btn=> {

      return (
      
      // <Box m={1} pt={2}>
      <Button onClick={e=> setPress([...press,e.target.value].join('') )}
      variant="contained" size="small" color="primary" value={btn} >{btn}</Button>
              // {/* </Box> */}
      )
    })

  
    return (

      // {pin? (image code)
      // :(will redner the login in code)}


        <>

        <h1 className="title">Welcome to Lucious's Carshop and Foot Massage</h1>


        <form  onSubmit={handleSubmit}>

        <TextField
         id="outlined-number"
         label="Number"
         type="number"
         InputLabelProps={{
           shrink: true,
         }}
        value={press}
        onChange={e=> setPress(e.target.value)}
        />

        <p className="error">{error}</p>

        <div id="buttonContainer"> 
         
       {btns}


    </div>

        <Button type="submit" variant="contained" size="large" color="secondary">
          Enter Number
        </Button>
   </form>
  

      
            <>
        <h1> Here to Fix you'er Body or Car</h1>

        <img  src="https://powellframeandcollision.net/wp-content/uploads/2018/04/autosmall-homepage.jpg" alt="strong arms"/>
        <p> These hands will take care of you</p>

        <Button href="/massage" type="button" variant="contained" size="large" color="secondary">
          Massage
        </Button>
        
         <Button href="/carshop" className="btn" type="buton" variant="contained" size="large" color="secondary"> car shop  </Button> 
          
       
            </>

    </>
    )
}

export default  Login