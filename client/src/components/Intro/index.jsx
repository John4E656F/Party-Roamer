import React from 'react';

import {
    Grid,
    Box,
    Container,
    Typography,
    styled,
    Button,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import ProductIntro from './ProductIntro'

const Intro = () => {
    const { t, i18n } = useTranslation()

    return (
        <Grid container sx={{ 
            backgroundColor: 'blue', 
            width: '100%', 
            justifyContent: 'center',
            textAlign: 'center',
        }}>
            <Grid item xs={8} sx={{ mt: '5%', height: 'auto', }}>
                <Typography variant='p' sx={{  color: 'white', 
                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                }}>
                {t('home.intro')}
                </Typography>
            </Grid>
            <Grid item xs={8} sx={{ mt: '5%'}}>
                <ProductIntro />
            </Grid>
        </Grid>
    )
}

export default Intro;