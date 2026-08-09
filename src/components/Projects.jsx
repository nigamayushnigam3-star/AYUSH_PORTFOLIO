import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'FitSync',
    subtitle: 'Full Stack Fitness Management Platform',
    date: '08/2026',
    desc: 'A full-stack gym management platform to manage members, subscriptions, workout plans, and fitness progress tracking. Integrated AI-powered fitness assistance using Gemini API for personalized workout recommendations.',
    tech: ['React.js', 'Django', 'DRF', 'Gemini API', 'REST API'],
    emoji: '💪',
    github: 'https://github.com/nigamayushnigam3-star/Fitsync',
  },
  {
    name: 'RakshaX',
    subtitle: "Smart Women's Safety & Emergency Assistance System",
    date: '07/2026',
    desc: 'An AI-based safety platform with real-time emergency alerts, location tracking, and intelligent assistance features. Built with React.js and Django REST Framework with secure API integration.',
    tech: ['React.js', 'Django', 'DRF', 'AI', 'Location API'],
    emoji: '🛡️',
    github: 'https://github.com/nigamayushnigam3-star/RakshaX',
  },
  {
    name: 'CrisisAI',
    subtitle: 'AI-Powered Disaster Alert & Rescue Platform',
    date: '04/2026',
    desc: 'A full-stack AI-based disaster management platform for real-time alerts, location tracking, disaster analysis, and efficient rescue coordination using React.js and Django REST Framework.',
    tech: ['React.js', 'Django', 'DRF', 'AI', 'Real-time'],
    emoji: '🚨',
    github: 'https://github.com/nigamayushnigam3-star/CrisisAI',
  },
];

function TiltCard({ p }) {
  const cardRef = useRef(null);

  const onMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    gsap.to(card, { rotateY: dx * 12, rotateX: -dy * 12, duration: 0.3, ease: 'power2.out', transformPerspective: 800 });
  };

  const onMouseLeave = () => {
    gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
  };

  return (
    <div className="project-card" ref={cardRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <div className="card-shine" />
      <div className="project-top">
        <div className="project-emoji">{p.emoji}</div>
        <span className="project-date tag">{p.date}</span>
      </div>
      <h3 className="project-name">{p.name}</h3>
      <p className="project-subtitle">{p.subtitle}</p>
      <p className="project-desc">{p.desc}</p>
      <div className="project-tech">
        {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
      </div>
      <div className="project-links">
        <a href={p.github || '#!'} target={p.github ? '_blank' : undefined} rel="noreferrer" className="project-link"><FiGithub /> Code</a>
        <a href={p.live || '#!'} target={p.live ? '_blank' : undefined} rel="noreferrer" className="project-link"><FiExternalLink /> Live</a>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.project-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );
    gsap.fromTo('.projects .section-title',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      }
    );
  }, []);

  return (
    <section className="section projects" id="projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => <TiltCard key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  );
}
