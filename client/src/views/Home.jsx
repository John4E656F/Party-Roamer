import React, { Fragment, FC } from 'react'
import { useSelector } from 'react-redux'

//Import Component
import {
    Grid,
} from '@mui/material'
import Hero from '../components/Home/Hero'
import Intro from '../components/Intro/index'
import Event from '../components/Event/index'
import Footer from '../components/Footer'

const Home = () => {

    return(
        <Fragment>
            <Hero />
            <Intro />
            <Event />
        </Fragment>
    )
}

export default Home;