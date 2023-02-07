import "./Header.scss"
import lightning from "../../assets/icons/Bitcoin-Icons-0.1.7/svg/filled/lightning.svg"

function Header(){
    return (
        <>
        <section className="header">
            <h1> Beats for Bits</h1>
            <img src={lightning}></img>
        </section>
        
        </>
    );
};

export default Header;