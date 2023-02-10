import "./SongsPage.scss";
import fun from "../../assets/photos/30.jpeg";
import time from "../../assets/photos/27.jpeg";
import flight from "../../assets/photos/13.jpeg";
import palm from "../../assets/photos/15.jpeg"
import blue from "../../assets/photos/18.jpeg";
import red from "../../assets/photos/21.jpeg";
import me from "../../assets/photos/25.jpeg";
import sun from "../../assets/photos/11.jpeg";
import worried from "../../assets/photos/23.jpeg";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import SongModal from '../../components/SongModal/SongModal'
import axios from "axios";
 


function SongsPage(){
    const [ openModal, setOpenModal] = useState(false);
    const [ dataLoaded, setDataLoaded] = useState(false);

    const [songList, setSongList] = useState([]);

    const getSongList = async () => {
        const url = "http://localhost:8080/songs/";

        try {
            const {data} = await axios.get(url);
            setSongList(data);
            setDataLoaded(true);

        } catch (error) {
            console.log(error);
        }   
    }

    useEffect(() => {
        getSongList();
        if (dataLoaded){
            console.log(songList);
        }
    }, [dataLoaded]);


    if (!dataLoaded){
        return <div> is Loading...</div>;
    }
    return (
        <>
        
        <main className="song-gallery">
            <section className="songs">
                <div className="song"> 
                    {/* <a className="song__link" href="https://legend.lnbits.com/paywall/P6AYQ7iGaFE8AgjRkzfekn">
                        <img className="song__img" src={me} alt="run from fear fun from rear"></img>
                        <h4 className="song__title"> 1.22 S1</h4>
                    </a> */}
                    <button 
                        className="song__link" 
                        onClick={() => {
                            setOpenModal(true);
                        }}
                    >
                        {/* <img className="song__img" src={'http://localhost:8080/images/2.jpeg'} alt="run from fear fun from rear"></img> */}
                        <img className="song__img" src={songList[0].image} alt="the blues"></img>
                        <h4 className="song__title"> {songList[0].title}</h4>
                    </button>
                    {openModal && <SongModal closeModal={setOpenModal} /> }
                </div>
                <div className="song"> 
                    <a className="song__link" href="http://localhost:8080/songs/1121U1.wav">
                        <img className="song__img" src={palm} alt="run from fear fun from rear"></img>
                        <h4 className="song__title"> 11.21 U'1</h4>
                    </a>
                </div>
                <div className="song"> 
                    <a className="song__link" href="http://localhost:8080/songs/1221E.wav">
                        <img className="song__img" src={blue} alt="how long is now?"></img>
                        <h4 className="song__title"> 12.21 E1 </h4>
                    </a>
                </div>
                <div className="song"> 
                    <a className="song__link" href="http://localhost:8080/songs/2623.wav">
                        <img className="song__img" src={sun} alt="how long is now?"></img>
                        <h4 className="song__title"> 2.6.23</h4>
                    </a>
                </div>
                <div className="song"> 
                    <a className="song__link" href="http://localhost:8080/songs/May25.wav">
                        <img className="song__img" src={flight} alt="Man floating in space"></img>
                        <h4 className="song__title"> May 25</h4>
                    </a>
                </div>
                <div className="song"> 
                    <a className="song__link" href="http://localhost:8080/songs/322H1.wav">
                        <img className="song__img" src={red} alt="Man floating in space"></img>
                        <h4 className="song__title"> 3.22 H1</h4>
                    </a>
                </div>
                <div className="song"> 
                    <a className="song__link" href="http://localhost:8080/songs/322J1.wav">
                        <img className="song__img" src={time} alt="Man floating in space"></img>
                        <h4 className="song__title"> 3.22 J1</h4>
                    </a>
                </div>
                <div className="song"> 
                    <a className="song__link" href="http://localhost:8080/songs/12203.wav">
                        <img className="song__img" src={fun} alt="Man floating in space"></img>
                        <h4 className="song__title"> 12.23</h4>
                    </a>
                </div>
                <div className="song"> 
                    <a className="song__link" href="http://localhost:8080/songs/122G2.wav">
                        <img className="song__img" src={worried} alt="Man floating in space"></img>
                        <h4 className="song__title"> 1.23 G2</h4>
                    </a>
                </div>
            </section>
        </main>
        
        </>
    );
};

export default SongsPage;