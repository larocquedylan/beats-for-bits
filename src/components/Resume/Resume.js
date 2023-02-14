import './Resume.scss'
import contact from "../../assets/icons/Bitcoin-Icons-0.1.7/svg/outline/contacts.svg"
import work from "../../assets/icons/Bitcoin-Icons-0.1.7/svg/outline/mining.svg"
import skills from "../../assets/icons/Bitcoin-Icons-0.1.7/svg/outline/edit.svg"

function Resume(){
    return (
        <>
        <section className="resume">
          <article className="resume__tab">
            <img className='resume__icon' src={contact} alt="profile icon"></img>
            <h3 className='resume__title'> Education</h3>
            <h4 className='resume__subtitle'> Brainstation</h4>
            <p></p>
            <h4 className='resume__subtitle'> University of British Columbia</h4>
          </article>
          <article className="resume__tab">
          <img className='resume__icon' src={work} alt="education icon"></img>
            <h3 className='resume__title'> Proof of Work </h3>
            <h4 className='resume__subtitle'> OneFeather</h4>
            <p></p>
            <h4 className='resume__subtitle'> BC Public Server</h4>
            <p>In this role, I was responsible for developing a research plan and business model canvas for a new service line aimed at supporting Vancouver indigenous youth in child care. In BC, indigenous youth make up 10% of the youth population but represent up to 70% of children in child care. </p> 
            <p>This required a strong focus on understanding the project background and goals in order to lead my research methodology. I defined KPI's, formed key partnerships, detailed customer journeys and their pain points as well as gain creators in order to design a solution. From here, I did due diligence around the cost structure and value proposition in order to pitch this to the province. My experience in developing research plans and service models, combined with my understanding of the unique needs and challenges faced by indigenous youth in care, allowed me to successfully deliver a comprehensive and impactful service model. .</p>
          </article>
          <article className="resume__tab">
          <img className='resume__icon' src={skills} alt="skills icon"></img>
            <h3 className='resume__title'> Skills </h3>
            <h4 className='resume__subtitle'> Front End</h4>
            <p></p>
            <h4 className='resume__subtitle'> Back End</h4>
            <p></p>
            <h4 className='resume__subtitle'> Tools</h4>
            <p></p>
          </article>
        </section>
        
        </>
    );
};

export default Resume;