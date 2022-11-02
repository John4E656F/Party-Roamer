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
import { useTranslation } from 'react-i18next'

const Hero = () => {
    const { t, i18n } = useTranslation()

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
    width: 50%;
    color: #fff;

    @media (max-width: 600px) {
        margin-top: 5%;
        width: 65%;
    }
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
                    <Grid sx={{ 
                        textAlign: 'center', 
                        padding: '10px 10px 10px 10px', 
                        borderRadius: '5px', 
                        opacity: '70%', 
                        backgroundColor: '#B8B8B8', 
                        width: 'auto',
                    }}>
                        <Typography variant='h1' 
                            sx={{ 
                                fontSize: { xs: '25px', sm: '40px', md: '26px' },
                                fontStyle: 'bold',
                                mb: 2
                            }}>{t('home.hero.text')}</Typography>
                            <Button variant="contained" size='small'>{t('home.hero.button')}</Button>
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
