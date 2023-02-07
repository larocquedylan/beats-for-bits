import "./SongsPage.scss";
import fun from "../../assets/photos/30.jpeg";
function SongsPage(){
    return (
        <>
        <main className="song-gallery">
            <section className="">
                <div> 
                    
                    <a href="http://localhost:8080/songs/122G2.wav">
                    <img src={fun}></img>
                    <h4> funfun</h4>
                    </a>
                </div>
            </section>
        </main>
        
        </>
    );
};

export default SongsPage;