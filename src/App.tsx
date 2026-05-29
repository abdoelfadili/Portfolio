import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { content, type Language, type Project } from './data';

const ProjectCarousel = lazy(() => import('./components/ProjectCarousel'));

const getInitialLanguage = (): Language => {
  const savedLanguage = window.localStorage.getItem('portfolio-language');
  if (savedLanguage === 'fr' || savedLanguage === 'en') return savedLanguage;
  return 'fr';
};

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [activeSection, setActiveSection] = useState('accueil');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const currentContent = content[language];

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
    document.title = language === 'fr'
      ? 'Abdelkoddouss El Fadili | Portfolio Full-Stack, ML/DL et Agentic AI'
      : 'Abdelkoddouss El Fadili | Full-Stack, ML/DL and Agentic AI Portfolio';

    const description = document.querySelector('meta[name="description"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const descriptionText = language === 'fr'
      ? 'Portfolio de Abdelkoddouss El Fadili, étudiant ingénieur en Génie Informatique, Full-Stack, ML/DL et Agentic AI.'
      : 'Portfolio of Abdelkoddouss El Fadili, computer engineering student focused on full-stack development, ML/DL and Agentic AI.';

    description?.setAttribute(
      'content',
      descriptionText,
    );
    ogDescription?.setAttribute('content', descriptionText);
  }, [language]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
      setScrolled(currentScroll > 40);

      for (const item of currentContent.navItems) {
        const element = document.getElementById(item.id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 180 && rect.bottom >= 180) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentContent.navItems]);

  useEffect(() => {
    let animationFrame = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        cursorGlowRef.current?.style.setProperty('transform', `translate(${e.clientX - 160}px, ${e.clientY - 160}px)`);
        animationFrame = 0;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offsetPosition = element.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const openProjectCarousel = (project: Project) => {
    setSelectedProject(project);
    setCarouselOpen(true);
  };

  const closeProjectCarousel = () => {
    setCarouselOpen(false);
    setSelectedProject(null);
  };

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'fr' ? 'en' : 'fr'));
    closeProjectCarousel();
  };

  return (
    <div className="min-h-screen bg-white text-slate-950 selection:bg-sky-100 selection:text-sky-950 grain">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <div
        ref={cursorGlowRef}
        className="fixed pointer-events-none z-50 hidden lg:block"
        style={{
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 65%)',
          filter: 'blur(36px)',
          transform: 'translate(-320px, -320px)',
          willChange: 'transform',
        }}
      />

      <Navbar
        activeSection={activeSection}
        language={language}
        isMenuOpen={isMenuOpen}
        navItems={currentContent.navItems}
        setIsMenuOpen={setIsMenuOpen}
        toggleLanguage={toggleLanguage}
        scrolled={scrolled}
        scrollToSection={scrollToSection}
      />

      <main>
        <Hero content={currentContent} scrollToSection={scrollToSection} />
        <Expertise content={currentContent} />
        <About content={currentContent} />
        <Projects content={currentContent} openProjectCarousel={openProjectCarousel} />
        <Experience content={currentContent} />
        <Education content={currentContent} />
        <Skills content={currentContent} />
        <Contact content={currentContent} />
      </main>

      {carouselOpen && selectedProject && (
        <Suspense fallback={null}>
          <ProjectCarousel content={currentContent} project={selectedProject} onClose={closeProjectCarousel} />
        </Suspense>
      )}
    </div>
  );
}
