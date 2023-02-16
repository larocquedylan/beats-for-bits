import "./SongsPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import SongCard from "../../components/SongCard/SongCard";

function SongsPage(){
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

    const songCard = songList.map((song) => {
        return <SongCard key={song.id} song={song}/>;
    })

    if (!dataLoaded){
        return <div> is Loading...</div>;
    }
    return (
        <>
        
        <main className="song-gallery">
            <section className="gallery-left"></section>
            <section className="songs">
                
                {songCard}
                
            </section>
            <section className="gallery-right"></section>
        </main>
        
        </>
    );
};

export default SongsPage;