import "./BtcResources.scss";
import venice from "../../assets/photos/btcisvenice.webp";
import clarity from "../../assets/photos/bitcoin-clarity-book.png";
import grid from "../../assets/photos/thegrid.jpeg"
import standard from "../../assets/photos/btcstandard.png"
import ethics from "../../assets/photos/ethics.jpeg"
import Video from "../../components/Video/Video";

function BtcResources() {

  return (
    <section className="resources"> 
      <h2 className="resources__title"> Bitcoin Resources</h2>
      <p> Here are some good places to start - I won't add too much so as to not overwhelm yourself. But, these are very good places to start. Bitcoin is a massive idea that spans several different fields of study and requires some time to marinate. Make it a simple goal for yourself, spend 10 minutes a day learning something about this idea. Give it time, you might be glad? And if not, what is 10 minutes?</p>
      <section className="resources__video-container">
        <Video videoId="xLYYh4aPXAM" />
        <Video videoId="4rvTppy1qLI" />
        <Video videoId="ikPnr23h7qg" />
      </section>
      <section className="resources__books">
        <h2> Books </h2>
        <div className="resources__book-gallery">
          <a className="resources__book" href="https://www.amazon.ca/Bitcoin-Standard-Decentralized-Alternative-Central/dp/1119473861/ref=sr_1_1?crid=326DLNL23YS1B&amp;keywords=the+bitcoin+standard&amp;qid=1676439865&amp;s=books&amp;sprefix=the+bitcoin+standar%2Cstripbooks%2C121&amp;sr=1-1" target="_blank" rel="noreferrer"> <img className="resources__img" src={standard} alt="bitcoin standard book cover"/></a>

          <a className="resources__book" href="https://www.amazon.ca/Bitcoin-Venice-Essays-Future-Capitalism/dp/B09TTTGT11/ref=sr_1_1?crid=37CSQOX22FCR&amp;keywords=bitcoin+is+venice&qid=1676439976&amp;s=books&amp;sprefix=bitcoin+is+venice%2Cstripbooks%2C151&amp;sr=1-1" target="_blank" rel="noreferrer"> <img className="resources__img" src={venice} alt="bitcoin is venice book cover"/></a>

          <a className="resources__book" href="https://mises.org/library/ethics-money-production" target="_blank" rel="noreferrer"> <img className="resources__img" src={ethics} alt="ethics of money productionbook cover"/></a>

          <a className="resources__book" href="https://bakkeconsolidated.org/books.php" target="_blank" rel="noreferrer"> <img className="resources__img" src={grid} alt="the grid book cover"/></a>

          <a className="resources__book" href="https://getbitcoinclarity.com/" target="_blank" rel="noreferrer"><img className="resources__img" src={clarity} alt="bitcoin clarity book cover"/></a>
        </div>
      </section>
    </section>
  );
};

export default BtcResources;