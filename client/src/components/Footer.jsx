import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

import {
  Typography,
  Grid,
  Avatar,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import Logo from '../assets/images/PartyRoamerLogo.svg'

const Footer = (props) => {
  const { t } = useTranslation()

    return(
        <Grid container sx={{ position: 'relative'}}>
            <Grid item>
                <Typography variant="text">
                    Copyright 2021 Party Roamer
                </Typography>
            </Grid>
            <Grid item>
                <Avatar src={Logo} sx={{ width: 60, height: 60, }} />
            </Grid>
            <Grid item>

            </Grid>
        </Grid>
    )
}

export default Footer