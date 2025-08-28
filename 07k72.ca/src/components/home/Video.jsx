import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756383500~exp=1756387100~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=f9077bbf0f4b6e0b01176c6d0606cc6010151a31acbe146a8d930d0ebafe231c&r=dXMtd2VzdDE%3D"></video>
    </div>
  )
}

export default Video