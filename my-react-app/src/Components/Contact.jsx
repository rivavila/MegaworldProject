import React from "react";
import "./Assets/CSS/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <img
        src="path_to_your_image"
        alt="Megaworld Banner"
        className="contact-banner"
      />
      <div className="contact-content">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>
            If you’re interested with our properties, please fill out the form
            below and we’ll get back to you the soonest to assist you with your
            inquiry.
          </p>
          <form>
            <input type="text" placeholder="Enter your full name" required />
            <input
              type="text"
              placeholder="Contact Number (e.g. 09123456789)"
              required
            />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="From what company are you?" />
            <textarea
              placeholder="What do you need? Tell us how we can help you find it!"
              rows="3"
              required
            ></textarea>

            <div className="radio-group">
              <label>Are you a broker or an inquirer?</label>
              <input type="radio" name="role" value="broker" /> Broker
              <input type="radio" name="role" value="inquirer" /> Inquirer
            </div>

            <div className="preferred-viewing-schedule">
              <label>Preferred Viewing Schedule</label>
              <textarea
                placeholder="If you want to leave us a message or ask for any assistance, you may leave us a note below."
                rows="3"
              ></textarea>
              <input type="checkbox" name="weekdays" /> Any Monday to Saturday
              (9am-6pm)
            </div>

            <div className="inquiry-feedback">
              <label>Inquiry Feedback</label>
              <input type="checkbox" name="feedback" value="email" /> Email
              Address
              <input type="checkbox" name="feedback" value="mobile" /> Mobile
              Number
            </div>

            <div className="recaptcha">
              <input type="checkbox" name="recaptcha" required /> I'm not a
              robot
            </div>

            <button type="submit">Send Inquiry</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>About Megaworld</h3>
          <p>
            Megaworld Corporation was founded by Business Tycoon Andrew Tan...
            (add the remaining text here).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
