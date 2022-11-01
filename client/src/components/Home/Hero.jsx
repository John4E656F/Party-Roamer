import React from 'react';

//Import Assets
import BgVideo from './BgVideo'
import {
    Grid,
    Box,
    Container,
    Typography,
    styled,
    Button,
} from '@mui/material'

const Hero = () => {
    const HeroTextContainer = styled('div')(({theme}) => ({

    }))
    return(
        <Grid container justifyContent="center"  sx={{  }}>
            <BgVideo />
            <Grid item lg={4} md={6} bg={6} sm={6} xs={8}
                sx={{ mt: { xs: 5, sm: 5, bg: 15 } }}>
                <Grid sx={{ textAlign: 'center', padding: '10px 10px 10px 10px', borderRadius: '5px', opacity: '70%', backgroundColor: '#B8B8B8', width: 'auto'}}>
                    <Typography variant='h3'>Take your event to the next level</Typography>
                    <Button>Hello</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Hero;