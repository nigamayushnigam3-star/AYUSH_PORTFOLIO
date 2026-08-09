import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    // Intro animations
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo('.hero-badge', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
      .fromTo('.hero-name', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
      .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .fromTo('.hero-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .fromTo('.hero-btns', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .fromTo('.hero-socials', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .fromTo('.hero-avatar', { opacity: 0, scale: 0.5, rotation: -10 }, { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: 'elastic.out(1, 0.6)' }, '-=0.8');

    // Floating avatar
    gsap.to('.hero-avatar', { y: -15, duration: 3, ease: 'sine.inOut', yoyo: true, repeat: -1 });

    // 3D tilt on avatar
    const avatar = avatarRef.current;
    const onMouseMove = (e) => {
      const rect = avatar.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      gsap.to(avatar, { rotateY: dx * 20, rotateX: -dy * 20, duration: 0.4, ease: 'power2.out', transformPerspective: 600 });
    };
    const onMouseLeave = () => gsap.to(avatar, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
    avatar.addEventListener('mousemove', onMouseMove);
    avatar.addEventListener('mouseleave', onMouseLeave);

    // Constellation canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.4,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      alpha: Math.random() * 0.6 + 0.1,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
        // Mouse connection
        const md = Math.hypot(particles[i].x - mouse.x, particles[i].y - mouse.y);
        if (md < 160) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(245,158,11,${0.3 * (1 - md / 160)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Draw particles
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.alpha})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      avatar.removeEventListener('mousemove', onMouseMove);
      avatar.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef} id="about">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge tag">👋 Available for Opportunities</div>
          <h1 className="hero-name">
            Ayush <span className="glitch-text" data-text="Nigam">Nigam</span>
          </h1>
          <h2 className="hero-title">Aspiring Full Stack Developer</h2>
          <p className="hero-desc">
            Passionate about building scalable web applications and AI-powered solutions.
            Strong foundation in Python, Django, React.js & REST APIs.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View Projects
            </a>
            <a href="#contact" className="btn-outline" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Contact Me
            </a>
          </div>
          <div className="hero-socials">
            <a href="mailto:nigamayushnigam3@gmail.com" title="Email"><FiMail /></a>
            <a href="tel:+917268920632" title="Phone"><FiPhone /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn"><FiLinkedin /></a>
            <a href="https://github.com/nigamayushnigam3-star" target="_blank" rel="noreferrer" title="GitHub"><FiGithub /></a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-avatar" ref={avatarRef}>
            <div className="avatar-ring" />
            <div className="avatar-ring avatar-ring-2" />
            <div className="avatar-inner"><span>AN</span></div>
            <div className="avatar-badge">Full Stack</div>
            <div className="avatar-glow" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot" />
      </div>
    </section>
  );
}
