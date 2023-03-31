import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SongPage.scss';
import shuffle from '../../assets/icons/Bitcoin-Icons-0.1.7/svg/filled/mixed.svg';
import Audio from '../../components/Audio/Audio';

function SongPage() {
  const [song, setSong] = useState([]);
  const [lyrics, setLyrics] = useState('');
  const { songId } = useParams();

  // show more
  const [rowHeight, setRowHeight] = useState('8rem');
  const [showMoreText, setShowMoreText] = useState(false);

  const toggleShowMoreText = () => {
    setShowMoreText((prevState) => !prevState);
    setRowHeight((prevState) => !prevState);
  };

  const getSong = async () => {
    const url = `http://localhost:8080/songs/${songId}`;

    try {
      const { data } = await axios.get(url);
      setSong(data);
      setLyrics(data.lyrics);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSong();
  }, [songId]);

  // shuffle
  const getNextSongId = () => {
    let randomSongId;
    do {
      randomSongId = Math.floor(Math.random() * 9) + 1;
    } while (randomSongId === parseInt(songId));
    return randomSongId;
  };

  // audio player

  return (
    <>
      <section className='container'>
        <section className='img-container'>
          <img className='song-img' src={song.image} alt={song.alt}></img>
        </section>
        <section className='details'>
          <div className='details__row'>
            <h2 className='details__title'> {song.title}</h2>
            <h3 className='details__author'> {song.author}</h3>
          </div>
          <div className='details__row'>
            <h4 className='details__vibe'> General vibe? </h4>
            <h4 className='details__vibe-content'> {song.vibes}</h4>
          </div>

          <div
            className='details__row'
            style={{ height: showMoreText ? 'auto' : '8rem' }}
          >
            <p className='details__lyrics'> Words?</p>
            <p
              className='details__lyrics-content'
              style={{
                overflow: showMoreText ? 'visible' : 'hidden',
                height: showMoreText ? 'auto' : '8rem',
              }}
            >
              {' '}
              {showMoreText ? lyrics : lyrics.substring(0, 85)}
              {lyrics.length > 30 ? (
                <button
                  className='details__button'
                  onClick={toggleShowMoreText}
                >
                  {' '}
                  {showMoreText ? 'Show Less' : 'Show More'}
                </button>
              ) : (
                ''
              )}
            </p>
          </div>

          <div className='details__row'>
            <p className='details__price'> 100 Sats ~ $0.03CAD </p>
            <a
              className='details__download'
              href={song.download}
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              Download
            </a>
          </div>
          <div className='details__row'>
            <Link className='next-song__link' to={`/songs/${getNextSongId()}`}>
              <span>Shuffle</span>
              <img
                className='next-song__icon'
                src={shuffle}
                alt='two arrows crossing over eachother mixed'
              ></img>
            </Link>
          </div>
        </section>
        {/* pass song and song id to audio component */}
        <Audio song={song} songId={songId} />
        {/* <Audio song={song} /> */}
      </section>
    </>
  );
}

export default SongPage;
