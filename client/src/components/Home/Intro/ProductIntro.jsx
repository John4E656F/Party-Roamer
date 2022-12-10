import React from 'react';
import {
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
} from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useTranslation } from 'react-i18next'

import rrModes from '../../../assets/images/rrModes.png'

const ProductIntro = () => {
    const { t } = useTranslation()

    const bulletPointText = [t('home.product.twoInOne'), t('home.product.attendant'), t('home.product.modern')]

    return(
        <Card sx={{  p: {xs:'5% 0% 5% 0%', md:'5% 2% 5% 2%'}, backgroundColor: '#373739', color: 'white' }} >
            <Grid container sx={{ alignItems: 'center' }}>
            <Grid item xs={12} md={6} >
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
                    <Typography variant="h3" sx={{
                        fontWeight: 'bold',
                        fontSize: {  xs: '20px', sm: 'calc(20px + 0.390625vw)', md: 'calc(20px + 0.390625vw)' },
                    }}>
                        {t('home.product.title')}
                    </Typography>
                    <List dense sx={{
                        fontSize: { xs: '16px', sm: '18px', md: '20px' },
                    }}>
                    {bulletPointText.map((item) => (
                        <ListItem key={item} >
                           <AdjustIcon />
                            <ListItemText sx={{ ml: {xs: '5%', md: '2%'} }}>{item}</ListItemText>
                        </ListItem>
                    ))}
                    </List>
                    <CardActions sx={{ justifyContent: 'center'}}>
                        <Button variant="contained" color='cta'>
                            {t('home.buttons.book')}
                        </Button>
                    </CardActions>
                </CardContent>
            </Grid>
            <Grid item xs={12} md={6} >
                <CardMedia
                    component='img'
                    height='400px'
                    image={rrModes}
                    alt='Ring Roamer, Roaming Photobooth'
                    sx={{ objectFit: 'contain', }}
                />
            </Grid>
            </Grid>
        </Card>
    )
}

export default ProductIntro