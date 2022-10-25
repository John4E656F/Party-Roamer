import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Container, 
  List,
  ListItem,
  useTheme
} from '@mui/material'

import { Link } from 'react-router-dom';


export default function NavBar() {
const theme = useTheme();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])


  return (

 
        <Toolbar >
          <Container maxWidth="xl" 
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              gap: "10px",
            }}>
            <Container maxWidth="sm">
            </Container>
            <Container maxWidth="sm">
              <List>
                <ListItem alignItems="flex-start"
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',

                  }}>
                  <a className='navlink' href='/home' >Home</a>
                  <a className='navlink' href='/works' >Projects</a>
                  <a className='navlink' href='/contact' >Contact</a>
                </ListItem>
              </List>
            </Container >
            <Container maxWidth="sm" sx={{ display: 'flex', justifyContent:"flex-end" }}>
            <Button variant="contained">Download my CV</Button>
            </Container>
          </Container>
        </Toolbar>
 

  );
}
