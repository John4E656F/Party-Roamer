import React from 'react';

//Import Assets
import './BgVideo.css'
import BG from '../../assets/bgVideo.mp4'
import {
    Box,
} from '@mui/material'

const BgVideo = () => {
    return(
        <>
            <video autoPlay loop muted className="video">
                <source src={BG} type='video/mp4' />
            </video>
        </>
    )
}

export default BgVideo;