import "./Header.scss"
import lightning from "../../assets/icons/Bitcoin-Icons-0.1.7/svg/filled/lightning.svg"
import { Link, useLocation } from 'react-router-dom';


function Header(){
    return (
        <>
        <section className="header">
            <div className="header__filler-left"> </div>
            <Link to={'/'} className="header__title-wrapper"> 
                <img src={lightning} className="header__img" alt="lightning"></img>
                <h1 className="header__title"> Beats for Bits</h1>
            </Link>
            <div className="header__filler-middle"> </div>
            <Link to={`/songs`} className="header__songs-link">Music</Link>
            <Link to={`/wallet`} className="header__songs-link">Music</Link>
            <div className="header__filler-right"> </div>
        </section>
        
        </>
    );
};

export default Header;