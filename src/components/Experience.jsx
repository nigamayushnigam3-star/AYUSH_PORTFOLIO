import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.exp-card',
      { opacity: 0, x: -60 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );
    gsap.fromTo('.edu-card',
      { opacity: 0, x: 60 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );
    gsap.fromTo('.experience .section-title',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      }
    );
  }, []);

  return (
    <section className="section experience" id="experience" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="exp-edu-grid">

          <div className="exp-card timeline-card">
            <div className="card-label">💼 Experience</div>
            <div className="timeline-dot" />
            <div className="card-content">
              <div className="card-header">
                <div>
                  <h3>Python Full Stack Developer Intern</h3>
                  <p className="company">Techpile Technology Pvt. Ltd., Lucknow</p>
                </div>
                <span className="tag">06/2026 – 08/2026</span>
              </div>
              <p className="card-desc">
                Gained hands-on experience and practical knowledge of HTML, CSS, JavaScript, Python, Django, and SQL through real-world development tasks.
              </p>
              <div className="card-skills">
                {['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'SQL'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="edu-card timeline-card">
            <div className="card-label">🎓 Education</div>
            <div className="timeline-dot" />
            <div className="card-content">
              <div className="card-header">
                <div>
                  <h3>B.Tech – CSE (AIML)</h3>
                  <p className="company">Buddha Institute Of Technology, Gorakhpur</p>
                </div>
                <span className="tag">2023 – 2027</span>
              </div>
              <div className="cgpa-box">
                <span className="cgpa-label">CGPA</span>
                <span className="cgpa-value">7.5 / 10</span>
              </div>
              <p className="card-desc">
                Pursuing B.Tech in Computer Science with specialization in Artificial Intelligence & Machine Learning.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
