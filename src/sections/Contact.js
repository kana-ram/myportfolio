// src/sections/Contact.js
import React from 'react';
import '../components/style.css'
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <strong>Email</strong><br />
                <a href="mailto:kanaramk96600@gmail.com">kanaramk96600@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <strong>Phone</strong><br />
                <a href="tel:+919660013393">+91 9660013393</a>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>Location</strong><br />
                Pratap Nagar, Jaipur, Rajasthan
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/kana-ram" className="social-link" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/kana-ram" className="social-link" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/kanaram-khatik" className="social-link" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

         <form className="contact-form" onSubmit={async (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  try {
    await addDoc(collection(db, 'contacts'), {
      name,
      email,
      message,
      timestamp: serverTimestamp(),
    });

    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  } catch (error) {
    console.error('Firestore submission error:', error);
    alert('Something went wrong. Please try again later.');
  }
}}>
  <div className="form-group">
    <label htmlFor="name">Name *</label>
    <input type="text" id="name" name="name" required />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email *</label>
    <input type="email" id="email" name="email" required />
  </div>
  <div className="form-group">
    <label htmlFor="message">Message *</label>
    <textarea id="message" name="message" required></textarea>
  </div>
<button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
</form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
