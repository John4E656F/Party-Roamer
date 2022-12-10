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
        "Print Station",
        "100 prints (200 photo strips)"
    ]
    const generate = (element) => {
        return includes.map((value) => cloneElement(element, {key: value, primary: value}),
        )
    }
    return (
            <Card raised="true" sx={{ backgroundColor:'blue', p:2, borderRadius:2}}>
                <CardHeader 
                    avatar={<CameraRollIcon />}
                    title={
                        <Typography variant="h5">
                            Basic Package
                        </Typography>
                    }
                    subheader={
                        <Typography variant="h4">
                        €250
                        </Typography>
                    }
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom='true'>
                        2 hours
                    </Typography>
                    <Typography variant="p" >
                    The print package includes 100 prints (200 photo strips), which is typically more than enough for a 2 hours event. Additional prints are available for €60per 100.
                    </Typography>
                </CardContent>
                <Divider/>
                <CardContent>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Text only
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