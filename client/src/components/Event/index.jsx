import React from 'react';

import {
    Grid,
    Typography,
    Divider,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import EventDetails from './EventDetails'

const Event = () => {
    const { t } = useTranslation()

    return (
        <Grid container sx={{ 
            width: '100%', 
            justifyContent: 'center',
            textAlign: 'center',
        }}>
            <Grid item xs={8} sx={{ mt: '2%', height: 'auto', }}>
                <Typography variant='h3' sx={{  fontSize: {  xs: '20px', sm: 'calc(20px + 0.390625vw)', md: 'calc(20px + 0.390625vw)' },}}>
                {t('home.event.title')}
                </Typography>
                <Divider variant= "middle" sx={{ m: '2% 0 2% 0' }}/>
                <Typography variant='p' sx={{ fontSize: {  xs: '16px', sm: 'calc(16px + 0.390625vw)', md: 'calc(16px + 0.390625vw)' },}}>
                {t('home.event.body')}
                </Typography>
            </Grid>
            <Grid item xs={8} sx={{ mt: '5%'}}>
                <EventDetails />
            </Grid>

        </Grid>
    )
}

export default Event