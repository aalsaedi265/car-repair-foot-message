import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';


function SelNavBar({logout,cost,user}){


function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => logout());
  }

console.log(user)

    return(
    

  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>

           <Typography>Get to Work {user? user.full_name:'' } </Typography> 

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
          <Button 
            onClick={handleLogout}
            color="inherit">Logout</Button>

          
          <Button  color="inherit">  <Link to="/massage"> Massage </Link>  </Button>
          <Button color="inherit">   <Link to="/carshop"> carshop </Link>  </Button>
          <Button  color="inherit">  <Link to="/"> Home </Link>            </Button>

          </Typography>
           the total cost so far ${cost}
        </Toolbar>
      </AppBar>
    </Box>
  );

}

export default SelNavBar;