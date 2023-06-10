
export default function ContactForm() {
  return (
      <section id="contactForm">
        <div>
          <form action="">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" name="" id="" />
            </div>
            <div>
              <label htmlFor="">Email </label>
              <input type="text" name="" id="" />
            </div>
            <div>
              <label htmlFor="">Phone</label>
              <input type="text" name="" id="" />
            </div>
            <div>
              <label htmlFor="">Message </label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="checkHolder">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Yes i agree to Endorfinas privacy policy </label>
            </div>
            <button className="button">Send</button>
          </form>
        </div>
        <h2>Contact us</h2>

        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.0270417702923!2d2.1874389766280893!3d41.39521909550848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3e143f22eb9%3A0x3cb5812d6b40f831!2sEndorfinas%20Media!5e0!3m2!1sen!2sdk!4v1686304115129!5m2!1sen!2sdk"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div>
            <img src="../svg/locaIcon.svg" alt="" />
            <p>C. de Pallars, 94, 08018 Barcelona, Spain</p>
          </div>
          <div>
            <img src="../svg/phoneIcon.svg" alt="" />
            <p>+13609974275</p>
          </div>
        </div>
      </section>
  )
}