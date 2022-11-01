import React from 'react';

//Import Assets
import './BgVideo.css'
import BG from '../../assets/bgVideo.mp4'
import {
    Box,
    Grid,
} from '@mui/material'
import { useTheme } from '@mui/material/styles';

const BgVideo = () => {
    const theme = useTheme();

    return(
        <Grid container sx={{ position: 'fixed', padding: { xs: '0 1.5em 0 1.5em', sm: '0 1.5em 0 1.5em', md: '0 8.5em 0 8.5em' }}}>
            <video autoPlay loop muted className="video" >
                <source src={BG} type='video/mp4' />
            </video>
        </Grid>
    )
}

export default BgVideo;