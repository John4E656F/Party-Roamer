import React, { useState, useEffect } from 'react'
import { Link, NavLink as RouterLink } from 'react-router-dom'

import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    List,
    ListItem,
    Button
} from '@mui/material'
import { useSelector } from 'react-redux'
// import LangSwitcher from './LangSwitcher'
import { useTranslation } from 'react-i18next'

const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Francais' },
    nl: { nativeName: 'Nederlands' },
}

const Navbar = (props) => {
  const { t, i18n } = useTranslation()

    return(
        <>
            <AppBar
                position='static'
                color='primary'
                elevation={0}
            >
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
                          <a className='navlink' href='/home' >{t('navigation.home')}</a>
                          <a className='navlink' href='/pricing' >{t('navigation.pricing')}</a>
                          <a className='navlink' href='/contact' >{t('navigation.contact')}</a>
                        </ListItem>
                      </List>
                    </Container >
                    <Container maxWidth="sm" sx={{ display: 'flex', justifyContent:"flex-end" }}>
                      {/* <LangSwitcher /> */}
                    <a href="#" target="_blank" rel="noopener noreferrer" download><Button variant="contained">Download my CV</Button></a>
                    </Container>
                  </Container>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar