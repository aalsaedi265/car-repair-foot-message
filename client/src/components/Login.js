import react,{useState} from 'react'
import Card from '@mui/material/Card';

import {Link} from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';




function Login ({setPin}){

    const [press, setPress] =useState(null)

    return (
        <>

        <h1 className="title">Welcome to Lucious's Carshop and Foot Massage</h1>
        <List>
        <form >

        <TextField variant="outlined" label="Number"></TextField>

        <div id="buttonContainer"> 
    <Button variant="contained" size="small" color="primary" value= {1}> 1 </Button>

    <Button variant="contained" size="small" color="primary" value={2}> 2 </Button>

    <Button variant="contained" size="small" color="primary" value= {3}> 3 </Button> 

    <Button variant="contained" size="small" color="primary" value={4} > 4 </Button> 

    <Button variant="contained" size="small" color="primary" value={5} > 5 </Button> 

    <Button variant="contained" size="small" color="primary" value={6} > 6 </Button> 

    <Button variant="contained" size="small" color="primary" value={7} > 7 </Button> 

    <Button variant="contained" size="small" color="primary" value= {8}> 8 </Button> 

    <Button variant="contained" size="small" color="primary" value= {9}> 8 </Button> 

    </div>

        <Button type="submit" variant="contained" size="large" color="secondary">
          Enter Number
        </Button>
   </form>
   </List>

        <Card colors="primary" variant="outlined">{
            <>
        <h1> Here to Fix you'er Body or Car</h1>

        <img  src="https://powellframeandcollision.net/wp-content/uploads/2018/04/autosmall-homepage.jpg" alt="strong arms"/>
        <p> These hands will take care of you</p>

        <Button type="button" variant="contained" size="large" color="secondary">
          <a href="/massage">Massage</a>
        </Button>

        <Button type="buton" variant="contained" size="large" color="secondary">
          <Link to= "/carshop"> car shop</Link>
        </Button>
            </>
            }</Card>

    </>
    )
}

export default  Login