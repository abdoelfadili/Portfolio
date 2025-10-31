import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Code, Briefcase, GraduationCap, Award, ChevronDown, Menu, X, ExternalLink, Camera, ZoomIn } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const skills = {
    languages: ['Java', 'Python', 'C++', 'C#', 'Dart', 'PL/SQL'],
    web: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Laravel'],
    mobile: ['Flutter'],
    databases: ['MySQL', 'Oracle'],
    tools: ['Git', 'VS Code', 'Postman', 'Figma', 'Docker'],
    other: ['UML','Merise', 'Agile/SCRUM', 'Réseaux Cisco']
  };

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Application Web de Gestion d\'École',
      period: '2022 – 2024',
      tech: ['Laravel', 'React', 'MySQL'],
      description: 'Application complète pour la gestion administrative et pédagogique d\'une école avec authentification avancée, gestion des utilisateurs, cours, notes et emplois du temps.',
      features: ['Architecture MVC', 'Rôles et permissions', 'Génération de rapports', 'Hébergement WAMP'],
      screenshots: []
    },
    {
      title: 'Application de Chiffrement de Fichiers',
      period: '2022 – 2024',
      tech: ['JavaFX', 'Algorithme RSA'],
      description: 'Application desktop sécurisée pour le chiffrement et déchiffrement de fichiers avec interface graphique intuitive.',
      features: ['Algorithme RSA', 'Interface JavaFX', 'Gestion sécurisée', 'UX responsive'],
      screenshots: []
    }
  ];

  const experiences = [
    {
      title: 'Stage de Fin d\'Étude',
      company: 'SPS Technologie',
      period: 'Avril – Mai 2023',
      description: 'Développement d\'une application mobile Flutter pour la gestion des livraisons et commandes',
      tasks: [
        'Intégration d\'API Laravel avec Flutter',
        'Gestion des statuts de commandes en temps réel',
        'Implémentation de filtres dynamiques',
        'Collaboration avec l\'équipe backend'
      ]
    },
    {
      title: 'Stage d\'Observation',
      company: 'Abattoirs de Casablanca',
      period: 'Juillet 2023',
      description: 'Maintenance informatique et développement web',
      tasks: [
        'Maintenance et installation de postes',
        'Création d\'un site web statique en HTML/CSS/JS',
        'Documentation technique'
      ]
    }
  ];

  const education = [
    {
      degree: 'Cycle d\'Ingénierie en Génie Informatique',
      school: 'ENIAD – Université Mohammed Premier',
      period: '2024 – En cours',
      description: 'Formation avancée en IA, développement logiciel, réseaux et gestion de projets'
    },
    {
      degree: 'DUT en Génie Informatique',
      school: 'EST Guelmim',
      period: '2022 – 2024',
      description: 'Développement logiciel, POO, bases de données et réseaux'
    },
    {
      degree: 'Baccalauréat Sciences Physiques',
      school: 'Groupe Scolaire Reddani',
      period: '2021 – 2022',
      description: 'Formation scientifique rigoureuse'
    }
  ];

  return (
    <div className='App'>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-gradient-to-r from-slate-900/80 via-blue-900/80 to-slate-900/80'}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        AEF
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4 bg-slate-800/60 rounded-full px-4 py-1 shadow-lg">
        {['Accueil', 'À Propos', 'Projets',  'Expériences', 'Formation', 'Compétences', 'Contact'].map((item) => {
          const id = item.toLowerCase().replace('à ', '');
          return (
            <button
              key={item}
              onClick={() => scrollToSection(id)}
              className={`relative px-4 py-2 font-medium transition-colors duration-200 rounded-full
                ${activeSection === id ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md' : 'hover:text-blue-400 text-gray-200'}
                group`}
            >
              {item}
              <span className={`absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 w-0 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-3/4
                ${activeSection === id ? 'w-3/4' : ''}`}></span>
            </button>
          );
        })}
      </div>
      {/* Mobile Menu Button */}
      <button className="md:hidden bg-slate-800/70 p-2 rounded-full shadow" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </div>
  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 shadow-2xl rounded-b-2xl border-t border-blue-800 animate-fade-in-down">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {['Accueil', 'À Propos', 'Projets', 'Expériences', 'Formation', 'Compétences', 'Contact'].map((item) => {
          const id = item.toLowerCase().replace('à ', '');
          return (
            <button
              key={item}
              onClick={() => scrollToSection(id)}
              className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all
                ${activeSection === id ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow' : 'hover:bg-blue-900/50 text-gray-200'}`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  )}
</nav>

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-4xl font-bold">
              AEF
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Abdelkoddouss El Fadili
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-300 mb-6">
              Étudiant Ingénieur en Génie Informatique
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Développeur Full-Stack | Passionné par les Technologies Web & Mobile
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="mailto:abdoelfadili695@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-105">
                <Mail size={20} />
                Contact
              </a>
              <a href="tel:0608568400" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-105">
                <Phone size={20} />
                0608568400
              </a>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/abdoelfadili" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com/in/abdelkoddouss-elfadilii" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
          <button onClick={() => scrollToSection('propos')} className="animate-bounce mt-0">
            <ChevronDown size={32} className="text-blue-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="propos" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            À Propos de Moi
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Étudiant en 4ᵉ année du cycle ingénieur à l'ENIAD – Université Mohammed Premier, spécialisé en Génie Informatique. Passionné par le développement full-stack et les technologies web et mobiles, je combine rigueur, créativité et esprit d'équipe dans la réalisation de projets innovants.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Je suis actuellement à la recherche d'un stage PFA me permettant d'approfondir mes compétences techniques et de contribuer activement au développement d'applications performantes et modernes.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Projets Académiques
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start justify-between mb-4">
                  <Code className="text-blue-400" size={32} />
                  <span className="text-sm text-gray-400">{project.period}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-blue-300">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-900/50 rounded-full text-sm text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-gray-400 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Camera size={20} />
                  Voir les captures d'écran
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section id="galerie" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Galerie de Projets
          </h2>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700">
                <h3 className="text-3xl font-bold text-blue-300 mb-6">{project.title}</h3>
                
                {project.screenshots.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.screenshots.map((screenshot, i) => (
                      <div key={i} className="group relative overflow-hidden rounded-xl bg-slate-900/50 border border-slate-600 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                        <img 
                          src={screenshot.url} 
                          alt={screenshot.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <div className="text-white">
                            <p className="font-semibold">{screenshot.title}</p>
                            <p className="text-sm text-gray-300">{screenshot.description}</p>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 bg-blue-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ZoomIn size={20} />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-slate-900/50 rounded-xl p-12 border-2 border-dashed border-slate-600 text-center">
                    <Camera size={64} className="mx-auto mb-4 text-slate-600" />
                    <p className="text-xl text-gray-400 mb-2">Captures d'écran à venir</p>
                    <p className="text-gray-500">Les images de ce projet seront ajoutées prochainement</p>
                  </div>
                )}
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-900/50 rounded-full text-sm text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Instructions pour ajouter des images */}
          {/* <div className="mt-12 bg-blue-900/20 border border-blue-700/50 rounded-xl p-6">
            <h4 className="text-xl font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Camera size={24} />
              Comment ajouter vos captures d'écran ?
            </h4>
            <div className="text-gray-300 space-y-2">
              <p>Pour afficher vos captures d'écran de projets, vous avez plusieurs options :</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Hébergez vos images sur un service gratuit comme <span className="text-blue-400">imgur.com</span> ou <span className="text-blue-400">imgbb.com</span></li>
                <li>Ajoutez les URLs des images dans le tableau <code className="bg-slate-800 px-2 py-1 rounded text-blue-400">screenshots</code> de chaque projet</li>
                <li>Format requis : <code className="bg-slate-800 px-2 py-1 rounded text-sm">{'{ url: "https://...", title: "Dashboard", description: "Vue principale" }'}</code></li>
              </ol>
            </div>
          </div>
        </div> */}
      

      {/* Experience Section */}
      <section id="expériences" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Expériences Professionnelles
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700">
                <div className="flex items-start justify-between mb-4">
                  <Briefcase className="text-blue-400" size={32} />
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-300 mb-2">{exp.title}</h3>
                <p className="text-lg text-gray-300 mb-4">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="formation" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Formation
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700">
                <div className="flex items-start justify-between mb-4">
                  <GraduationCap className="text-blue-400" size={32} />
                  <span className="text-sm text-gray-400">{edu.period}</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-300 mb-2">{edu.degree}</h3>
                <p className="text-lg text-gray-300 mb-2">{edu.school}</p>
                <p className="text-gray-400">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="compétences" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Compétences Techniques
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-slate-700">
                <h3 className="text-xl font-bold text-blue-300 mb-4 capitalize">
                  {category === 'languages' ? 'Langages' : 
                   category === 'web' ? 'Développement Web' :
                   category === 'mobile' ? 'Développement Mobile' :
                   category === 'databases' ? 'Bases de Données' :
                   category === 'tools' ? 'Outils' : 'Autres'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-900/30 rounded-full text-sm text-gray-300 border border-blue-700/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-slate-700">
            <h3 className="text-xl font-bold text-blue-300 mb-4">Langues</h3>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-900/30 rounded-full text-gray-300 border border-blue-700/50">Arabe</span>
              <span className="px-4 py-2 bg-blue-900/30 rounded-full text-gray-300 border border-blue-700/50">Français</span>
              <span className="px-4 py-2 bg-blue-900/30 rounded-full text-gray-300 border border-blue-700/50">Anglais</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Me Contacter
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-slate-700">
            <p className="text-xl text-gray-300 mb-8">
              Actuellement à la recherche d'un stage PFA. N'hésitez pas à me contacter !
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <a href="mailto:abdoelfadili695@gmail.com" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105 text-lg">
                <Mail size={24} />
                abdoelfadili695@gmail.com
              </a>
              <a href="tel:0608568400" className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105 text-lg">
                <Phone size={24} />
                0608568400
              </a>
            </div>
            <div className="flex justify-center gap-8 mt-8">
              <a href="https://github.com/abdoelfadili" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <Github size={32} />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/abdelkoddouss-elfadilii" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <Linkedin size={32} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 Abdelkoddouss El Fadili. Tous droits réservés.</p>
        </div>
      </footer>
    </div></div>
  );
}


