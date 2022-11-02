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
            position: 'relative', 
            top: { xs: '165px', sm: '330px', md: '500px', lg: '670px', xl: '860px' }, 
            backgroundColor: 'blue', 
            width: '100%', 
            height: '1000px', 
            justifyContent: 'center',
            textAlign: 'center',
        }}>
            <Grid item xs={8} sx={{ mt: '5%', height: 'auto', backgroundColor: 'red'}}>
                <Typography variant='p' sx={{  color: 'white', fontSize: { xs: '16px', sm: '20px', md: '26px' },}}>
                {t('home.intro')}
                </Typography>
            </Grid>
            <Grid item xs={8} sx={{}}>
                <ProductIntro />
            </Grid>
        </Grid>
    )
}

export default Intro;