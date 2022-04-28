import './App.css';
import { createTheme,ThemeProvider } from '@mui/material/styles';

import Login from './components/Login'
import SelNavBar from './components/SelNavBar'
import massage from './components/massage';
import payment from './components/payment'
import carShop from './components/carShop'

function App() {



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




  return (
    <div className="App">
      <ThemeProvider theme ={theme}>

      <Login/>
      </ThemeProvider>
    </div>
  );
}

export default App;
