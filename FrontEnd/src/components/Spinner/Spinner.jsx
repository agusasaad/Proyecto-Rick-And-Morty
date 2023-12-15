import React from 'react'
import video from '../../../public/img/video.mp4'

const Spinner = () => {
    return (
        <video autoplay="true" muted="true" loop="true" src={video} poster={video} style={{width: '100%'}}></video>

    )
}

export default Spinner