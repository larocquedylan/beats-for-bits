// import { useState } from "react";
// import SongModal from "../SongModal/SongModal";

// function SongCard({song, closeModal}){
//     const [ openModal, setOpenModal] = useState(false);

//     return (
//         <div className="song"> 
//         <button 
//             className="song__link" 
//             onClick={() => {
//                 setOpenModal(true);
//             }}
//         >
//             <img className="song__img" src={song.image} alt={song.alt}></img>
//             <h4 className="song__title"> {song.title}</h4>
//         </button>
//         {openModal && <SongModal closeModal={setOpenModal} /> }
//     </div>
//     );
// };

// export default SongCard;


import { useState } from "react";
import { Link } from "react-router-dom";
import SongPage from "../../pages/SongPage/SongPage";
import SongModal from "../SongModal/SongModal";

function SongCard({song, closeModal}){
    const [ openModal, setOpenModal] = useState(false);

    
    return (
        <div className="song"> 
        {/* <button 
            className="song__link" 
            onClick={() => {
                setOpenModal(true);
            }}
        > */}
        <Link to={`/songs/${song.id}`} element={<SongPage />} >
            <img className="song__img" src={song.image} alt={song.alt}></img>
            <h4 className="song__title"> {song.title}</h4>
        </Link>
        {/* // {openModal && <SongModal closeModal={setOpenModal} /> } */}

        <a href="http://localhost:8080/songs/1"> Download here....</a>
    </div>
    );
};

export default SongCard;