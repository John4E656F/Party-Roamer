import React, { Fragment, FC } from 'react'
import { useSelector } from 'react-redux'

//Import Component
import Hero from '../components/Home/Hero'

const Home = () => {

    return(
        <Fragment>
            <Hero />
        </Fragment>
    )
}

export default Home;