import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
const Video = (props) => (
    <div className='player-wrapper'>
        <ReactPlayer url={props.video} playing={false} controls={true}
          className='react-player'
          width='100%'
          
        />
      </div>
);

export default Video;