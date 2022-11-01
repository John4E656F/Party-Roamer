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

    return(
        <Grid container justifyContent="center"  sx={{  }}>
            <BgVideo />
            <Grid item lg={4} md={6} sm={6} xs={8}
                sx={{ mt: { xs: 2, sm: 10, md: 15, lg: 20 } }}>
                <Grid sx={{ textAlign: 'center', padding: '10px 10px 10px 10px', borderRadius: '5px', opacity: '70%', backgroundColor: '#B8B8B8', width: 'auto',}}>
                    <Typography variant='h3' 
                        sx={{ 
                            fontSize: { xs: '16px', sm: '20px', md: '26px' },
                            fontStyle: 'bold',
                            mb: 2
                        }}>Take your event to the next level</Typography>
                    <Button variant="contained" >Hello</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Hero;