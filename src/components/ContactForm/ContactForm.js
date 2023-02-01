import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import emailjs from '@emailjs/browser';

import ParticlesBackground from "../../pages/ParticlesBackground/ParticlesBackground.js";
import "./ContactForm.css";

function ContactForm() {
    const [formFilled, setFormFilled] = useState(false)

    function handleChange(e) {
        setFormFilled(true)
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4id5omq', 'template_ailpts8', e.target, process.env.REACT_APP_EMAILJS)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    
      return (
        <>
            <ParticlesBackground />
            <div className="form_container">
                <form onSubmit={sendEmail} autoComplete="off">
            
                <div className="Contact_title">
                    <h2 className="Contact_h2">If you leave a message in the boxes, I'll get back to you as soon as possible</h2>
                </div>
            
                <div className="form_body">
                    <label htmlFor="name" className="form_label">Name</label>
                    <input id="name" className="form_input" type="text" placeholder="Your name" name="name" maxLength="30" spellcheck="false" required />
                    
                    <label htmlFor="email" className="form_label">Email</label>
                    <input id="email" className="form_input" type="email" placeholder="Your email address" name="email" maxLength="150" spellcheck="false" required />
                    
                    <label htmlFor="subject" className="form_label">Subject</label>
                    <input id="subject" className="form_input" type="text" placeholder="Subject" name="subject" maxLength="150" spellcheck="false" required />
                    
                    <label htmlFor="message" className="form_label">Message</label>
                    <textarea id="message" className="form_input" placeholder="Please leave your message here (500 character limit)" name="message" maxLength="500" spellcheck="false" onChange={handleChange} required />
                </div>

                <div className="form_btn">
                    <input type="submit" className={formFilled === true ? "form_send" : "form_nosend"} value="Send" />
                </div>
            </form>

            <div className="Contact_pglinks">
                <button className="Contact_pglink"><Link to="/">Home</Link></button>
            </div>
        </div>
        </>
      )
};

export default ContactForm;