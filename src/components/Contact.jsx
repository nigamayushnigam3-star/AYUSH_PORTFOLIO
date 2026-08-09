import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.contact-info, .contact-form-box',
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );
    gsap.fromTo('.contact .section-title',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      }
    );
  }, []);

  return (
    <section className="section contact" id="contact" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!</p>
            <div className="contact-items">
              <a href="mailto:nigamayushnigam3@gmail.com" className="contact-item">
                <FiMail /> nigamayushnigam3@gmail.com
              </a>
              <a href="tel:+917268920632" className="contact-item">
                <FiPhone /> +91-7268920632
              </a>
              <div className="contact-item">
                <FiMapPin /> Gorakhpur, Uttar Pradesh, India
              </div>
            </div>
            <div className="contact-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn">
                <FiLinkedin /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btn">
                <FiGithub /> GitHub
              </a>
            </div>
          </div>

          <div className="contact-form-box">
            <form onSubmit={e => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
