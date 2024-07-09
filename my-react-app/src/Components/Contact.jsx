import ParkMckinleyWestHome from "./assets/img/ParkMckinleyWestHome.jpg";
import React, { useState } from "react";
import "./assets/CSS/Contact.css";

const Contact = () => {
  const [role, setRole] = useState("");

  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={ParkMckinleyWestHome} alt="ParkMckinleyWestHome" />
      </div>
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

            <div className="btn-group btn-group-toggle">
              <label>Are you a broker or an inquirer?</label>
              <button
                type="button"
                className={`role-button ${role === "broker" ? "active" : ""}`}
                onClick={() => setRole("broker")}
              >
                Broker
              </button>
              <button
                type="button"
                className={`role-button ${role === "inquirer" ? "active" : ""}`}
                onClick={() => setRole("inquirer")}
              >
                Inquirer
              </button>
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

            {/* make a captcha here */}

            <button type="submit">Send Inquiry</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>About Megaworld</h3>
          <p>
            Megaworld Corporation was founded by Andrew Tan and incorporated
            under Philippine law on August 24, 1989 to engage in the
            development, leasing and marketing of real estate. The Company
            initially established a reputation for building high-end residential
            condominiums and commercial properties located in convenient urban
            locations with easy access to offices as well as leisure and
            entertainment amenities in Metro Manila.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
