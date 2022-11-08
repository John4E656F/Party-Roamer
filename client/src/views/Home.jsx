import React, { Fragment, FC } from 'react'
import { useSelector } from 'react-redux'

//Import Component
import {
    Grid,
} from '@mui/material'
import Hero from '../components/Hero/Hero'
// import RingRoamer from '../components/RingRoamer'
import Intro from '../components/Intro/index'
import Event from '../components/Event/index'
import Footer from '../components/Footer'

const Home = () => {

    return(
        <Fragment>
            <Hero />
            {/* <RingRoamer /> */}
            <Intro />
            <Event />
        </Fragment>
    )
}

export default Home;