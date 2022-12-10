import React from 'react';
import {
    Grid,
    Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import ProductIntro from './ProductIntro'

const Intro = () => {
    const { t } = useTranslation()

    return (
        <Grid container sx={{ 
            // backgroundColor: 'primary', 
            width: '100%', 
            justifyContent: 'center',
            textAlign: 'center',
        }}>
            <Grid item xs={8} sx={{ height: 'auto', }}>
                <Typography variant='p' sx={{
                fontWeight: 'bold',
                fontSize: {  xs: '20px', sm: 'calc(20px + 0.390625vw)', md: 'calc(20px + 0.390625vw)' },
                }}>
                {t('home.intro')}
                </Typography><br/>
                <Typography variant='p' sx={{
                fontSize: {  xs: '16px', sm: 'calc(16px + 0.390625vw)', md: 'calc(16px + 0.390625vw)' },
                }}>
                {t('home.subIntro')}
                </Typography>
            </Grid>
            <Grid item xs={8} sx={{ mt: '5%'}}>
                <ProductIntro />
            </Grid>
        </Grid>
    )
}

export default Intro;