import "./SongsPage.scss";
import fun from "../../assets/photos/30.jpeg";
import time from "../../assets/photos/27.jpeg";
import flight from "../../assets/photos/13.jpeg";
import palm from "../../assets/photos/15.jpeg"
import blue from "../../assets/photos/18.jpeg";
import red from "../../assets/photos/21.jpeg";
import me from "../../assets/photos/25.jpeg";
import sun from "../../assets/photos/11.jpeg";



function SongsPage(){
    return (
        <>
        <main className="song-gallery">
            <section className="songs">
                <div className="song"> 
                    <a className="song__link" href="http://localhost:8080/songs/122S1.wav">
                        <img className="song__img" src={me} alt="run from fear fun from rear"></img>
                        <h4 className="song__title"> The Nature of Rain</h4>
                    </a>
                </div>
                <div className="song"> 
                    <a className="song__link" href="http://localhost:8080/songs/1121U1.wav">
                        <img className="song__img" src={palm} alt="run from fear fun from rear"></img>
                        <h4 className="song__title"> Solitude is a gift?</h4>
                    </a>
                </div>
                <div className="song"> 
                    <a className="song__link" href="http://localhost:8080/songs/1221E.wav">
                        <img className="song__img" src={blue} alt="how long is now?"></img>
                        <h4 className="song__title"> t = 0</h4>
                    </a>
                </div>
                <div className="song"> 
                    <a className="song__link" href="http://localhost:8080/songs/2623.wav">
                        <img className="song__img" src={sun} alt="how long is now?"></img>
                        <h4 className="song__title"> Nice</h4>
                    </a>
                </div>
                <div className="song"> 
                    <a className="song__link" href="http://localhost:8080/songs/May25.wav">
                        <img className="song__img" src={flight} alt="Man floating in space"></img>
                        <h4 className="song__title"> Its so fly</h4>
                    </a>
                </div>
                <div className="song"> 
                    <a className="song__link" href="http://localhost:8080/songs/322H1.wav">
                        <img className="song__img" src={red} alt="Man floating in space"></img>
                        <h4 className="song__title"> golly</h4>
                    </a>
                </div>
            </section>
        </main>
        
        </>
    );
};

export default SongsPage;