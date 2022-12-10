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
                    
                </Grid>
            </Grid>
    )
}

export default EventDetails