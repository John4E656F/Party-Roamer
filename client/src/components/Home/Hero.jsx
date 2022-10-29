import React from 'react';

//Import Assets
import BgVideo from './BgVideo'
import {
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
        <>
            <BgVideo />
            <Container sx={{ display: 'flex', justifyContent: 'center', my: 20 }}>
                <Box sx={{ textAlign: 'center', padding: '10px 10px 10px 10px', borderRadius: '5px', opacity: '70%', backgroundColor: '#B8B8B8', width: 'auto'}}>
                    <Typography variant='h3'>Take your event to the next level</Typography>
                    <Button>Hello</Button>
                </Box>
            </Container>
        </>
    )
}

export default Hero;