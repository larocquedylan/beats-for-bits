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
          <p> I am Dylan LaRocque. My aim is focussed on securing property rights for Canada'a First Nations peoples through the use of the Bitcoin Protocol. Which I believe ot be the most interesting human rights tool we have. </p>
          <p> I believe that unless the rules of physics render something impossible, that all problems have a solution and require  the search for good explanations. </p>
          <p> </p>
        </section>
       </main>
      </>
    )
  };
  
  export default Home;