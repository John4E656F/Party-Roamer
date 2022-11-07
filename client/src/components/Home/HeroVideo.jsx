import React from 'react';

//Import Assets
import Video from '../../assets/heroVideo.mp4'
import {
    Box,
    Grid,
} from '@mui/material'
import { useTheme } from '@mui/material/styles';

const HeroVideo = () => {
    const theme = useTheme();

    return(
        <Grid container sx={{ justifyContent: 'center', overflow: 'hidden', padding: { xs: '0 1.5em 0 1.5em', sm: '0 1.5em 0 1.5em', md: '0 5em 0 5em' }}}>
            <video autoPlay loop muted className="video" style={{ width: "50%"}}>
                <source src={Video} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </Grid>
    )
}

export default HeroVideo;