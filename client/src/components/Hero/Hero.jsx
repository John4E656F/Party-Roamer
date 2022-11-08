import React from 'react';

//Import Assets
import HeroVideo from './HeroVideo'
import {
    Grid,
    Typography,
    Button,
    ButtonGroup,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

const Hero = () => {
    const { t } = useTranslation()

    return(
        <Grid container sx={{m: "3% 0 3% 0"}}>
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
                <ButtonGroup sx={{ m: "1% 0 1% 0"}}>
                    <Button variant="contained">
                        Learn More
                    </Button>
                    <Button variant="outlined" color='cta'>
                        Book Now
                    </Button>
                </ButtonGroup>
            </Grid>
            <Grid item xs={12} md={12} sx={{ justifyContent: "center", mt: "2%" }}>
                <HeroVideo />
            </Grid>
        </Grid>
    )
}

export default Hero;
