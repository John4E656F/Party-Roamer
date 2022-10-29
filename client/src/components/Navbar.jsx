import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Drawer,
  IconButton,
  Avatar
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux'
import LangSwitcher from './LangSwitcher'
import { useTranslation } from 'react-i18next'
import Logo from '../assets/PartyRoamerLogo.svg'

const Navbar = (props) => {
  const { t, i18n } = useTranslation()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [t('navigation.home'), t('navigation.pricing'), t('navigation.contact')]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <NavLink to={item.toLocaleLowerCase()}>
                <ListItemText primary={item}/>
              </NavLink>
            </ListItemButton>
          </ListItem>
          ))}
      </List>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined;

    return(
      <>
        <Box sx={{ display: 'flex'}} >
          <AppBar
              position='static'
              color='primary'
              elevation={0}
          >
              <Toolbar >
                <Container width="xl"
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // gap: "10px",

                  }}>
                    <Box sx={{flexGrow: 1}}>
                      <Avatar src={Logo} sx={{ width: 60, height: 60, }} />
                    </Box>
                    <List sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 2 }}>
                        <ListItem alignItems="flex-start"
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            
                          }}>
                            {navItems.map((item) => (
                              <Button key={item} sx={{ color: '#fff' }}>
                                {item}
                              </Button>
                            ))}
                        </ListItem>
                      </List>
                  <Box  sx={{ display: { xs: 'none', sm: 'flex'}, flexGrow:1, justifyContent:"flex-end", }}>
                      <Button component="a" href="#" variant="contained">Book Us</Button>
                      <LangSwitcher />
                  </Box>
                  <IconButton
                    color="inherit"
                    aria-label="open navigation"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}>
                      <MenuIcon />
                    </IconButton>
                  <Box component='nav' sx={{backgroundColor: 'blue'}}>
                    <Drawer
                      container={container}
                      variant="temporary"
                      open={mobileOpen}
                      onClose={handleDrawerToggle}
                      sx={{
                        // backgroundColor: 'red',
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240},
                      }}>
                        {drawer}
                      </Drawer>
                  </Box>
                </Container>
              </Toolbar>
          </AppBar>
        </Box>
      </>
    )
}

export default Navbar