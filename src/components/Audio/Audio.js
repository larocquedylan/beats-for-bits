import React, { useEffect } from 'react';
import './Audio.scss';
import AudioPlayer from 'react-h5-audio-player';

const Audio = ({ song, songId }) => {
  useEffect(() => {
    console.log('song', song);
  }, [song]);

  // Set the source to the streaming endpoint
  const streamUrl = `http://localhost:8080/songs/stream/${songId}`;

  return (
    <div className=''>
      <h2>Audio</h2>
      <AudioPlayer
        src={streamUrl}
        volume={0.5}
        // Try other props!
      />
    </div>
  );
};

export default Audio;
