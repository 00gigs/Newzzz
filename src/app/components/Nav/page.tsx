'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut, } from 'firebase/auth';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function ButtonAppBar() {

  const [user,setUser] = useState(null)


  useEffect(() => {
    const auth = getAuth()
  const unsubscirbe  = onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  })
  return () => unsubscirbe()
  }, [])

const handleSignout = ()=>{
  const auth = getAuth()
  signOut(auth).then(()=>{
    console.log('User signed out');
  }).catch(()=>{
    console.error('Error signing out: ', error);
  })
}



  return (
    <Box sx={{ flexGrow: 1, mb:15 }}>
      <AppBar position="absolute" sx={{bgcolor:'brown'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href='/' style={{color:'whitesmoke', textDecoration:'none'}}>
            ⚡️ Flash Feed.COM
            </Link>
          </Typography>

          {user && (
            <React.Fragment>
              <Typography variant="subtitle1" sx={{ mr: 2 }}>
                {user.email || 'User'}
              </Typography>
              <Button color="inherit" onClick={handleSignout}>Sign Out</Button>
            </React.Fragment>
          )}

          <Link href='/Register' passHref>
          <Button  color="inherit"><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/user.png" alt="user"/></Button>
          </Link>
          
          {/* <Search>
            <SearchIconWrapper>
              
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
