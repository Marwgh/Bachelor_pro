import { Link } from "react-router-dom";
import CompanyLogos from "./item/companyLogos";



export default function Home() {

  return (
    <main id="homePage">
      <header>
        <div>
        <p>Marketing That Works</p>
        <h1>Marketing Roadmap for Generating New Sales.</h1>
        <p>Transform your marketing strategy and skyrocket your sales by implementing our proven 9-Step roadmap. Experience up to 2X increase in just 90 days.</p>
        <div className="buttonHolderHeader">
          <Link className="button" to="#">Claim your free website audit</Link>
          <Link className="learnMore" to="#">Learn more about out approach </Link>
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
        <img src="../svg/endorFinasIcon.svg" alt="" />
        <h2>We have partnered with startups, scale-ups, and Fortune 500 companies.</h2>
        <CompanyLogos/>
        <div id="popUpOutPerform">
          <p>Outperform Industry Benchmarks With</p>
          <p>300%</p>
        </div>
      </section>
      <section>
        <h2></h2>
        <div>
          {/* component */}
        </div>
        <Link to="#">Learn about our approach</Link>
      </section>
      <section>
        <div></div>
        <div>
          <div>
            <h2>Leave the heavy lifting to us.</h2>
            <p>We utilize online marketing strategies to effectively increase sales and solve real-world business challenges.</p>
            <button>Learn about our approach</button>
          </div>
          <div>
            {/* component */}
          </div>
        </div>
      </section>
      <section>
        <h2>
        Unlock the Full Potential of Your Business in 4 simple stages
        </h2>
        <div>
          {/* component */} 
        </div>
        <div>
          <div></div>
          <div>
            <p></p>
            <h3></h3>
            <p></p>
          </div>
          <div>
            <Link to="#">Learn more</Link>
          </div>
        </div>
        <button>Learn about our approach</button>
      </section>
      <section>
        <img src="" alt="" />
      </section>
      <section> 
        <div>
          <h2></h2>
          <h3></h3>
          <p></p>
        </div>
        <div>
          {/* component */} 
        </div>
      </section>
      {/* component Find */} 
      <section>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
          <h2>FIND YOUR IDEAL TARGET MARKET </h2>
          <button>Take Your Quiz Now </button>
          <div></div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </section>
      {/* component */} 
      <section>
        {/*make component */} 
        <h2>
        Hear what our clients have to say
        </h2>
        <div>
          {/* component */} 
        </div>
      </section>
      <section>
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
      {/* component Find */} 
      <section>
        {/*Make it componetn */}
        <p>+7 Years </p>
        <p>+50 Clients </p>
        <p>+100 Projects</p>
      </section>
      <section>
        <h2>Case Studies </h2>
        {/* component */} 
      </section>
      <section>
        <div>
          <p>We Make It Easy.</p>
        </div>
        <div>
          <img src="" alt="" />
          <h2>FIND YOUR IDEAL TARGET MARKET </h2>
          <button>Take Your Quiz Now </button>
          <div></div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </section>
    </main>
  )
}