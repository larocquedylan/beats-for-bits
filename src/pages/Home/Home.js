import { Link } from "react-router-dom";
import picture from "../../assets/photos/6.jpeg"
import Resume from "../../components/Resume/Resume";
import visible from "../../assets/icons/Bitcoin-Icons-0.1.7/svg/filled/visible.svg"
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
          <p> I'm a developer. I create offerings and try to bring value to the teams and people around me with strategy and curiosity. </p>
            
            <p>My aim is focussed on securing property rights for Canada'a First Nations peoples through the use of the Bitcoin Protocol. Which I believe to be the most compelling human rights and decolonial tool we have. </p>

          <p> I believe that unless the rules of physics render something impossible, that all problems have a solution and require  the search for good explanations. </p>

          <p> In the past, I have been a UX Designer with BC Public Service, a Marketing Analyst @ OneFeather, as well as a Research Assistant in the Marketing &amp; Behavioural Science Group at Robert H Lee Graduate School. </p>

          {/* <p> I also make noises with my computer and sell them for Bitcoin over the Lightning Network which you can check out <Link to={`/songs`} className="bio__link">Here <img src={visible} alt="arrow tag"></img></Link> */}
          <p> I also make noises with my computer and sell them for Bitcoin over the Lightning Network which you can check out <Link to={`/songs`} className="bio__link">Here</Link>
          </p>
        </section>
        </main>

        <Resume />
       
      </>
    )
  };
  
  export default Home;