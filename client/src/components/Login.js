import react,{useState} from 'react'

import {Link} from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';





function Login ({setPin}){

    const [press, setPress] =useState(null)

    return (
        <>

        <h1 className="title">Welcome to Lucious's Carshop and Foot Massage</h1>
        <form >

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

        <div id="buttonContainer"> 
    <Button
        onClick={e=> setPress([...press,e.target.value].join('') )}
        variant="contained" size="small" color="primary" value= {1}> 1 </Button>

    <Button 
    onClick={e=> setPress([...press,e.target.value].join(''))}
    variant="contained" size="small" color="primary" value={2}> 2 </Button>

    <Button 
    onClick={e=> setPress([...press,e.target.value].join(''))}
    variant="contained" size="small" color="primary" value= {3}> 3 </Button> 

    <Button
    onClick={e=> setPress([...press,e.target.value].join(''))  }
    variant="contained" size="small" color="primary" value={4} > 4 </Button> 

    <Button 
    onClick={e=> setPress([...press,e.target.value].join(''))}
    variant="contained" size="small" color="primary" value={5} > 5 </Button> 

    <Button
    onClick={e=> setPress([...press,e.target.value].join(''))}
    variant="contained" size="small" color="primary" value={6} > 6 </Button> 

    <Button 
    onClick={e=> setPress([...press,e.target.value].join(''))}
    variant="contained" size="small" color="primary" value={7} > 7 </Button> 

    <Button
    onClick={e=> setPress([...press,e.target.value].join(''))}
    variant="contained" size="small" color="primary" value= {8}> 8 </Button> 

    <Button 
    onClick={e=> setPress([...press,e.target.value].join(''))}
    variant="contained" size="small" color="primary" value= {9}> 8 </Button> 

    </div>

        <Button type="submit" variant="contained" size="large" color="secondary">
          Enter Number
        </Button>
   </form>
  

      
            <>
        <h1> Here to Fix you'er Body or Car</h1>

        <img  src="https://powellframeandcollision.net/wp-content/uploads/2018/04/autosmall-homepage.jpg" alt="strong arms"/>
        <p> These hands will take care of you</p>

        <Button type="button" variant="contained" size="large" color="secondary">
          <a href="/massage">Massage</a>
        </Button>

          <Link to= "/carshop"> 
             <Button type="buton" variant="contained" size="large" color="secondary"> car shop  </Button> 
          </Link>
       
            </>

    </>
    )
}

export default  Login