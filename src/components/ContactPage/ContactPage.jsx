import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-main">
      <div className="contact-bg">
        <h1>Contact</h1>
      </div>
      <form>
        <input type="name" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="name" placeholder="Subject" required />
        <textarea name="textarea" placeholder="Message"></textarea>
      </form>
      <button>Send Message</button>
    </div>
  );
};

export default ContactPage;
