import ClientFeedBack from "./item/clientFeedBack";
import ReasonsWhy from "./item/reasonsWhy";
import Counter from "./item/counter";
import { Link } from "react-router-dom";
import TeamMember from "./item/teamMember";
import ContactForm from "./item/contactForm";

export default function AboutUs() {

  return(
    <main id="aboutUsPage">
      <header>
        <h1>About us</h1>
      </header>
      <section className="understand">
        <div>
          <p>At Endorfinas Media, we understand that achieving marketing goals can be complex.<br/><br/>
          That’s why we’ve developed a four-phase 9-step roadmap to help all our clients succeed.
          </p>
        </div>
        <div>
          <img src="images/fillerNine.png" alt="" />
        </div>
      </section>
      <Counter/>
      <img className="fillerImageSection" src="../images/fillerTen.png" alt="" />
      <section className="values">
        <h2>Company values </h2>
        <div>
          <ReasonsWhy 
          title={"Transparency"} 
          Icon={"../svg/smilingIcon.svg"} 
          text={"Maintaining open and clear lines of communication with both team members and clients to ensure effective problem-solving at all times."}/>
          <ReasonsWhy 
          title={"Comittment"} 
          Icon={"../svg/happyIcon.svg"} 
          text={"As Peter F. Drucker said, “Unless commitment is made, there are only promises and hopes, but no plans.” That’s why we ensure that we are fully committed to our work by developing structured plans and strategies"}/>
          <ReasonsWhy 
          title={"Comittment"} 
          Icon={"../svg/smirkIcon.svg"} 
          text={"As Peter F. Drucker said, “Unless commitment is made, there are only promises and hopes, but no plans.” That’s why we ensure that we are fully committed to our work by developing structured plans and strategies"}/>
          <ReasonsWhy 
          title={"Self-improvment"} 
          Icon={"../svg/singIcon.svg"} 
          text={"Maintaining open and clear lines of communication with both team members and clients to ensure effective problem-solving at all times."}/>
          <ReasonsWhy 
          title={"Over-deliver"} 
          Icon={"../svg/coolIcon.svg"} 
          text={"Our goal is not just to meet expectations, but to exceed them. We strive to over-deliver and surpass any standard or benchmark in the market."}/>
          <ReasonsWhy 
          title={"Company Motto"} 
          Icon={"../svg/congratulationsIcon.svg"} 
          text={"Our company’s guiding principle is to always strive for greatness, maintain passion in our work, foster a curious mindset, and approach everything with humility. This is encapsulated in our motto: “Be Great, Be Passionate, Be Curious, Be Humble.”"}/>
        </div>
        <Link to="#" className="button">
        Claim your free website audit
        </Link >
      </section>
      <section className="passion">
        <h2>A Team with passion</h2>
        <div>
          <p>Our goal is to help companies with marketing needs worldwide achieve success through effective online traffic and marketing strategies. 
            At Endorfinas Media, we have teamed up with Verizon Media’s top European search partners to deliver high-quality digital marketing solutions.</p>
          <p>Supported by a solid team of professionals with over 15 years of experience in programmatic advertising, search retargeting, 
            PPC, social media profiling, email marketing, copywriting, UX/UI, graphic design and video production.</p>
          <p>When you work with us, one of our senior team members will be assigned to you as a dedicated partner. 
            They will ensure that every step of our 9-step Infinity Growth & Sales Accelerator Blueprint is executed successfully to achieve your business 
            and marketing goals.</p>
          <p>We are dedicated to maintaining transparency and professionalism throughout the entire process, from the beginning to the successful 
            attainment of your goals.</p>
        </div>
      </section>
      <section className="certificates">
        <h2>Data Protection Qualifications & Certificates</h2>
        <p>We prioritize security& protection </p>
        <div>
          <img src="images/certificates.png" alt="certificates" />
        </div>
      </section>
      <section className="videoAboutUs">
        <h2>About us</h2>
        <p>2 min video</p>
        {/* <video src=""></video> */}
        <p>In comming ...</p>
        <p>Marketing  |  InfinityGrowth  |  Sales Accelerator </p>
        <Link to="#" className="button">
        Claim your free website audit
        </Link> 
      </section>
      <section className="services">
        <h2>Services</h2>
        <p>Endorfinas Infinity Growth & Sales Accelerator service! 
        This blueprint is designed to help companies fully unlock their growth potential in a short period of time.</p>
        <p>
        By following a 9-step plan, we will implement a comprehensive process that includes market research, 
        content strategy, copywriting, email marketing, graphic design, video production, tech implementation, media buying, data analytics, 
        and optimization/CRO.With our expert guidance, you can expect to see an increase in sales,
        improved employee satisfaction, and a better overall company environment within 90 days.
        </p>
        <p>
        We’re excited to work with you and take your business to the next level!
        </p>
        <div>
        <ReasonsWhy 
        title={"Phase 1"} 
        Icon={"../svg/targetUserIcon.svg"} 
        text={"We conduct an in-depth market analysis to evaluate your current position and understand your target audience."}/>
        <ReasonsWhy 
        title={"Phase 2"} 
        Icon={"../svg/targetIcon.svg"} 
        text={"We use these insights to create a tailored strategy for your business"}/>
        <ReasonsWhy 
        title={"Phase 3"} 
        Icon={"../svg/planningIcon.svg"} 
        text={"We combine automation with a human touch to generate qualified leads and convert them into paying customers."}/>
        <ReasonsWhy 
        title={"Phase 4"} 
        Icon={"../svg/growthIcon.svg"} 
        text={"We optimize performance through ongoing analysis and adjustments to ensure maximum results.With this comprehensive approach, we can provide a clear and organized path for achieving your sales & marketing goals."}/>
        </div>
      <Link to="#" className="button">
        Claim your free website audit
      </Link>
      </section>
      <section>
        
      </section>
      <section className="team">
        <h2>The team that makes it all happen </h2>
        <div>
          <TeamMember
          image={"../images/employeeOne.png"}
          name={"Marc Campos"}
          job={"Senior Copywriter"}
          quote={"This is a personal quite long quote"}
          />
          <TeamMember
          image={"../images/employeeTwo.png"}
          name={"Nicolas Falvo"}
          job={"Senior Graphic Designer"}
          quote={"This is a personal quite long quote"}
          />
          <TeamMember
          image={"../images/employeeThree.png"}
          name={"Maria Minguez"}
          job={"UX Designer Copywriter"}
          quote={" This is a personal quite long quote"}
          />
          <TeamMember
          image={"../images/employeeFour.png"}
          name={"Oji Pettersson"}
          job={"Senior Technial Consultant"}
          quote={"This is a personal quite long quote"}
          />
          <TeamMember
          image={"../images/employeeOne.png"}
          name={"Nestor Palou"}
          job={"Senior Video Creator"}
          quote={"This is a personal quite long quote"}
          />
          <TeamMember
          image={"../images/employeeTwo.png"}
          name={"Katrina Dargel"}
          job={"Senior UX consultant Business Strategist"}
          quote={"This is a personal quite long quote"}
          />
          <TeamMember
          image={"../images/employeeThree.png"}
          name={"Robert Leon"}
          job={"Founder - Media Strategist Media Buyer"}
          quote={"This is a personal quite long quote"}
          />
          <TeamMember
          image={"../images/employeeFour.png"}
          name={"Cristian Angel"}
          job={"Senior Brand Consultant"}
          quote={"This is a personal quite long quote"}
          />
          <TeamMember
          image={"../images/employeeOne.png"}
          name={"Jordan Kotas"}
          job={"Social Media Manager"}
          quote={"This is a personal quite long quote"}
          />
          <TeamMember
          image={"../images/employeeTwo.png"}
          name={"Kayla Squelch"}
          job={"Senior Media buyer Copywriter"}
          quote={"This is a personal quite long quote"}
          />
          <TeamMember
          image={"../images/employeeThree.png"}
          name={"Miguel Santafe"}
          job={"Senior Producer"}
          quote={"This is a personal quite long quote"}
          />
          <TeamMember
          image={"../images/employeeFour.png"}
          name={"Carlos Clusa"}
          job={"Senior Digital Creator"}
          quote={"This is a personal quite long quote"}
          />
        </div>
      </section>
      <ClientFeedBack/>
      <section className="exploreBlog">
        <h2>Explore our magic blog </h2>
        <div>
          <img src="images/postFiller.png" alt="" />
          <h3>How to Use A/B testing to validate your resutls</h3>
          <p>A/B testing might not be common practice... </p>
          {/*tags*/}  
        </div>
        <Link to="/blog" className="button">Read more blog posts </Link>
      </section>
      <ContactForm/>
    </main>
  )
}