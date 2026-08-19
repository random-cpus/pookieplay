"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import styles from "./ContactUs.module.css";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Contact Us", url: "/contact-us/" },
  ];

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Breadcrumbs items={breadcrumbs} />

        <h1 className={styles.pageTitle}>Contact Us</h1>

        <div className={styles.formCard}>
          {submitted ? (
            <div className={styles.successMessage}>
              <h2 className={styles.successTitle}>Thank You!</h2>
              <p className={styles.successText}>
                Your message has been received. Our editorial and support team will get back to you shortly.
              </p>
              <button
                type="button"
                className="btn-pink"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Row 1: First Name & Last Name */}
              <div className={styles.nameRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="firstName" className={styles.label}>
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="First Name"
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="lastName" className={styles.label}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Last Name"
                    className={styles.input}
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email Address"
                  className={styles.input}
                />
              </div>

              {/* Row 3: Subject */}
              <div className={styles.inputGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Subject"
                  className={styles.input}
                />
              </div>

              {/* Row 4: Your Message */}
              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>
                  Your Message <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your Message"
                  className={styles.textarea}
                />
              </div>

              {/* Submit Button */}
              <div className={styles.btnRow}>
                <button type="submit" className={styles.submitBtn}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
