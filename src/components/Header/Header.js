import "./Header.scss"
import lightning from "../../assets/icons/Bitcoin-Icons-0.1.7/svg/filled/lightning.svg"
import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";


function Header(){
    // const [translate, setTranslate] = useState("20%");
    // const [count, setCount ] = useState(1);

    const [isOpen, setOpen] = useState(false);

    const toggleOpen = () => {
    setOpen(!isOpen);
    };  

    // const toggleMobileNav = () => {
    //     setCount(count + 1);
    //     console.log(count);

    // }

    // const translateNav = {
    //     transform: `translateX(`{mobileNav}`)`
    //   };

    //   const styles = {{transform: isMobileNav ? 'translateX(100%)' : 'translate(50%)' }};

    // const backgroundValue = isOpen ? '../../assets/icons/Bitcoin-Icons-0.1.7/svg/filled/menu.svg' : '../../assets/icons/Bitcoin-Icons-0.1.7/svg/filled/cross.svg';

    // const toggleBtnStyles = {
    //   'background-image': `url(${backgroundValue})`
    // };

    return (
        <>
        <section className="header">
            <div className="header__left-fill"> </div>
            <div className="header__nav"> 
                <Link to={'/'} className="header__title-wrapper"> 
                    <img src={lightning} className="header__img" alt="lightning"></img>
                    <h1 className="header__title"> Dylan LaRocque</h1>
                </Link>
                <div className="header__nav-fill" > </div>
                {/* <button className="mobile-nav-toggle display" onClick={toggleOpen} style={toggleBtnStyles}> </button> */}
                <button className="mobile-nav-toggle display" onClick={toggleOpen} > </button>
                {/* <nav className="header__nav-links" style={translateNav}>  */}
                <nav className="header__nav-links"> 
                    <ul className="nav-bar" style={{ transform: isOpen ? 'translateX(0%)' : 'translate(-100%)' }}> 
                        <Link to={`/songs`} className="header__link">Music</Link>
                        <Link to={`/wallet`} className="header__link">Wallet</Link>
                        <Link to={`/project`} className="header__link">Projects</Link>
                    </ul>
                </nav>
            </div>
            <div className="header__right-fill"> </div>
        </section>
        </>
    );
};

export default Header;