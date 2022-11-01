import React, { Fragment, FC } from 'react'
import { useSelector } from 'react-redux'

//Import Component
import Hero from '../components/Home/Hero'
import Intro from '../components/Intro/index'
import {
    Grid,
} from '@mui/material'

const Home = () => {

    return(
        <Fragment>
            <Grid container>
                <Grid item xs={12} >
                    <Hero />
                </Grid>
                <Grid item xs={12}>
                    {/* <Intro /> */}
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Home;