import { Link } from "react-router-dom";
import SongPage from "../../pages/SongPage/SongPage";

function SongCard({song}){
    
    return (
        <div className="song"> 
        <Link className="song__link" to={`/songs/${song.id}`} element={<SongPage />} >
            <img className="song__img" src={song.image} alt={song.alt}></img>
            <h4 className="song__title"> {song.title}</h4>
        </Link>

    </div>
    );
};

export default SongCard;