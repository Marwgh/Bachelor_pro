import { Link } from "react-router-dom";
import CompanyLogos from "./item/companyLogos";
import ReasonsWhy from "./item/reasonsWhy";
import Strategies from "./item/strategies";
import StagesPotential from "./item/stagesPotential";
import StagesWorks from "./item/stagesWokrs";
import Banner from "./item/banner";
import ClientFeedBack from "./item/clientFeedBack";
import Counter from "./item/counter";



export default function Home() {

  return (
    <main id="homePage">
      <header>
        <div>
        <p>Marketing That Works</p>
        <h1>Marketing Roadmap for Generating New Sales.</h1>
        <p>Transform your marketing strategy and skyrocket your sales by implementing our proven 9-Step roadmap. Experience up to 2X increase in just 90 days.</p>
        <div className="buttonHolderHeader">
          <Link className="button" to="/construction">Claim your free website audit</Link>
          <Link className="learnMore" to="/construction">Learn more about out approach </Link>
        </div>
        <div className="reviewHeader">
        <p>★★★★</p>
        <p>4.7 / 5 Review </p>
        </div>
        <div className="paymentHeader">
          <img src="../svg/strip.svg" alt="stripe" />
          <img src="../svg/visa.svg" alt="visa" />
          <img src="../svg/union.svg" alt="union" />
          <img src="../svg/masterCard.svg" alt="masterCard" />
          <img src="../svg/DinersClub.svg" alt="DinersClub" />
          <img src="../svg/appelPay.svg" alt="appelPay" />
          <img src="../svg/googlePay.svg" alt="googlePay" />
        </div>
        <div className="installAppHeader">
          <img src="../svg/appelStore.svg" alt="appelStore" />
          <img src="../svg/googlePlay.svg" alt="googlePlay" />
        </div>
        </div>
      </header>
      <section className="partnered">
        <img src="../svg/endorFinasIcon.svg" alt="endorFinasIcon" />
        <h2>We have partnered with startups, scale-ups, and Fortune 500 companies.</h2>
        <CompanyLogos/>
        <div id="popUpOutPerform">
          <p>Outperform Industry Benchmarks With</p>
          <p>300%</p>
        </div>
      </section>
      <section className="holdingYouBack">
        <h2>What's holding you back from scaling your company? </h2>
        <div>
          <div>
          <ReasonsWhy 
          title={"Few or No Retaining Customers"} 
          Icon={"../svg/worryIcon.svg"} 
          text={"Lack of relevant, engaging content to attract and retain customers"}/>
          <ReasonsWhy 
          title={"Hard to convert Leads to Costumers"} 
          Icon={"../svg/explosionIcon.svg"} 
          text={"Difficulty generating leads and converting them into customers."}/>
          <ReasonsWhy 
          title={"Can't Keep Up With Market Updates"} 
          Icon={"../svg/thinkingIcon.svg"} 
          text={"Struggling to keep up with the constantly evolving digital marketing landscape."}/>
          <ReasonsWhy 
          title={"Hard To Integrate New and old Strategies"} 
          Icon={"../svg/cryIcon.svg"} 
          text={"Inability to integrate digital marketing efforts with traditional marketing strategies."}/>
          <ReasonsWhy 
          title={"Little Online Reputation"} 
          Icon={"../svg/worryIcon.svg"} 
          text={"Difficulty in creating and maintaining a strong online reputation."}/>
          <ReasonsWhy 
          title={"Confused Data Tracking"} 
          Icon={"../svg/sadIcon.svg"} 
          text={"Inability to track and measure the success of digital marketing efforts."}/>
          </div>
        </div>
        <Link to="/construction" className="button">Learn about our approach</Link>
      </section>
      <section className="heavyLifting">
        <div className="img"></div>
        <div>
          <div>
            <h2>Leave the heavy lifting to us.</h2>
            <p>We utilize online marketing strategies to effectively increase sales and solve real-world business challenges.</p>
            <Link className="learnMore" to="/construction"><img src="../svg/endorFinasIcon.svg" alt="endorFinasIcon" /> Learn about our approach</Link>
          </div>
          <div>
            <Strategies
            Icon={"../svg/presentationIcon.svg"} 
            text={"Attain a consistent flow of new customers on demand."}
            />
            <Strategies
            Icon={"../svg/goalIcon.svg"} 
            text={"Effective marketing strategies without feeling overwhelmed and in less time"}
            />
            <Strategies
            Icon={"../svg/deadlineIcon.svg"} 
            text={"Done for you solution “Infinity Growth & Sales Accelerator”."}
            />
            <Strategies
            Icon={"../svg/formIcon.svg"} 
            text={"Stand out in a crowded market."}
            />
            <Strategies
            Icon={"../svg/briefcaseIcon.svg"} 
            text={"Elevate customer satisfaction and loyalty."}
            />
            <Strategies
            Icon={"../svg/linechartIcon.svg"} 
            text={"Outperform industry benchmarks."}
            />
          
          </div>
        </div>
      </section>
      <section className="potential">
        <h2>
        Unlock the Full Potential of Your Business in 4 simple stages
        </h2>
        <div className="stageHolder">
          <StagesPotential
          Image={"../images/fillerThree.png"}
          stage={"Stage 1: Plan "}
          title={"Market Analysis "}
          text={"Our analysis will determine your current market position and provide insight into your target audience"}
          /> 
          <StagesPotential
          Image={"../images/fillerFour.png"}
          stage={"Stage 2: Build  "}
          title={"Strategy development"}
          text={"Based on the insights gained in stage 1 we create a tailored strategy for your business."}
          /> 
          <StagesPotential
          Image={"../images/fillerFive.png"}
          stage={"Stage 3: Launch "}
          title={"Convert leads into buyers"}
          text={"Our approach combines AI automation with a human touch to effectively drive qualified traffic and convert it into paying customers."}
          /> 
        </div>
        <div className="lastStage">
          <img src="../images/fillerSix.png" alt="" />
          <div>
            <p className="stage">Stage 4: Optimisation </p>
            <h3>Optimisation </h3>
            <p className="text">We keep track of and evaluate the effectiveness of the tactics executed in earlier stages. Based on the analysis, necessary changes are made to enhance performance and attain the optimal outcome.</p>
          </div>
          
          <Link to="/construction">Learn more</Link>
          
        </div>
        <Link className="button" to="/construction">Learn about our approach</Link>
      </section>
      
      <img className="fillerImageSection" src="../images/fillerSeven.png" alt="" />
      
      <section className="howWorks"> 
        <div>
          <h2>This is how it all works</h2>
          <h3>“Infinity Growth & Sales Accelerator”  </h3>
          <p>The “IGSA” is a tailor-made 9-step roadmap that helps increase your company's sales by 2X in 90 days, without confusion or disorganised marketing efforts.</p>
        </div>
        <div className="modalWorks" id="friendly">
          <p>User-friendly, and no previous technical knowledge or training required.</p>
        </div>
        <div className="modalWorks" id="establish">
          <p>Establish your business as a thought leader in your industry</p>
          <img src="../svg/endorFinasIcon.svg" alt="endorFinasIcon" />
        </div>
        <div className="modalWorks" id="stage4">
          <p>Stage 4: Optmise </p>
          <img src="../svg/arrowRight.svg" alt="" />
        </div>
        <img  id="arrowRestart" src="../svg/arrowRestart.svg" alt="" />
        <div>
          <StagesWorks 
          title={"Market research "}
          points={[
            "1. Define research objectives and questions",
            "2. Analyze competitors and market opportunities",
            "3. Create buyer personas, empathy maps and surveys..."
          ]}
          stage={"Stage 1: Plan "}
          number={"1"}
          />
          <img className="arrows" id="arrow1" src="../svg/arrowRight.svg" alt="" />
          <StagesWorks 
          title={"Content strategy "}
          points={[
            "1. Set clear content goals and objectives",
            "2. Audit existing content and define the tone of voice",
            "3. Plan content types and distribution channels."
          ]}
          stage={"Stage 1: Plan"}
          number={"2"}
          />
          <img className="arrows" id="arrow2" src="../svg/arrowRight.svg" alt="" />

          <StagesWorks 
          title={"Copy writing"}
          points={[
            "1. Identify the target market’s problems and solutions",
            "2. Highlight unique selling points",
            "3. Create an offer with benefits, guarantees, social proof and urgency."
          ]}
          stage={"Stage 1: Plan"}
          number={"3"}
          />
          <StagesWorks 
          title={"Email marketing"}
          points={[
            "1. Set clear objectives and goals",
            "2. Create targeted email sequences",
            "3. Identify cross-selling and up-selling opportunities."
          ]}
          stage={"Stage 2: Build "}
          number={"4"}
          />
          <img className="arrows" id="arrow3" src="../svg/arrowLeft.svg" alt="" />
          <StagesWorks 
          title={"Graphic & Video design"}
          points={[
            "1. Set goals/content calendar",
            "2. Define the brand style",
            "3 Create images, carousels and videos for respective ad channels"
          ]}
          stage={"Stage 2: Build "}
          number={"5"}
          />
          <img className="arrows" id="arrow4" src="../svg/arrowLeft.svg" alt="" />

          <StagesWorks 
          title={"Tech implementation"}
          points={[
            "1. Audit and Research technology options",
            "2. Implement security and scalability solutions",
            "3. Implement chosen technology and test."
          ]}
          stage={"Stage 2: Build "}
          number={"6"}
          />
          <img className="arrows" id="arrow5" src="../svg/arrowDown.svg" alt="" />

          <StagesWorks 
          title={"Paid organic"}
          points={[
            "1. Choose effective media channels  ",
            "2. Create a detailed media plan",
            "3. Track & optimise  performance"
          ]}
          stage={"Stage 3: Launch "}
          number={"7"}
          />
          <img className="arrows" id="arrow6" src="../svg/arrowRight.svg" alt="" />

          <StagesWorks 
          title={"Data analysis"}
          points={[
            "1. Define the goals of the analysis ",
            "2. Collect and clean the data",
            "3. Identify critical insights to inform future decisions"
          ]}
          stage={"Stage 3: Launch "}
          number={"8"}
          />
          <img className="arrows" id="arrow7" src="../svg/arrowRight.svg" alt="" />

          <StagesWorks 
          title={"Optimisation CRO"}
          points={[
            "1. Identify areas for improvement using the IGSA roadmap",
            "2. Collect relevant data, find answers ",
            "3. Test new versions, ideas and angles, go back to step 1 of the IGSA roadmap and optimise."
          ]}
          stage={"Stage 3: Launch "}
          number={"9"}
          />
        </div>
        
      </section>
      <Banner
      images={[
        "../images/bannerOne.png",
        "../images/bannerTwo.png"
      ]}
      title={"FIND YOUR IDEAL TARGET MARKET "}
      />
      <ClientFeedBack/>
      <section className="questions">
        <div>
          <h2>Frequently Asked Questions</h2>
          <h3>Find the answer you are looking for</h3>
          <ul>
            <li>Can the “Infinite Growth & Sales Accelerator” roadmap help my business in my niche?</li>
            <li>What services do you offer?</li>
            <li>How to measure the success of your digital marketing campaign?</li>
            <li>How do you stay current with digital marketing trends and algorithm changes?</li>
            <li>How do you integrate Social Media Ads, SEO, PPC, Display ads, and PPI into your digital marketing strategies?</li>
            <li>How do you integrate social media marketing into your overall strategy?</li>
            <li>How do you approach audience targeting and segmentation?</li>
            <li>Can you provide a breakdown of your pricing and packages?</li>
            <li>How do you measure and report progress and analytics to clients?</li>
            <li>Can you provide case studies or examples of past work? </li>
          </ul>
        </div>
      </section>
      <Banner
      images={[
        "../images/bannerThree.png",
        "../images/bannerFour.png"
      ]}
      title={"FIND YOUR IDEAL TARGET MARKET "}
      />
      <Counter/>
      <section className="caseStudies">
        <h2>Case Studies </h2>
        <div className="case">
          <img src="images/caseOne.png" alt="7Flower" />
          <div>
          <div>
            <div>
              <h3>7Flowers</h3>
              <div>
                <div>
                  <p>Revenue generated </p>
                  <p>Ad spent</p>
                  <p>ROAS</p>
                  <p>Platform</p>
                </div>
                <div>
                  <p>€ 3,079.40</p>
                  <p>€ 11.965.25</p>
                  <p>3,89</p>
                  <p>Facebook ads</p>
                </div>
              </div>
            </div>
            <div className="descriptionHolder">
                <p>7Flower is a leading functional mushroom company that offers high-quality natural supplements made from mushrooms with a long history of use in ancient Chinese medicine.<br/><br/>
Through their e-Commerce store, we helped them transform their business from a monthly loss to generating €11,965.25 in sales in just 30 days, with only €3,079.40 invested in advertising.<br/><br/>
The effectiveness of the marketing strategy coupled with the demand for their physical products, was the perfect formula for turning this company around</p>
                <Link to="/construction">Read More</Link>
              </div>
          </div>
          </div>
        </div>
        <div className="case">
          <img src="images/caseTwo.png" alt="wordagent" />
          <div>
          <div>
            <div>
              <h3>Wordagents</h3>
              <div>
              <div>
                  <p>Revenue generated </p>
                  <p>Ad spent</p>
                  <p>ROAS</p>
                  <p>Platform</p>
                </div>
                <div>
                  <p>€ 151,000</p>
                  <p>€ 600,000 / Month</p>
                  <p>3,9</p>
                  <p>€ 3,079.40</p>
                </div>
              </div>
            </div>
            <div className="descriptionHolder">
                <p>$600,000 /Month in Subscription sales for them with only $115 K in ad spent, they are a content agency and they sell their content SEO agencies, Bloggers, Media agencies, and blog content firms  </p>
                <Link to="/construction">Read More</Link>
              </div>
          </div>
          </div>
        </div>
        <div className="case">
          <img src="images/caseThree.png" alt="Mortadella Head" />
          <div>
            <div>
              <div>
              <h3>Mortadella Head</h3>
              <div>
                <div>
                  <p>Cost per lead </p>
                  <p>CPC</p>
                  <p>Platform</p>
                </div>
                <div>
                  <p>$ 0,61 - $1 </p>
                  <p> .</p>
                  <p>Facebook ads</p>
                </div>
              </div>
              </div>
              <div className="descriptionHolder">
                <p>Our company was tasked with managing the lead generation and sales for this rapidly growing restaurant chain.<br/><br/>
This project has been a huge success, based on the increase of revenue, showing our expertise in lead magnet creation and optimisation space.Through our lead magnets and conversion funnels, we were able to achieve a cost per lead of under $1 and a cost per click of under $0.20.</p>
                <Link to ="/construction">Read More</Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <Banner
      images={[
        "../images/bannerTwo.png",
        "../images/bannerOne.png"
      ]}
      title={"FIND YOUR IDEAL TARGET MARKET "}
      />
    </main>
  )
}