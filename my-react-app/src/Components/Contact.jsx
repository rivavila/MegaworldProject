import React, { useState } from "react";
import ParkMckinleyWestHome from "./assets/img/ParkMckinleyWestHome.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    company: "",
    message: "",
    schedule: "",
    weekdays: false,
    feedback: [],
    role: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: checked,
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const handleFeedbackChange = (e) => {
    const { value, checked } = e.target;
    setForm((prevForm) => {
      const feedback = checked
        ? [...prevForm.feedback, value]
        : prevForm.feedback.filter((item) => item !== value);
      return {
        ...prevForm,
        feedback,
      };
    });
  };

  const handleRoleChange = (role) => {
    setForm((prevForm) => ({
      ...prevForm,
      role: role,
    }));
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email before proceeding
    if (!validateEmail(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Prepare the email body
    const emailBody = `
      Full Name: ${form.fullName}
      Contact Number: ${form.contactNumber}
      Email: ${form.email}
      Company: ${form.company}
      Message: ${form.message}
      Preferred Viewing Schedule: ${form.schedule}
      Role: ${form.role}
      Feedback: ${form.feedback.join(", ")}
    `;

    // Example alert or submit logic
    alert("Form submitted successfully!");
    // Or you can submit the form data to a server here
  };

  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={ParkMckinleyWestHome} alt="ParkMckinleyWestHome" />
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <h2>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} />
            Contact Us
          </h2>
          <p>
            If you’re interested in our properties, please fill out the form
            below, and we’ll get back to you as soon as possible to assist with
            your inquiry.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number (e.g. 09123456789)"
              value={form.contactNumber}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="From what company are you?"
              value={form.company}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="What do you need? Tell us how we can help you find it!"
              rows="3"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <p>Are you a buyer or broker?</p>

            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className={`btn btn-secondary ${
                  form.role === "Buyer" ? "active" : ""
                }`}
                onClick={() => handleRoleChange("Buyer")}
              >
                Buyer
              </button>
              <button
                type="button"
                className={`btn btn-secondary ${
                  form.role === "Broker" ? "active" : ""
                }`}
                onClick={() => handleRoleChange("Broker")}
              >
                Broker
              </button>
            </div>

            <div className="preferred-viewing-schedule">
              <label>Preferred Viewing Schedule</label>
              <textarea
                name="schedule"
                placeholder="(e.g Monday to Sunday 8am-12pm)Any Monday to Saturday (9am-6pm)"
                rows="3"
                value={form.schedule}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="inquiry-feedback">
              <label>Inquiry Feedback</label>
              <input
                type="checkbox"
                name="feedback"
                value="email"
                checked={form.feedback.includes("email")}
                onChange={handleFeedbackChange}
              />{" "}
              Email Address
              <input
                type="checkbox"
                name="feedback"
                value="mobile"
                checked={form.feedback.includes("mobile")}
                onChange={handleFeedbackChange}
              />{" "}
              Mobile Number
            </div>

            <button type="submit" className="btn btn-success">
              Send Inquiry
            </button>
          </form>
        </div>
        <div className="contact-info">
          <h3>About Megaworld</h3>
          <p>
            Megaworld Corporation was founded by Andrew Tan and incorporated
            under Philippine law on August 24, 1989, to engage in the
            development, leasing, and marketing of real estate. The company
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
