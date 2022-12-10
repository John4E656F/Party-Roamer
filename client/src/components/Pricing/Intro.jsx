import React from "react";
import {
    Grid,
    Box,
    Container,
    Typography,
    styled,
    Button,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import Digital from './digital'
import Basic from './basic'
import Extra from './extra'
const Intro = () => {
    const { t } = useTranslation()
    return (
        <Grid container sx={{m: "5% 0 3% 0"}}>
            <Grid item xs={12} md={12} sx={{ textAlign: "center", alignContent: "center",  }}>
                <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 'bold'}}>
                {t('home.hero.title')}
                </Typography>
                <Typography variant="h4" component="h4" gutterBottom>
                {t('home.hero.subTitle')}
                </Typography>
                <Typography component="p" gutterBottom>
                {t('home.hero.text')}
                </Typography>
            </Grid>
            <Grid container sx={{ justifyContent: "center", alignContent: "center", mt: "2%", gap: 8, backgroundColor: 'red' }}>
                <Grid item xs={2}>
                    <Digital/>
                </Grid>
                <Grid item xs={2}>
                    <Basic/>
                </Grid>
                <Grid item xs={2}>
                    <Extra/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Intro;