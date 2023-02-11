import { useState } from "react";
import SongModal from "../SongModal/SongModal";

function SongCard({song, closeModal}){
    const [ openModal, setOpenModal] = useState(false);

    return (
        <div className="song"> 
        <button 
            className="song__link" 
            onClick={() => {
                setOpenModal(true);
            }}
        >
            <img className="song__img" src={song.image} alt={song.alt}></img>
            <h4 className="song__title"> {song.title}</h4>
        </button>
        {openModal && <SongModal closeModal={setOpenModal} /> }
    </div>
    );
};

export default SongCard;