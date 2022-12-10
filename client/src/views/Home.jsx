import React, { Fragment, FC } from 'react'
import Hero from '../components/Home/Hero/Hero'
// import RingRoamer from '../components/RingRoamer'
import Intro from '../components/Home/Intro/index'
import Event from '../components/Home/Event/index'
import HomePricing from '../components/Home/HomePricing/HomePricing'

const Home = () => {

    return(
        <Fragment >
            <Hero />
            {/* <RingRoamer /> */}
            <Intro />
            <Event />
            <HomePricing />
        </Fragment>
    )
}

export default Home;