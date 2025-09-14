// src/app/components/ContactSection.js
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out!</p>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </section>
  );
}