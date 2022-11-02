import React from 'react';

//Import Assets
import BgVideo from './BgVideo'
import {
    Grid,
    Box,
    Container,
    Typography,
    Button,
} from '@mui/material'
import styled from '@emotion/styled'
import BG from '../../assets/bgVideo.mp4'

const Hero = () => {

    const HeroWrapper = styled.div`
        border-right: none;
        border-left: none;
        position: relative;
    `
    const VideoContainer = styled.div`
        position: relative;
    `

    const TitleContainer = styled.div`
    z-index: 100;
    position: absolute;
    margin-top: 10%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 40%;
    color: #fff;
    `

    const Video = styled.video`
    position: absolute;
    z-index: 0;
    bttom: 0;
    width: 100%;
    `

    return(
        <>
            <HeroWrapper>
                <VideoContainer>
                    <TitleContainer>
                    <Grid sx={{ textAlign: 'center', padding: '10px 10px 10px 10px', borderRadius: '5px', opacity: '70%', backgroundColor: '#B8B8B8', width: 'auto',}}>
                        <Typography variant='h3' 
                            sx={{ 
                                fontSize: { xs: '16px', sm: '20px', md: '26px' },
                                fontStyle: 'bold',
                                mb: 2
                            }}>Take your event to the next level</Typography>
                            <Button variant="contained" >Hello</Button>
                    </Grid>
                    </TitleContainer>
                    <Video autoPlay loop muted className="video" style={{ position: 'absolute'}}>
                        <source src={BG} type='video/mp4' />
                        Your browser does not support the video tag.
                    </Video>
                </VideoContainer>
            </HeroWrapper>
        </>
    )
}

export default Hero;
