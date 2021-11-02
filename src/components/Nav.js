import { Link } from 'react-router-dom';
import { logOut } from '../services/firebase'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { StyledLogo } from '../styles';

const Nav = ({user}) => {


  return (
    <Box>
    <AppBar position='static'>
      <Toolbar>
        <Link to ='/'>
            <Typography variant="h6">
              <StyledLogo  src="https://i.imgur.com/MPEA9T2.png"/>
            </Typography>
          </Link>
        <Typography
            variant="h3"
            noWrap
            component="div"
            color='secondary'
            sx={{ ml:3 }}
          >
            Untangle
        </Typography>
           { user ? 
             <>
               <li>
                 <Link to="/dashboard">
                     Dashboard
                 </Link>
               </li>
               <li>
                 <Link to={{
                   pathname: '/entries/new',
                 }}>
                 New Entry
                 </Link>
               </li>
               <li>
               <Link to={{
                   pathname: '/entries',
                 }}>
                 All Entries
                 </Link>
               </li>
               <li onClick={logOut}>
                   Log Out
               </li>
             </>
            :
             <> 
               <li>
                 <Link to="/">
                     Home
                 </Link>
               </li>
               <li>
                 <Link to="/login">
                     Log In
                 </Link>
               </li>
               <li>
                 <Link to="/register">
                     Sign Up
                 </Link>
               </li>
             </>
         }
      </Toolbar>
    </AppBar>
  </Box>
      // <nav>
      //   <ul>
      //     { user ? 
      //       <>
      //         <li onClick={logOut}>
      //             Log Out
      //         </li>
      //         <li>
      //           <Link to="/dashboard">
      //               Dashboard
      //           </Link>
      //         </li>
      //         <li>
      //           <Link to={{
      //             pathname: '/entries/new',
      //           }}>
      //           New Entry
      //           </Link>
      //         </li>
      //         <li>
      //         <Link to={{
      //             pathname: '/entries',
      //           }}>
      //           All Entries
      //           </Link>
      //         </li>
      //       </>
      //      :
      //       <> 
      //         <li>
      //           <Link to="/">
      //               Home
      //           </Link>
      //         </li>
      //         <li>
      //           <Link to="/login">
      //               Log In
      //           </Link>
      //         </li>
      //         <li>
      //           <Link to="/register">
      //               Sign Up
      //           </Link>
      //         </li>
      //       </>
      //   }
      //   </ul>
      // </nav>
    );
  };

  export default Nav;