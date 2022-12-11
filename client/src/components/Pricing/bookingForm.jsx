import React from 'react';

import {
    Grid,
    Typography,
    Divider,
    FormGroup,
    FormControl,
    TextField,
} from '@mui/material'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CelebrationIcon from '@mui/icons-material/Celebration';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { useTranslation } from 'react-i18next'


const EventDetails = () => {
    const { t } = useTranslation()

    return (
        <Grid container sx={{  p: {xs: '5% 2% 5% 2%', md:'5% 0% 5% 0%'}, mb: '5%', backgroundColor: '#373739', color: 'white' }} >
            <Grid item xs={12}>
                <Typography variant='h5'>
                    Book An Appointment Online!
                </Typography>
                <Typography variant='p'>
                We offer the best photobooth experience in Belgium. Quality, guarantee and professionalism are our slogan!
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <FormControl component="form">
                    <TextField
                        required
                        defaultValue="Fullname"
                        helperText="Please enter your fullname"
                    />
                    <TextField
                        required
                        defaultValue="Email"
                        helperText="Please enter your email"
                    />
                    <TextField
                        required
                        defaultValue="Email"
                    />
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default EventDetails