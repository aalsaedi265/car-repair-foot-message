
import React,{useEffect} from 'react';

import "./massage.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Payment from './payment'


function Massage({data, setCost, price,request,name,dataRequest,dataSubNumber,dataAddNumber,add,subtract,cost,dataString}){



  function handleSubmit(e){
    e.preventDefault()

    fetch("/massages",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        request: request,
        price: price
      })
    })
    .then(response => response.json() )
    .then( () => {
      fetch('/me/massage')
        .then( resp => resp.json() )
        .then( data => setCost(data) )
      
    })
  }

  useEffect(()=>{
    fetch('/me/massage')
    .then(resp => resp.json() )
    
  },[])


    
    return (

        <div>
        <h1> Body </h1>

      <form onSubmit={handleSubmit}>

        <div className="oil">
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://zenithsupplies.com/wp-content/uploads/2019/01/ARGAN.jpg"
        alt="oil"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Aragon oil
        </Typography>
        <Typography  variant="body2" >
          Great for skin and hair. Leave a lovely aroma, cost $5.00
        </Typography>
      </CardContent>
      
      <Button value={5} name="Aragon oil" 
       onClick={(e)=>{
        add(e)
        dataAddNumber(e)
        dataString(e)
      }} 
      variant="contained" size="small">add</Button>

        <Button value={5} name="none" 
        onClick={(e)=>{
          dataSubNumber(e)
          subtract(e)
          dataString(e)
        }} 
        variant="contained" size="small"> remove</Button>
     
    </Card>

    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://i.etsystatic.com/5737923/r/il/c5dda3/2584357473/il_340x270.2584357473_3i0s.jpg"
        alt="oil"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Coconut Lotion
        </Typography>
        <Typography  variant="body2" >
         Coconut Lotion $4, a woundful and blissful experience for you'er feet
        </Typography>
      </CardContent>
      
        <Button value={4} 
        
        onClick={(e)=>{
          add(e)
          dataAddNumber(e)
          dataString(e)
        }} 
        
        variant="contained" name="Coconut Lotion" size="small">add</Button>
        <Button value={4}
            onClick={(e)=>{
              dataSubNumber(e)
              subtract(e)
              dataString(e)
            }}  
         variant="contained" size="small"> remove</Button>
     
    </Card>

    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://femina.wwmindia.com/content/2018/apr/shutterstock727361647nooil1524640532.jpg"
        alt="oil"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bring fomr Home
        </Typography>
        <Typography  variant="body2" >
          Bring you'er own lubricant to minmize friction $0.00.
        </Typography>
      </CardContent>
      
      <Button 
        onClick={()=>{
          dataString('brough from home')
        }}
      
        variant="contained" size="small"> From Home </Button>

    </Card>

    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://5.imimg.com/data5/LT/DM/MY-38171796/industrial-lubricant-oil-250x250.jpg"
        alt="oil"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Literal Engine Oil
        </Typography>
        <Typography  variant="body2" >
          Engine oil "synthetic", we do not recommend, but it is available, $10.00
        </Typography>
      </CardContent>
      
      <Button value={10}  name="synthetic engine oil"
          onClick={(e)=>{
            add(e)
            dataAddNumber(e)
            dataString(e)
          }} 
      variant="contained" size="small">add</Button>
        <Button value={10}
           onClick={(e)=>{
            dataSubNumber(e)
            subtract(e)
            dataString(e)
          }} 
          variant="contained" size="small"> remove</Button>
     
    </Card>

    </div>
        
      <div >
     
        <TextField
          className="inputeRequest"
          name="outlined-multiline-flexible"
          label="request"
          multiline
          rows={5}
          style ={{width: '45%'}}
          color="secondary"
          id="request"
          onChange={dataRequest}
        />
       
        </div>

        <Button type="submit" variant="contained" size="medium"> Submit Request</Button>
        
        </form>
        {/* <button onClick={data}>OOOOHHHHHHHHHHHHHHH</button> */}
       
       <Payment data={data}  name={name} price={price} />
    </div>
    )
}

export default Massage