import React from "react";
import {
    Typography,
    Card,
    CardContent,
    CardHeader,
    Divider,
    List,
    ListItem,
    ListItemText
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
const Intro = () => {
    const { t } = useTranslation()

    const includes = [
        "Online Photo Gallery / Microsite : €50",
        "+100 Prints : €60",
        "+1 Hour : €100",
        "+2 Hours : €150",
        "Extra Attendant : €100",
    ]

    return (
            <Card raised="true" sx={{ backgroundColor:'#D0D0D0', p:2, borderRadius:2}}>
                <CardHeader 
                    avatar={<AddCircleOutlineIcon />}
                    title={
                        <Typography variant="h5">
                            Extra
                        </Typography>
                    }
                />
                <CardContent>
                    <Typography variant="p" >
                    Need more than what our package include?
                    </Typography>
                </CardContent>
                <Divider/>
                <CardContent>
                    <List>
                    {includes.map((item, i) => (
                        <ListItem key={i} >
                           <RadioButtonUncheckedIcon />
                            <ListItemText sx={{ ml: {xs: '5%', md: '2%'} }}>{item}</ListItemText>
                        </ListItem>
                    ))}
                    </List>
                </CardContent>
            </Card>
    )
}

export default Intro;