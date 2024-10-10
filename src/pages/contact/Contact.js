import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../contact/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const userId = process.env.REACT_APP_USER_ID;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      emailjs.send(serviceId, templateId, formData, userId).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Your message has been sent!");
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
        },
        (error) => {
          console.log("FAILED...", error);
          setErrors({
            submit:
              "There was an error sending your message. Please try again later.",
          });
        }
      );
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errors.submit && <p className="error">{errors.submit}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
