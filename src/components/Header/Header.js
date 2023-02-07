import "./Header.scss"
import lightning from "../../assets/icons/Bitcoin-Icons-0.1.7/svg/filled/lightning.svg"
import { Link, useLocation } from 'react-router-dom';


function Header(){
    return (
        <>
        <section className="header">
            <Link to={'/songs'} className="header__title-wrapper"> 
                <img src={lightning} className="header__img"></img>
                <h1 className="header__title"> Beats for Bits</h1>
                
            </Link>
            <Link to={`/songs`} className="header__songs-link">Songs</Link>
        </section>
        
        </>
    );
};

export default Header;