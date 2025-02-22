import React, { useState} from "react";
import styles from "./Body_Newsletter.module.css";


const Body_Newsletter = () => {
  const [newsletter, setNewsletter] = useState({
    lastName: "",
    firstName: "",
    email: "",
    optionalText: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewsletter((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const newsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter Data:", newsletter);
    alert("Newsletter request submitted successfully!"); //It just says submitted succesfully, but nothing happens, no email provider
    setNewsletter({ lastName: "", firstName: "", email: "", optionalText: "", agreement: false });
  };

  return (
    <main className={styles.WholeBody}>
      <header className={styles.title}>Sign up for our Newsletter</header>
      <section className={styles.newsletterInformation}>
        <p>
          Do you want to always stay in touch and receive the latest updates from the world of cinema?
          <br /> Then sign up for our newsletter and receive monthly insights into new movies or promotional
          material related to future Hollywood releases.
          <br />
          <br />
          <strong>Finch and all associated team members save the information according to current data regulations.</strong>
        </p>
      </section>
      <section className={styles.newsletterForm}>
        <h2>Fill in the information</h2>
        <form onSubmit={newsletterSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={newsletter.lastName} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" value={newsletter.firstName} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" value={newsletter.email} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="optionalText">Optional Text</label>
            <textarea id="optionalText" name="optionalText" rows="5" value={newsletter.optionalText} onChange={handleChange}></textarea>
          </div>
          <div className={styles.formGroup}>
            <input type="checkbox" id="agreement" name="agreement" checked={newsletter.agreement} onChange={handleChange} required />
            <label htmlFor="agreement">I agree to the terms and conditions and allow the submitted data to be used by Finch.</label>
          </div>
          <button type="submit" disabled={!newsletter.agreement} className={styles.submitButton}>Sign up for the newsletter</button>
        </form>
      </section>
    </main>
  );
};

export default Body_Newsletter;
