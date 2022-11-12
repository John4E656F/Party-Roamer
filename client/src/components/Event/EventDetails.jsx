import React from 'react';

import {
    Card,
    Grid,
    Typography,
    Divider,
} from '@mui/material'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CelebrationIcon from '@mui/icons-material/Celebration';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { useTranslation } from 'react-i18next'


const EventDetails = () => {
    const { t } = useTranslation()

    return (
        <Card sx={{  p: {xs: '5% 2% 5% 2%', md:'5% 0% 5% 0%'}, mb: '5%', backgroundColor: '#373739', color: 'white' }} >
            <Grid container sx={{ gap: { xs: 2, md: 2 ,ld: 0}, justifyContent: 'center'}}>
                <Grid item md={3} sx={{ m: {md: '0 2% 0 2%', lg: '0 1% 0 1%'}}}>
                    <BusinessCenterIcon fontSize='large'/>
                    <Typography variant='h3' sx={{ fontWeight: 'bold', fontSize: { xs: '20px', sm: 'calc(20px + 0.390625vw)', md: 'calc(20px + 0.390625vw)' }, p: '5% 0 5% 0'}}>
                    {t('home.event.corporate.title')}
                    </Typography>
                    <Typography variant='p' sx={{ fontSize: { xs: '16px', sm: 'calc(15px + 0.390625vw)', md: 'calc(15px + 0.390625vw)' },}}>
                    {t('home.event.corporate.body')}
                    </Typography>
                </Grid>
                <Divider flexItem color='white' variant='middle' orientation='vertical' />
                <Grid item md={3} sx={{ m: {md: '0 2% 0 2%', lg: '0 1% 0 1%'}}}>
                    <CelebrationIcon fontSize='large'/>
                    <Typography variant='h3' sx={{ fontWeight: 'bold', fontSize: {  xs: '20px', sm: 'calc(20px + 0.390625vw)', md: 'calc(20px + 0.390625vw)' }, p: '5% 0 5% 0'}}>
                    {t('home.event.private.title')}
                    </Typography>
                    <Typography variant='p' sx={{ fontSize: { xs: '16px', sm: 'calc(15px + 0.390625vw)', md: 'calc(15px + 0.390625vw)' },}}>
                    {t('home.event.private.body')}
                    </Typography>
                </Grid>
                <Divider flexItem color='white' variant='middle' orientation='vertical' />
                <Grid item md={3} sx={{ m: {md: '0 2% 0 2%', lg: '0 1% 0 1%'}}}>
                    <BeachAccessIcon fontSize='large'/>
                    <Typography variant='h3' sx={{ fontWeight: 'bold', fontSize: {  xs: '20px', sm: 'calc(20px + 0.390625vw)', md: 'calc(20px + 0.390625vw)' }, p: '5% 0 5% 0'}}>
                    {t('home.event.holiday.title')}
                    </Typography>
                    <Typography variant='p' sx={{ fontSize: { xs: '16px', sm: 'calc(15px + 0.390625vw)', md: 'calc(15px + 0.390625vw)' },}}>
                    {t('home.event.holiday.body')}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    )
}

export default EventDetails