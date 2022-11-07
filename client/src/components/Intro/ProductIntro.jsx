import React from 'react';
import {
    Grid,
    Typography,
    Button,
    Card,
    CardActions,
    CardActionArea,
    CardContent,
    CardMedia,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import RrImage from '../../assets/images/rrExample.jpg'

const ProductIntro = () => {
    const { t, i18n } = useTranslation()

    return(
        <Card sx={{ background: 'transparent', color: 'white', p: '5% 2% 5% 2%', mb: '5%'}}>
            <Grid container>
            <Grid item xs={12} md={6}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
                    <Typography variant="h3">
                        {t('home.product.title')}
                    </Typography>
                    <Typography variant="body2">
                        {t('home.product.body')}
                    </Typography>
                    <CardActions sx={{ justifyContent: 'center'}}>
                        <Button variant="contained">
                            {t('home.buttons.book')}
                        </Button>
                    </CardActions>
                </CardContent>
            </Grid>
            <Grid item xs={12} md={6}>
                <CardMedia
                    component='img'
                    height='400px'
                    image={RrImage}
                    alt='Ring Roamer, Roaming Photobooth'
                    sx={{ objectFit: 'contain', }}
                />
            </Grid>
            </Grid>
        </Card>
    )
}

export default ProductIntro