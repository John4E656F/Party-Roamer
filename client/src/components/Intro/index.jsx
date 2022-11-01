import React from 'react';

import {
    Grid,
    Box,
    Container,
    Typography,
    styled,
    Button,
} from '@mui/material'

const Intro = () => {
    return (
        <Grid container sx={{ 
            position: 'relative', 
            top: { xs: '165px', sm: '330px', md: '500px', lg: '670px', xl: '860px' }, 
            backgroundColor: 'blue', 
            width: '100%', 
            height: '1000px', 
            justifyContent: 'center',
        }}>
            <Grid item sx={{ mt: '5%', width: '50%'}}>
            <Typography variant='p' sx={{ textAlign: 'center', color: 'white'}}>
            A photo booth is the perfect, fun addition to any event or party you are planning. 
            Our Roaming Photo Booth will make a lasting impression at any event you are hosting, 
            and will add a personal touch that will impress your guests. 
            Show people the amazing time that can be had in a new, interactive way of photo booth experiences.
            </Typography>
            </Grid>
        </Grid>
    )
}

export default Intro;