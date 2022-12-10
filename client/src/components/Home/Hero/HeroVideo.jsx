import React from 'react';

//Import Assets
import VideoAsset from '../../../assets/heroVideo.mp4'
import {
    Grid,
} from '@mui/material'
import styled from '@emotion/styled'

const HeroVideo = () => {

    const Video = styled.video`
    width: 50%;
    @media only screen and (max-width: 600px) {
        width: 90%
    };
    `


    return(
        <Grid container sx={{ justifyContent: 'center', overflow: 'hidden',
        }}>
            <Video autoPlay loop muted >
                <source src={VideoAsset} type='video/mp4' />
                Your browser does not support the video tag.
            </Video>
        </Grid>
    )
}

export default HeroVideo;