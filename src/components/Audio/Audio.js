import React from 'react';
import './Audio.scss';
import AudioPlayer from 'react-h5-audio-player';

const Audio = ({song}) => {
  return (
    <div className=''>
        <h2>Audio</h2>
        <AudioPlayer
          src={song.audio}
          volume={0.5}
          // Try other props!
        />
    </div>
  )
}

export default Audio;