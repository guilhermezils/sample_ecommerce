const Contact = () => {
  <div className="contact-us">
    <p>Contact Us</p>
    <p>Phone: 555-555-5555</p>

    <form action="/send-data-here" method="POST" className="contact-us-form">
      <p>Fields marked with * are required</p>
      <label htmlFor="fullname">Your full name:</label>
      <div className="contact-field">
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Your Full Name"
          required
        />
        <span>*</span>
      </div>

      <label htmlFor="email">Your email address:</label>
      <div className="contact-field">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
        />
        <span>*</span>
      </div>

      <label htmlFor="enquiry">Your enquiry:</label>
      <div className="contact-field">
        <textarea
          rows="5"
          cols="60"
          name="enquiry"
          id="enquiry"
          placeholder="Your Enquiry"
          required
        ></textarea>
      </div>

      <button type="submit" className="contact-submit">
        Submit
      </button>
    </form>
  </div>;
};

export default Contact;
