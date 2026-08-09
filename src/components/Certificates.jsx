import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Certificates.css';

gsap.registerPlugin(ScrollTrigger);

const certs = [
  { title: 'Artificial Intelligence Virtual Internship', issuer: 'CodeSoft', icon: '🤖', color: '#6366f1' },
  { title: 'Full Stack Python Developer Intern', issuer: 'Techpile Pvt. Ltd.', icon: '🐍', color: '#10b981' },
  { title: 'Python Programming Internship Certificate', issuer: 'CodeAlpha', icon: '💻', color: '#f59e0b' },
  { title: 'TCS iON Career Edge – Young Professional', issuer: 'TCS iON', icon: '🏆', color: '#ec4899' },
];

export default function Certificates() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current.querySelectorAll('.cert-card'),
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );
    gsap.fromTo('.certificates .section-title',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      }
    );
  }, []);

  return (
    <section className="section certificates" id="certificates" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="certs-grid">
          {certs.map((c) => (
            <div className="cert-card" key={c.title} style={{ '--cert-color': c.color }}>
              <div className="cert-icon">{c.icon}</div>
              <div className="cert-info">
                <h3>{c.title}</h3>
                <p>{c.issuer}</p>
              </div>
              <div className="cert-badge">✓</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
