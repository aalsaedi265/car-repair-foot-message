import React from 'react';

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

           <Typography>Get to Work {user.full_name} </Typography> 

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
          <Button 
          // href="/" when  the login in works delet it beasue it will outamticialy redirects to home
          href="/"
          onClick={handleLogout}
          color="inherit">Logout</Button>
          <Button href="/massage" color="inherit"> Massage </Button>
          <Button href="/carshop" color="inherit"> CarShop</Button>
          <Button href="/payment" color="inherit"> CheckOut</Button>

          </Typography>
           the total cost so far ${cost}
        </Toolbar>
      </AppBar>
    </Box>
  );

}

export default SelNavBar;