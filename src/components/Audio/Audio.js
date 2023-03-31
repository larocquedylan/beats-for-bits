import React, { useEffect, useState } from 'react';
import './Audio.scss';
import AudioPlayer from 'react-h5-audio-player';

const Audio = ({ song, songId }) => {
  const [streamUrl, setStreamUrl] = useState(null);

  useEffect(() => {
    // console.log('song', song);
    setStreamUrl(`http://localhost:8080/songs/stream/${songId}`);
  }, [songId]);

  // Set the source to the streaming endpoint
  // const streamUrl = `http://localhost:8080/songs/stream/${songId}`;

  return (
    <div className=''>
      <h2>Audio</h2>
      <AudioPlayer src={streamUrl} volume={0.5} />
    </div>
  );
};

export default Audio;
