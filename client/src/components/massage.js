
import React,{useState, useEffect} from 'react';

import "./massage.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function massage({add,subtract}){


    return (

        <>
        <h1>Fix that body</h1>

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
      
        <Button variant="contained" size="small">add</Button>
        <Button variant="contained" size="small"> remove</Button>
     
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
      
        <Button value={4}  onClick={add}variant="contained" size="small">add</Button>
        <Button variant="contained" size="small"> remove</Button>
     
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
          Bring you'er own lubricant to minmize friction $0.00. You bring it and our team will use it, no questions asked (unless smells bad.)
        </Typography>
      </CardContent>
      
        <Button variant="contained" size="small">add</Button>
        <Button variant="contained" size="small"> remove</Button>
     
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
      
        <Button variant="contained" size="small">add</Button>
        <Button variant="contained" size="small"> remove</Button>
     
    </Card>

    </div>
        
    

        </>

    )
}

export default massage