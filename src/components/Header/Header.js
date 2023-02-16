import "./Header.scss"
import lightning from "../../assets/icons/Bitcoin-Icons-0.1.7/svg/filled/lightning.svg"
import { Link } from 'react-router-dom';
import { useState } from "react";


function Header(){
    const [isOpen, setOpen] = useState(false);

    const toggleOpen = () => {
    setOpen(!isOpen);
    };  


    return (
        <>
        <section className="header">

            <div className="header__nav"> 
                <Link to={'/'} className="header__title-wrapper"> 
                    <img src={lightning} className="header__img" alt="lightning"></img>
                    <h1 className="header__title"> Beats For Bits</h1>
                </Link>

                <button className="mobile-nav-toggle-btn" onClick={toggleOpen} > </button>
  
                <nav className="header__nav-links"> 
                    <ul className="nav-bar" style={{ transform: isOpen ? 'translateX(0%)' : 'translate(-100%)' }}> 
                        <Link to={`/songs`} className="header__link">Music</Link>
                        <Link to={`/wallet`} className="header__link">Wallet</Link>
                        <Link to={`/resources`} className="header__link">Resources</Link>
                    </ul>
                </nav>
            </div>
        </section>
        </>
    );
};

export default Header;