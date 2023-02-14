import { Link } from "react-router-dom";
import picture from "../../assets/photos/6.jpeg"
import "./Home.scss"

function Home(){
    
    return (
      <>
       <main className="bio">
        <section className="bio__picture-section">
          <img className="bio__picture" src={picture} alt="ubermensch"></img>
          <div className="bio__links">
            <a href="https://www.linkedin.com/in/dylan-larocque-/">Link</a>
            <a href="https://github.com/larocquedylan">Git</a>
            <a href="https://www.twitch.tv/dylphur">twitch</a>
          </div>
          
        </section>
        <section className="bio__details-section">
          <p> 
            Welcome to <span className="orange">Beats for Bits</span>, an experiment in tinkering with Bitcoin and the Lightning Network. This website is where you can buy my music using satoshis - tiny units of Bitcoin. 
          </p>
          <p>
            During the intial COVID-19 lockdowns, I started making noises with my computer. People and the culture were sick. A lot of my music from the time reflects this and is very personal and not something I had been interested in marketing until now.
          </p>
          <p> 
            This project is my capstone for the BrainStation Software Engineering Bootcamp, built using React/JS for the frontend and an Express/Node.JS server as the backend. The basic idea is to sell my beats for incredibly small amounts of bitcoin. Why Bitcoin, you ask? Well, it's a fascinating and clever engineering solution to very real issues.
          </p>
          <p> 
            If you haven't taken a closer look at it, a good place to start is checking out Alex Gladstein's book <a className="yt-link" href="https://www.amazon.com/Check-Your-Financial-Privilege-Gladstein/dp/B09V2NM9VJ#:~:text=Alex%20Gladstein%20has%20written%20an,has%20brought%20to%20many%20people." target="__blank">Check Your Financial Privilege</a>. I hope if this is your first time interacting with Bitcoin, that a spark of curisoity is born.
          </p>
          <p> 
            To purchase my music, you'll need some Bitcoin. Don't worry, you don't need to buy a whole bitcoin - it's decomposable into 100,000,000 units called satoshis. Most of my songs cost just 100 satoshis.  You can buy bitcoin from all sorts of places, it is worth taking a closer look. If you are in Canada, I recommend <a className="yt-link" target="__blank" href="https://shakepay.com/">ShakePay </a> or <a className="yt-link" target="__blank" href="https://www.newton.co/">Newton </a> as they don't have fees and have ways to earn free satoshis. 
          </p>
          <p> 
            From here, you will need to download a lightning wallet. Checkout <a className="yt-link" target="__blank" href="https://www.youtube.com/c/BTCSessions?app=desktop">BTCSessions </a> on Youtube, he has tons of detailed and simple tutorials. I recomend a <a className="yt-link" href="https://muun.com/" target="__blank">Muun </a> wallet from my personal use. This is a very simple step but incredibly important, <span className="red"> write down your passphrase on some paper cos if you forget this, you lose access to your funds</span>. 
          </p>
          <p className="indent">  
              Sidenote: this is perhaps the most exciting and simualtaneously scariest part of bitcoin - there is no counterparty risk - no one can access your value. Not even if all the governments colluded to create a super computer in order hack the network! This is why Proof of Work is the key. So, ya, don't lose that info.
          </p>
          <p> 
            Sending a transaction with your Lightning wallet is easy and free. Just press send, scan the QR code for the song you want to buy, and you're done. Each one of the song cards a download here link. Click it, scan it, send it, and bang! You get a beat for your bits. 
          </p>
        </section>

        </main>

       
      </>
    )
  };
  
  export default Home;