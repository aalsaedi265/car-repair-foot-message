import React,{useEffect} from 'react';

import "./massage.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Carshop({priceSubtract,priceAdd,service,price ,name,add,subtract,cost}){

 

    return(
    
    <>
    
    <h1>Car</h1>

    <form>
        <div className='oil'> 

    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.motor1.com/images/mgl/bR766/s3/how-to-change-your-motorcycle-oil.jpg"
        alt="oil"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           Oil Change
        </Typography>
        <Typography  variant="body2" >
        Synthetic, last for six months before chnage needs to be changed again.
        </Typography>
      </CardContent>
      
      <Button value={50} name="synthatic oil" 
       onClick={(e)=>{
        add(e)
        priceAdd(e)
        service(e)
      }} 
      variant="contained" size="small">add</Button>

        <Button value={50} name="none" 
        onClick={(e)=>{
            priceSubtract(e)
          subtract(e)
          service(e)
        }} 
        variant="contained" size="small"> remove</Button>
     
    </Card>

    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.squarespace-cdn.com/content/v1/5c6dcbf5f4755a48d74da555/1586458542915-ANPCJ45JLLTEEGNP33WA/car+window+repair+and+replacement+houston+tx.jpg"
        alt="oil"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           Replace Window
        </Typography>
        <Typography  variant="body2" >
        will replace you'er window broken or not you'er call, with the glass we have
        </Typography>
      </CardContent>
      
      <Button value={80} name="replace window" 
       onClick={(e)=>{
        add(e)
        priceAdd(e)
        service(e)
      }} 
      variant="contained" size="small">add</Button>

        <Button value={80} name="none" 
        onClick={(e)=>{
            priceSubtract(e)
          subtract(e)
          service(e)
        }} 
        variant="contained" size="small"> remove</Button>
     
    </Card>

    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.wcmanet.org/wp-content/uploads/2020/04/Cover-the-hole.jpg"
        alt="oil"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           Tape up Window
        </Typography>
        <Typography  variant="body2" >
        will cover the whole were the window used to be with tape and glue
        </Typography>
      </CardContent>
      
      <Button value={30} name="Tape up Window" 
       onClick={(e)=>{
        add(e)
        priceAdd(e)
        service(e)
      }} 
      variant="contained" size="small">add</Button>

        <Button value={30} name="none" 
        onClick={(e)=>{
            priceSubtract(e)
          subtract(e)
          service(e)
        }} 
        variant="contained" size="small"> remove</Button>
     
    </Card>

    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="http://gwrench.com/wp-content/uploads/2020/07/vista-wheel-alignment-service.jpg"
        alt="oil"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           Align Tire
        </Typography>
        <Typography  variant="body2" >
        Bring the tire we will align it
        </Typography>
      </CardContent>
      
      <Button value={40} name="align tire" 
       onClick={(e)=>{
        add(e)
        priceAdd(e)
        service(e)
      }} 
      variant="contained" size="small">add</Button>

        <Button value={40} name="none" 
        onClick={(e)=>{
            priceSubtract(e)
          subtract(e)
          service(e)
        }} 
        variant="contained" size="small"> remove</Button>
     
    </Card>

    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.holtsauto.com/holts/wp-content/uploads/sites/6/2020/03/iStock-639236724.jpg"
        alt="oil"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           Fix Head or Rear lights
        </Typography>
        <Typography  variant="body2" >
        Replace the light on the front or the back, we can do both but will charge double for both.
        </Typography>
      </CardContent>
      
      <Button value={50} name="Light Replacement" 
       onClick={(e)=>{
        add(e)
        priceAdd(e)
        service(e)
      }} 
      variant="contained" size="small">add</Button>

        <Button value={50} name="none" 
        onClick={(e)=>{
            priceSubtract(e)
          subtract(e)
          service(e)
        }} 
        variant="contained" size="small"> remove</Button>
     
    </Card>
    
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.platinum-wash.com/wp-content/uploads/2017/04/cta_truckwash.jpg"
        alt="oil"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           No Questions Clean
        </Typography>
        <Typography  variant="body2" >
            Bring you'er car and will clean it, both inside and out,no questoin or explanition. Just come in and say I want my car cleaned 
        </Typography>
      </CardContent>
      
      <Button value={300} name="cleaning" 
       onClick={(e)=>{
        add(e)
        priceAdd(e)
        service(e)
      }} 
      variant="contained" size="small">add</Button>

        <Button value={300} name="none" 
        onClick={(e)=>{
            priceSubtract(e)
          subtract(e)
          service(e)
        }} 
        variant="contained" size="small"> remove</Button>
     
    </Card>

    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.andymohrcollision.com/wp-content/uploads/2020/08/bumper-damage.png"
        alt="oil"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           Hammering out Bumper
        </Typography>
        <Typography  variant="body2" >
            straitening a bumper or keeping it attached to vehicle using our expericed suturing technique with metal wires
        </Typography>
      </CardContent>
      
      <Button value={60} name="bumper service" 
       onClick={(e)=>{
        add(e)
        priceAdd(e)
        service(e)
      }} 
      variant="contained" size="small">add</Button>

        <Button value={60} name="none" 
        onClick={(e)=>{
            priceSubtract(e)
          subtract(e)
          service(e)
        }} 
        variant="contained" size="small"> remove</Button>
     
    </Card>

        </div>
        <div className="carShopBtn" >
        <Button type="submit" variant="contained" size="large"> Submit Request</Button>
        </div>
    </form>
    </>)
}

export default Carshop