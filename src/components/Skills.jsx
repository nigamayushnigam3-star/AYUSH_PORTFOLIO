import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Python', 'Django', 'Django REST Framework', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['MySQL', 'SQLite', 'SQL'],
  },
  {
    title: 'Tools & Concepts',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks'],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.skill-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      }
    );

    gsap.fromTo('.skills .section-title',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      }
    );
  }, []);

  return (
    <section className="section skills" id="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-tags">
                {group.skills.map(s => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
