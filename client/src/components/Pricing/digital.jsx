import React, {cloneElement} from "react";
import {
    Grid,
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    CardHeader,
    Button,
    Divider,
    List,
    ListItem,
    ListItemText
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import CheckIcon from '@mui/icons-material/Check';

const Intro = () => {
    const { t } = useTranslation()

    const includes = [
        "Roaming Photobooth Attendant",
        "Unlimited Digital Prints",
        "Stills, GIFs & Boomerangs",
        "Event Name/Logo Overlay",
        "Custom Design",
        "Email/SMS Sharing",
    ]

  
    return (
            <Card raised="true" sx={{ p:2, borderRadius:2}}>
                <CardHeader 
                    avatar={<PhotoCameraBackIcon />}
                    title={
                        <Typography variant="h5">
                            Digital Package
                        </Typography>
                    }
                    subheader={
                        <Typography variant="h4">
                        €150
                        </Typography>
                    }
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom='true'>
                        2 hours
                    </Typography>
                    <Typography variant="p" >
                    The digital photo booth option allows guests to receive their photos immediately via text or email and perfect for social media sharing!
                    </Typography>
                </CardContent>
                <Divider/>
                <CardContent>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Digital Package Includes:
                    </Typography>
                    <List>
                    {includes.map((item, i) => (
                        <ListItem key={i} >
                           <CheckIcon />
                            <ListItemText sx={{ ml: {xs: '5%', md: '2%'} }}>{item}</ListItemText>
                        </ListItem>
                    ))}
                    </List>
                </CardContent>
            </Card>
    )
}

export default Intro;