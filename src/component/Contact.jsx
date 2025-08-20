import React from 'react'

import "./Contact.css"
import facebook from "../../../images/facebook.jpeg"
import insta from "../../../images/instagram.jpeg";
import twitter from "../../../images/twitter.png";
import youtube from "../../../images/youtube.png";
import emailjs from "@emailjs/browser";
import { useRef } from 'react';
const Contact = () => {
    const form = useRef();
      const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm("service_8eeag2l", "template_x6ybgao", form.current, {
            publicKey: "Pn9U3WsNnrJb7Quki",
          })
          .then(
            () => {
              console.log("SUCCESS!");
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
      };


  return (
    <section id="Contact">
      <h1 className="contact-title">Contact Me</h1>
      <span className="contact-details">
        Please fill out the form below to get in touch with me regarding any
        project or collaboration. I am available for professional work and would
        be happy to discuss your requirements.
      </span>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name='name'/>
        <input type="email" className="email" placeholder="Your Email" name='email' />
        <textarea
          name="message"
          row="5"
          className="message"
          placeholder="Your message"
        ></textarea>
        <button className="Submit">Submit</button>
        <div className="Links">
          <img src={twitter} alt="twitter" className="link" />
          <img src={facebook} alt="facebook" className="link" />
          <img src={insta} alt="insta" className="link" />
          <img src={youtube} alt="youtube" className="link" />
        </div>
      </form>
    </section>
  );
}

export default Contact
