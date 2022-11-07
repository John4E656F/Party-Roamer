import React from 'react';

import {
    Grid,
    Typography,
} from '@mui/material'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CelebrationIcon from '@mui/icons-material/Celebration';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { useTranslation } from 'react-i18next'


const EventDetails = () => {
    const { t } = useTranslation()

    return (
            <Grid container sx={{ gap: { xs: 2, sm: 0 }}}>
                <Grid item sm={4}>
                    <BusinessCenterIcon fontSize='large'/>
                    <Typography variant='h3' sx={{ fontSize: { xs: '16px', sm: '20px', md: '26px' }, p: '5% 0 4% 0'}}>
                    {t('home.event.corporate.title')}
                    </Typography>
                    <Typography variant='p' sx={{ fontSize: { xs: '16px', sm: '20px', md: '26px' },}}>
                    {t('home.event.corporate.body')}
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <CelebrationIcon fontSize='large'/>
                    <Typography variant='h3' sx={{ fontSize: { xs: '16px', sm: '20px', md: '26px' }, p: '5% 0 4% 0'}}>
                    {t('home.event.private.title')}
                    </Typography>
                    <Typography variant='p' sx={{ fontSize: { xs: '16px', sm: '20px', md: '26px' },}}>
                    {t('home.event.private.body')}
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <BeachAccessIcon fontSize='large'/>
                    <Typography variant='h3' sx={{ fontSize: { xs: '16px', sm: '20px', md: '26px' }, p: '5% 0 4% 0'}}>
                    {t('home.event.holiday.title')}
                    </Typography>
                    <Typography variant='p' sx={{ fontSize: { xs: '16px', sm: '20px', md: '26px' },}}>
                    {t('home.event.holiday.body')}
                    </Typography>
                </Grid>
            </Grid>
    )
}

export default EventDetails