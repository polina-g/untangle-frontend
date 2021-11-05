import { Link } from 'react-router-dom';
import { logOut } from '../services/firebase'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import { StyledLogo } from '../styles';
import { LinkStyle } from '../styles';

const Nav = ({user}) => {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <Link to ='/'>
            <Typography variant='h6'>
              <StyledLogo  src='https://i.imgur.com/MPEA9T2.png'/>
            </Typography>
           </Link>
            { user ? 
             <>
              <LinkStyle>
                <Link to='/dashboard'>
                  <Button
                    variant='contained'
                    color='secondary'
                    size='large'
                    sx={{ml:3}}
                  >
                    Dashboard
                  </Button>
                </Link>
              </LinkStyle>
                <LinkStyle>
                  <Link to='/entries/new'>
                    <Button 
                      variant='contained' 
                      color='secondary'
                      size='large'
                      sx={{ml:3}}
                    >
                      New Entry
                    </Button>
                  </Link>
                </LinkStyle>
                <LinkStyle>
                  <Link to='/entries'>
                    <Button 
                      variant='contained' 
                      color='secondary'
                      size='large'
                      sx={{ml:3}}
                    >
                      All Entries
                    </Button>
                  </Link>
                </LinkStyle>
                <Typography
                  variant='h3'
                  noWrap
                  component='div'
                  color='secondary'
                  sx={{ flexGrow:1 }}
                >
                  Untangle
                </Typography>
                <Avatar alt='Avatar image' src={user.photoURL} />
                <Button 
                  variant='contained' 
                  color='secondary'
                  sx={{ml:3}}
                  size='large'
                  onClick={logOut}
                >
                  <LogoutRoundedIcon sx={{mr:1}}/>
                  Log Out
                </Button>
             </>
            :
             <> 
              <Box sx={{ flexGrow:1 }}></Box>
              <LinkStyle>
                <Link to='/login'>
                  <Button 
                    variant='contained' 
                    color='secondary'
                    sx={{ml:3}}
                    size='large'
                    onClick={logOut}
                  >
                    Log In
                  </Button>
                </Link>
              </LinkStyle>
              <LinkStyle>
                <Link to='/register'>
                  <Button 
                    variant='contained' 
                    color='secondary'
                    sx={{ml:3}}
                    size='large'
                    onClick={logOut}
                  >
                    Sign Up
                  </Button>
                </Link>
              </LinkStyle>
            </>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
};

  export default Nav;