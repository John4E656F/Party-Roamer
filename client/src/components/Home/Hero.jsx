import React from 'react';

//Import Assets
import HeroVideo from './HeroVideo'
import {
    Grid,
    Box,
    Container,
    Typography,
    Button,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

const Hero = () => {
    const { t, i18n } = useTranslation()

    return(
        <Grid container>
            <Grid item>

            </Grid>
            <Grid item>
                <HeroVideo />
            </Grid>
        </Grid>
    )
}

export default Hero;
