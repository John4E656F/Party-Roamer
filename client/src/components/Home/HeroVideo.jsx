import React from 'react';

//Import Assets
import VideoAsset from '../../assets/heroVideo.mp4'
import {
    Box,
    Grid,
} from '@mui/material'
import styled from '@emotion/styled'
import { css } from '@emotion/react' 

const HeroVideo = () => {

    const Video = styled.video`
    width: 60%;
    @media (max-width: 600px) {
        width: 100%
    };
    @media (max-width: 300px) {
        width: 90%
    };
    `


    return(
        <Grid container sx={{ justifyContent: 'center', overflow: 'hidden',
        // padding: { xs: '0 1.5em 0 1.5em', sm: '0 1.5em 0 1.5em', md: '0 5em 0 5em' }
        }}>
            <Video autoPlay loop muted >
                <source src={VideoAsset} type='video/mp4' />
                Your browser does not support the video tag.
            </Video>
        </Grid>
    )
}

export default HeroVideo;