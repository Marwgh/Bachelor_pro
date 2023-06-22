import { Link } from "react-router-dom";


export default function Footer() {
  
  
  return(
    <footer>
      <div>
        <div className="smallDescription">
          <img src="../svg/logoWhite.svg" alt="" />
          <div>
            <p>At Endorfinas Media, we recognize that reaching marketing objectives can be a challenge. <br/> <br/>
            To assist our clients in overcoming this, we have created a 9-step roadmap that guarantees success.</p>
            <Link to="/construction" className="learnMore">Learn About Our Approach</Link>
          </div>
        </div>
        <div>
          <h3>Service</h3>
          <ul>
            <li>Market Research</li>
            <li>Content Strategy</li>
            <li>Copy Writing</li>
            <li>Tech implementation</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Graphic Design</li>
            <li>Video Production</li>
            <li>Email Marketing</li>
            <li>Media buying </li>
            <li>Data Analysis</li>
          </ul>
        </div>
        <div>
          <h3>Blog </h3>
          <ul>
            <li>New blog</li>
          </ul>
        </div>
        <div>
          <h3>Get started</h3>
          <ul>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h3>About</h3>
          <ul>
            <li>About us</li>
            <li>History </li>
            <li>Review</li>
            <li>Contact us </li>
          </ul>
        </div>
        <div>
          <h3>Member login</h3>
        </div>
      </div>
      <div>
        <p className="copyright">Endorfinas | Copyright 2023</p>
        <p className="notice">Legal Notice </p>
        <p className="policy">Privacy Policy </p>
        <p className="conditions">Terms and conditions </p>
        <div className="installAppFooter">
          <img src="../svg/appelStore.svg" alt="appelStore" />
          <img src="../svg/googlePlay.svg" alt="googlePlay" />
        </div>
      </div>
    </footer>
  )
  
}


