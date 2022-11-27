import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
    Typography,
    Grid,
    Avatar,
    Divider,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import Logo from '../assets/images/PartyRoamerLogo.svg'

const Footer = (props) => {
  const { t } = useTranslation()

    return(
        <Grid container
        component='footer'
            sx={{
                justifyContent: 'center',
              alignItems: 'center',
              padding: { xs: "0 0 0 0", sm: "0 0 0 0", md: "0 8em 0 8em", lg: "0 12em 0 12em" } ,

                backgroundColor: '#373739'
        }}>
            <Grid item xs={6} sx={{
                display: 'flex', 
                justifyContent: 'center', 
                padding: { xs: "0 0 0 0", sm: "0 0 0 0", md: "8em 0 0 0", lg: "2em 0 0 0" }
            }}>
                <Link to={t('navigation.home')}>
                    <Avatar src={Logo} sx={{ width: 100, height: 100, }} />
                </Link>
            </Grid>
            <Grid item xs={6} sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Grid container sx={{
                display: 'flex',
                justifyContent: 'center',
                color: 'white'
                }}>
                    <Grid xs={12} item sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    }}>
                        <Typography variant="h4">
                            Contact
                        </Typography>
                    </Grid>
                    <Grid xs={12} item sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: '0.5em'
                    }}>
                        <Typography>
                            +32 49 18 81 17
                        </Typography>
                    </Grid>
                    <Grid item sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    }}>
                        <Typography>
                        contact@partyroamer.be
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Divider width='80%' color='white' sx={{ m: '1em 0 1em 0'}}/>
            <Grid item xs={12} sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                color: 'white',
                padding: { xs: "0 0 0 0", sm: "0 0 0 0", md: "0 8em 0 8em", lg: "0 16em 0 16em" },
                mb: '0.5em'
                }}>
                <Typography variant="text" >
                    Copyright 2021 Party Roamer
                </Typography>
                <NavLink to='#'>
                    <Typography variant="text" sx={{color: '#7070e3'}}>
                        Privacy & Confidentiality Policy
                    </Typography>
                </NavLink>
            </Grid>
        </Grid>     
    )
}

export default Footer