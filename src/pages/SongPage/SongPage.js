import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SongPage.scss"
import shuffle from "../../assets/icons/Bitcoin-Icons-0.1.7/svg/filled/mixed.svg"


function SongPage(){
    const [song, setSong] = useState([]);

    const { songId } = useParams();

    const getSong = async () => {
        const url = `http://localhost:8080/songs/${songId}`;

        try {
            const {data} = await axios.get(url);
            setSong(data);
        } catch (error) {
            console.log(error);
        }   
    }

    useEffect(()=> {
        getSong();
    }, [songId]);

    const getNextSongId = () => {
        let randomSongId;
        do {
          randomSongId = Math.floor(Math.random() * 9) + 1;
        } while (randomSongId === parseInt(songId));
        return randomSongId;
      };


    return (
        <>
        <section className="container">
            <section className="img-container">
                <img className="song-img" src={song.image} alt={song.alt}></img>
            </section>
            <section className="details">
                <div className="details__row">
                    <h2 className="details__title"> {song.title}</h2>
                    <h3 className="details__author"> {song.author}</h3> 
                </div>
                <div className="details__row" > 
                    <h4 className="details__vibe"> General vibe? </h4>
                    <h4 className="details__vibe-content"> {song.vibes}</h4>
                </div>

                <div className="details__row">
                    <p className="details__lyrics"> Words?</p>
                    <p className="details__lyrics-content"> {song.lyrics}</p>
                </div>

                <div className="details__row">
                    <p className="details__price"> 100 Satoshi's ~ $0.03CAD </p>
                    <a className="details__download" href={song.download}> Download here....</a>
                </div>
                <div className="details__row">
                    <Link className="next-song__link" to={`/songs/${getNextSongId()}`}>
                        <span>Shuffle</span> 
                        <img className="next-song__icon" src={shuffle} alt="two arrows crossing over eachother mixed"></img>
                    </Link>
                </div>
            </section>
        
        </section>
     
        </>
    );
};

export default SongPage;