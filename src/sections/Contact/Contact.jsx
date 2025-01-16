import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactStyles.module.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    emailjs
      .sendForm(
        'service_o3z6zwk', // Replace with your EmailJS service ID
        'template_yp15eur', // Replace with your EmailJS template ID
        form.current,
        'Yfi-VD6Yr2cf4KWZV' // Replace with your EmailJS user ID (or public key)
      )
      .then(
        (result) => {
          console.log('Message sent successfully:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Error sending message:', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>

      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input type="text" name="name" id="name" placeholder="Name" required />
        </div>

        <div className="formGroup">
          <label htmlFor="Email" hidden>
            Email
          </label>
          <input type="email" name="email" id="Email" placeholder="Email" required />
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>

        <input type="submit" className="hover btn" value="Submit" />
      </form>
    </section>
  );
}
