import {
  Bot,
  Braces,
  Code2,
  Container,
  Database,
  FileCode2,
  GitBranch,
  Globe2,
  Layers3,
  MonitorCog,
  Palette,
  Server,
  Smartphone,
  TerminalSquare,
  type LucideIcon,
} from 'lucide-react';

export type Language = 'fr' | 'en';

export interface Project {
  title: string;
  period: string;
  type: string;
  tech: string[];
  description: string;
  imageName: string;
  problem: string;
  solution: string;
  impact: string;
  details: string;
  bullets: string[];
  screenshots: string[];
}

export interface PortfolioContent {
  profile: {
    name: string;
    role: string;
    focus: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  navItems: Array<{ id: string; label: string }>;
  hero: {
    badge: string;
    intro: string;
    contact: string;
    projects: string;
    systemLabel: string;
    systemTitle: string;
    ready: string;
    signals: Array<{ label: string; value: string }>;
  };
  highlights: string[];
  expertise: {
    badge: string;
    title: string;
    description: string;
    domains: Array<{ title: string; description: string; accent: string }>;
    dataNote: string;
    engineeringNote: string;
  };
  about: {
    badge: string;
    title: string;
    description: string;
    points: string[];
  };
  projectsSection: {
    badge: string;
    title: string;
    description: string;
    impact: string;
    detailsButton: string;
  };
  projects: Project[];
  experienceSection: {
    badge: string;
    title: string;
  };
  experiences: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
    tasks: string[];
  }>;
  educationSection: {
    badge: string;
    title: string;
  };
  education: Array<{
    degree: string;
    school: string;
    period: string;
    description: string;
  }>;
  skillsSection: {
    badge: string;
    title: string;
    description: string;
    labels: Record<string, string>;
  };
  skills: Record<string, string[]>;
  contact: {
    badge: string;
    title: string;
    description: string;
    email: string;
    phone: string;
    footer: string;
  };
  carousel: {
    close: string;
    previous: string;
    next: string;
    fallbackType: string;
    labels: {
      problem: string;
      solution: string;
      impact: string;
    };
    capture: string;
  };
}

const commonProfile = {
  name: 'Abdelkoddouss El Fadili',
  location: 'Maroc',
  email: 'abdoelfadili695@gmail.com',
  phone: '+212 608 568 400',
  github: 'https://github.com/abdoelfadili',
  linkedin: 'https://www.linkedin.com/in/abdelkoddouss-elfadili/',
};

const commonSkills = {
  languages: ['Java', 'Python', 'C', 'C++', 'C#', 'Dart', 'PL/SQL'],
  web: ['React.js', 'Laravel', 'Spring Boot', 'ASP.NET', 'HTML', 'CSS', 'JavaScript'],
  mobile: ['Flutter'],
  databases: ['MySQL', 'Oracle', 'SQLite'],
  tools: ['Git', 'Docker', 'VS Code', 'Postman', 'Figma'],
  ai: ['Python', 'Machine Learning', 'Deep Learning', 'Agentic AI', 'Evaluation', 'Automation'],
  methods: ['UML', 'Merise', 'Agile/SCRUM', 'API Architecture', 'Security', 'MLOps basics'],
};

const screenshots = (name: string) => [`/images/${name}.png`];

export const content: Record<Language, PortfolioContent> = {
  fr: {
    profile: {
      ...commonProfile,
      role: 'Élève ingénieur en génie informatique',
      focus: 'Full-stack, ML/DL et Agentic AI',
    },
    navItems: [
      { id: 'accueil', label: 'Accueil' },
      { id: 'expertise', label: 'Expertise' },
      { id: 'propos', label: 'Profil' },
      { id: 'projets', label: 'Projets' },
      { id: 'experiences', label: 'Expériences' },
      { id: 'education', label: 'Formation' },
      { id: 'competences', label: 'Compétences' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      badge: 'Disponible pour stage PFA',
      intro:
        "Je conçois des applications full-stack et mobiles avec une vraie lecture donnée: API robustes, interfaces propres, modèles ML/DL utiles et agents IA capables d'automatiser des workflows métier.",
      contact: 'Me contacter',
      projects: 'Voir les projets',
      systemLabel: 'Système portfolio',
      systemTitle: 'Ingénieur full-stack + IA',
      ready: 'Prêt',
      signals: [
        { label: 'ML/DL', value: 'Modèles' },
        { label: 'Agents', value: 'Outils' },
        { label: 'Produit', value: 'Livrer' },
      ],
    },
    highlights: [
      'Profil ingénieur capable de relier produit, données, API et interfaces',
      'Compétences solides en full-stack, mobile, Machine Learning et Deep Learning',
      'Focus IA agentique (Agentic AI): assistants, automatisation, workflows outillés et évaluation',
    ],
    expertise: {
      badge: 'Positionnement',
      title: 'Un profil ingénieur entre produit, données et IA agentique.',
      description:
        "La promesse est simple: construire des systèmes complets, comprendre les données, puis ajouter l'IA seulement quand elle rend le produit plus utile, mesurable et automatisable.",
      domains: [
        {
          title: 'Ingénierie full-stack',
          description:
            'React, Laravel, Spring Boot et bases de données conçus ensemble pour livrer des produits cohérents.',
          accent: 'text-sky-300',
        },
        {
          title: 'Machine Learning',
          description:
            'Préparation de données, entraînement, métriques, validation et intégration dans des parcours applicatifs.',
          accent: 'text-emerald-300',
        },
        {
          title: 'Deep Learning',
          description:
            'Compréhension des réseaux neuronaux, pipelines Python et usage raisonné des modèles pour résoudre un besoin.',
          accent: 'text-violet-300',
        },
        {
          title: 'IA agentique',
          description:
            'Agents outillés, workflows multi-étapes, orchestration, mémoire, évaluation et automatisation métier.',
          accent: 'text-amber-300',
        },
        {
          title: 'Backend & API',
          description:
            'Endpoints REST, authentification, rôles, séparation des responsabilités et environnements reproductibles.',
          accent: 'text-cyan-300',
        },
        {
          title: 'Mobile & données',
          description:
            'Flutter, stockage local, MySQL, Oracle, SQLite et schémas maintenables pour des apps du quotidien.',
          accent: 'text-rose-300',
        },
      ],
      dataNote: 'Approche data-first: modéliser proprement, mesurer, puis automatiser.',
      engineeringNote: 'Approche engineering-first: sécurité, lisibilité, maintenance et livraison.',
    },
    about: {
      badge: 'Profil',
      title: "Ce que j'apporte à une équipe.",
      description:
        "Étudiant en cycle d'ingénierie en génie informatique à l'ENIAD, je construis des applications full-stack et mobiles avec une attention particulière à la structure, la maintenabilité, la donnée et l'IA utile.",
      points: [
        'Je transforme un besoin en modèle de données, API, interface et parcours utilisable.',
        "Je relie ML, DL et Agentic AI à des cas d'usage concrets: recommandation, assistant, automatisation et évaluation.",
        "Je cherche un stage PFA où contribuer vite, apprendre avec une équipe exigeante et livrer du code propre.",
      ],
    },
    projectsSection: {
      badge: 'Études de cas',
      title: 'Projets sélectionnés avec lecture produit.',
      description:
        "Chaque carte met en avant le contexte, l'impact et les choix techniques, comme un mini dossier de projet.",
      impact: 'Impact',
      detailsButton: 'Voir le détail',
    },
    projects: [
      {
        title: "Plateforme de gestion d'école",
        period: '2022 - 2024',
        type: 'Full-stack',
        tech: ['Laravel', 'React', 'MySQL'],
        description:
          'Application web complète pour centraliser utilisateurs, cours, classes, notes et emplois du temps.',
        imageName: 'image_gestion_ecole',
        problem:
          "Les équipes scolaires ont besoin d'un outil unique pour gérer les informations pédagogiques sans multiplier les fichiers et les traitements manuels.",
        solution:
          "Conception d'une plateforme avec rôles distincts, tableaux de bord, gestion des classes, notes et emplois du temps dynamiques.",
        impact:
          'Workflow administratif plus clair, meilleure traçabilité des données et base extensible pour de nouveaux modules.',
        details:
          "Gestion complète avec authentification basée sur les rôles, modules pédagogiques et interface orientée usage quotidien.",
        bullets: ['Rôles admin, enseignants et élèves', 'CRUD structurés et base MySQL', 'Interface React modulaire'],
        screenshots: screenshots('image_gestion_ecole'),
      },
      {
        title: 'API de plateforme de bénévoles',
        period: '2023 - 2024',
        type: 'Backend',
        tech: ['Laravel', 'Docker', 'GitHub', 'MySQL'],
        description:
          "API REST pour gérer missions, bénévoles, organisations et workflows d'une association.",
        imageName: 'image_plateforme_benevoles',
        problem:
          'Une association doit coordonner plusieurs missions et profils avec des données fiables et réutilisables.',
        solution:
          "Développement d'une API REST structurée avec authentification, endpoints métier et environnement Docker.",
        impact:
          "Backend prêt pour une application web ou mobile, avec une architecture plus maintenable pour l'équipe produit.",
        details:
          'API REST robuste pour missions, bénévoles et organisations, avec déploiement containerisé.',
        bullets: ['Architecture API REST', 'Environnement Docker', 'Modèle de données MySQL'],
        screenshots: screenshots('image_plateforme_benevoles'),
      },
      {
        title: 'Système de gestion de bibliothèque',
        period: '2023 - 2024',
        type: 'Backend',
        tech: ['Laravel', 'Docker', 'GitHub'],
        description:
          "Plateforme de gestion pour catalogue, utilisateurs, prêts et retours d'une bibliothèque scolaire.",
        imageName: 'image_gestion_bibliotheque',
        problem:
          'Les prêts et retours deviennent difficiles à suivre quand les catalogues et utilisateurs sont dispersés.',
        solution:
          "Création d'un backend Laravel structuré autour du catalogue, des emprunts et du suivi des utilisateurs.",
        impact:
          'Suivi plus fiable des livres, réduction des erreurs manuelles et architecture prête à connecter une interface moderne.',
        details:
          'Gestion de catalogue, prêts, retours et utilisateurs avec une base backend claire et extensible.',
        bullets: ['Catalogue centralisé', 'Gestion prêts et retours', 'Docker pour exécution reproductible'],
        screenshots: screenshots('image_gestion_bibliotheque'),
      },
      {
        title: 'Application Java de chiffrement de fichiers',
        period: '2022 - 2024',
        type: 'Sécurité',
        tech: ['Java', 'RSA'],
        description:
          "Application desktop JavaFX pour chiffrer et déchiffrer des fichiers avec l'algorithme RSA.",
        imageName: 'image_chiffrement_fichiers',
        problem:
          'Les utilisateurs ont besoin de protéger des fichiers locaux sans manipuler directement des commandes cryptographiques.',
        solution:
          'Interface JavaFX simple avec génération de clés, chiffrement, déchiffrement et gestion des fichiers.',
        impact:
          'Démonstration concrète de sécurité applicative, UX desktop et implémentation cryptographique.',
        details:
          'Interface JavaFX pour chiffrement et déchiffrement sécurisé avec RSA.',
        bullets: ['JavaFX', 'RSA', 'Gestion de fichiers locaux'],
        screenshots: screenshots('image_chiffrement_fichiers'),
      },
      {
        title: 'Assistant mobile pour organisation des repas',
        period: '2023 - 2024',
        type: 'Mobile + IA',
        tech: ['Flutter', 'SQLite', 'IA'],
        description:
          'Application mobile avec stockage local et suggestions intelligentes de plans de repas hebdomadaires.',
        imageName: 'image_organisation_repas',
        problem:
          'Planifier les repas prend du temps et devient répétitif quand il faut tenir compte des préférences.',
        solution:
          'Application Flutter qui stocke les préférences localement et propose des plans hebdomadaires personnalisés.',
        impact:
          "Projet idéal pour montrer l'IA appliquée à un besoin quotidien, avec données locales et logique produit.",
        details:
          'Application mobile avec recommandations de repas personnalisées, préférences utilisateur et stockage SQLite.',
        bullets: ['Flutter', 'SQLite local', 'Suggestions IA personnalisées'],
        screenshots: screenshots('image_organisation_repas'),
      },
    ],
    experienceSection: {
      badge: 'Terrain',
      title: 'Expériences professionnelles.',
    },
    experiences: [
      {
        title: "Stage de fin d'étude - Développement mobile",
        company: 'SPS Technologie',
        period: 'Avril - Mai 2023',
        description:
          "Développement d'une application mobile Flutter connectée à une API Laravel pour la gestion des commandes et livraisons.",
        tasks: [
          "Intégration d'API Laravel avec Flutter",
          'Gestion des commandes et livraisons en temps réel',
          'Implémentation de filtres dynamiques et parcours mobiles',
        ],
      },
      {
        title: "Stage d'observation - Maintenance et web",
        company: 'Abattoirs de Casablanca',
        period: 'Juillet 2023',
        description: 'Maintenance informatique, support utilisateur et création web statique.',
        tasks: [
          'Maintenance et installation de postes informatiques',
          'Configuration réseau et diagnostic matériel',
          "Création d'un site web statique",
        ],
      },
    ],
    educationSection: {
      badge: 'Formation',
      title: 'Parcours académique.',
    },
    education: [
      {
        degree: "Cycle d'ingénierie en génie informatique",
        school: 'ENIAD - Université Mohammed Premier',
        period: '2024 - En cours',
        description:
          'Formation avancée en développement logiciel, architecture, systèmes, bases de données et technologies émergentes.',
      },
      {
        degree: 'DUT en génie informatique',
        school: 'EST Guelmim',
        period: '2022 - 2024',
        description: 'Bases solides en programmation, conception, bases de données et projets applicatifs.',
      },
    ],
    skillsSection: {
      badge: 'Stack technique',
      title: 'Compétences techniques.',
      description:
        'Une lecture rapide par domaine, pensée pour montrer la profondeur technique sans noyer le recruteur.',
      labels: {
        languages: 'Langages',
        web: 'Web',
        mobile: 'Mobile',
        databases: 'Bases de données',
        tools: 'Outils',
        ai: 'ML, DL & IA agentique',
        methods: 'Méthodes',
      },
    },
    skills: {
      ...commonSkills,
      ai: ['Python', 'Machine Learning', 'Deep Learning', 'Agentic AI', 'Évaluation', 'Automatisation'],
      methods: ['UML', 'Merise', 'Agile/SCRUM', 'Architecture API', 'Sécurité', 'MLOps basics'],
    },
    contact: {
      badge: 'Contact',
      title: 'Parlons stage, projet ou collaboration.',
      description:
        'Disponible pour un stage PFA et ouvert aux projets full-stack, mobile, ML/DL et Agentic AI.',
      email: 'Email',
      phone: 'Téléphone',
      footer: 'Portfolio',
    },
    carousel: {
      close: 'Fermer',
      previous: 'Capture précédente',
      next: 'Capture suivante',
      fallbackType: 'Projet',
      labels: {
        problem: 'Problème',
        solution: 'Solution',
        impact: 'Impact',
      },
      capture: 'capture',
    },
  },
  en: {
    profile: {
      ...commonProfile,
      role: 'Computer engineering student',
      focus: 'Full-stack, ML/DL and Agentic AI',
      location: 'Morocco',
    },
    navItems: [
      { id: 'accueil', label: 'Home' },
      { id: 'expertise', label: 'Expertise' },
      { id: 'propos', label: 'Profile' },
      { id: 'projets', label: 'Projects' },
      { id: 'experiences', label: 'Experience' },
      { id: 'education', label: 'Education' },
      { id: 'competences', label: 'Skills' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      badge: 'Available for PFA internship',
      intro:
        'I build full-stack and mobile applications with a data-aware mindset: robust APIs, clean interfaces, useful ML/DL models and AI agents that automate business workflows.',
      contact: 'Contact me',
      projects: 'View projects',
      systemLabel: 'Portfolio system',
      systemTitle: 'Full-stack + AI engineer',
      ready: 'Ready',
      signals: [
        { label: 'ML/DL', value: 'Models' },
        { label: 'Agents', value: 'Tools' },
        { label: 'Product', value: 'Ship' },
      ],
    },
    highlights: [
      'Engineering profile connecting product, data, APIs and user interfaces',
      'Strong full-stack, mobile, Machine Learning and Deep Learning foundations',
      'Agentic AI focus: assistants, automation, tool-using workflows and evaluation',
    ],
    expertise: {
      badge: 'Positioning',
      title: 'An engineering profile across product, data and agentic AI.',
      description:
        'The promise is simple: build complete systems, understand the data, then add AI only when it makes the product more useful, measurable and automatable.',
      domains: [
        {
          title: 'Full-stack engineering',
          description:
            'React, Laravel, Spring Boot and databases designed together to ship coherent products.',
          accent: 'text-sky-300',
        },
        {
          title: 'Machine Learning',
          description:
            'Data preparation, training, metrics, validation and integration into application workflows.',
          accent: 'text-emerald-300',
        },
        {
          title: 'Deep Learning',
          description:
            'Neural network fundamentals, Python pipelines and practical model usage for real needs.',
          accent: 'text-violet-300',
        },
        {
          title: 'Agentic AI',
          description:
            'Tool-using agents, multi-step workflows, orchestration, memory, evaluation and business automation.',
          accent: 'text-amber-300',
        },
        {
          title: 'Backend & APIs',
          description:
            'REST endpoints, authentication, roles, separation of concerns and reproducible environments.',
          accent: 'text-cyan-300',
        },
        {
          title: 'Mobile & data',
          description:
            'Flutter, local storage, MySQL, Oracle, SQLite and maintainable schemas for everyday apps.',
          accent: 'text-rose-300',
        },
      ],
      dataNote: 'Data-first: model cleanly, measure, then automate.',
      engineeringNote: 'Engineering-first: security, readability, maintenance and delivery.',
    },
    about: {
      badge: 'Profile',
      title: 'What I bring to a team.',
      description:
        'As a computer engineering student at ENIAD, I build full-stack and mobile applications with strong attention to structure, maintainability, data and useful AI.',
      points: [
        'I turn a need into a data model, API, interface and usable workflow.',
        'I connect ML, DL and Agentic AI to concrete use cases: recommendation, assistant, automation and evaluation.',
        'I am looking for a PFA internship where I can contribute quickly, learn with a demanding team and ship clean code.',
      ],
    },
    projectsSection: {
      badge: 'Case studies',
      title: 'Selected projects with product thinking.',
      description:
        'Each card highlights context, impact and technical choices like a compact project case study.',
      impact: 'Impact',
      detailsButton: 'View details',
    },
    projects: [
      {
        title: 'School management platform',
        period: '2022 - 2024',
        type: 'Full-stack',
        tech: ['Laravel', 'React', 'MySQL'],
        description:
          'Complete web application to centralize users, courses, classes, grades and schedules.',
        imageName: 'image_gestion_ecole',
        problem:
          'School teams need one tool to manage educational data without multiplying files and manual processes.',
        solution:
          'Designed a platform with distinct roles, dashboards, class management, grades and dynamic schedules.',
        impact:
          'Clearer administrative workflow, better data traceability and an extensible base for new modules.',
        details:
          'Complete management system with role-based authentication, educational modules and a daily-use oriented interface.',
        bullets: ['Admin, teacher and student roles', 'Structured CRUD and MySQL database', 'Modular React interface'],
        screenshots: screenshots('image_gestion_ecole'),
      },
      {
        title: 'Volunteer platform API',
        period: '2023 - 2024',
        type: 'Backend',
        tech: ['Laravel', 'Docker', 'GitHub', 'MySQL'],
        description:
          'REST API to manage missions, volunteers, organizations and association workflows.',
        imageName: 'image_plateforme_benevoles',
        problem:
          'An association needs to coordinate multiple missions and profiles with reliable reusable data.',
        solution:
          'Built a structured REST API with authentication, business endpoints and a Docker environment.',
        impact:
          'Backend ready for web or mobile clients, with a more maintainable architecture for the product team.',
        details:
          'Robust REST API for missions, volunteers and organizations, with containerized deployment.',
        bullets: ['REST API architecture', 'Docker environment', 'MySQL data model'],
        screenshots: screenshots('image_plateforme_benevoles'),
      },
      {
        title: 'Library management system',
        period: '2023 - 2024',
        type: 'Backend',
        tech: ['Laravel', 'Docker', 'GitHub'],
        description:
          'Management platform for catalog, users, loans and returns in a school library.',
        imageName: 'image_gestion_bibliotheque',
        problem:
          'Loans and returns become hard to track when catalogs and users are scattered.',
        solution:
          'Created a Laravel backend structured around catalog, borrowing and user tracking.',
        impact:
          'More reliable book tracking, fewer manual errors and an architecture ready for a modern interface.',
        details:
          'Catalog, loans, returns and user management with a clear and extensible backend foundation.',
        bullets: ['Centralized catalog', 'Loan and return tracking', 'Docker for reproducible execution'],
        screenshots: screenshots('image_gestion_bibliotheque'),
      },
      {
        title: 'Java file encryption app',
        period: '2022 - 2024',
        type: 'Security',
        tech: ['Java', 'RSA'],
        description:
          'JavaFX desktop application to encrypt and decrypt files using the RSA algorithm.',
        imageName: 'image_chiffrement_fichiers',
        problem:
          'Users need to protect local files without directly handling cryptographic commands.',
        solution:
          'Simple JavaFX interface with key generation, encryption, decryption and file management.',
        impact:
          'Concrete demonstration of application security, desktop UX and cryptographic implementation.',
        details:
          'JavaFX interface for secure encryption and decryption with RSA.',
        bullets: ['JavaFX', 'RSA', 'Local file management'],
        screenshots: screenshots('image_chiffrement_fichiers'),
      },
      {
        title: 'Mobile meal planning assistant',
        period: '2023 - 2024',
        type: 'Mobile + AI',
        tech: ['Flutter', 'SQLite', 'AI'],
        description:
          'Mobile app with local storage and intelligent weekly meal plan suggestions.',
        imageName: 'image_organisation_repas',
        problem:
          'Meal planning takes time and becomes repetitive when preferences must be considered.',
        solution:
          'Flutter application storing preferences locally and suggesting personalized weekly plans.',
        impact:
          'A strong project to show applied AI for an everyday need, with local data and product logic.',
        details:
          'Mobile application with personalized meal recommendations, user preferences and SQLite storage.',
        bullets: ['Flutter', 'Local SQLite', 'Personalized AI suggestions'],
        screenshots: screenshots('image_organisation_repas'),
      },
    ],
    experienceSection: {
      badge: 'Field work',
      title: 'Professional experience.',
    },
    experiences: [
      {
        title: 'Final-year internship - Mobile development',
        company: 'SPS Technologie',
        period: 'April - May 2023',
        description:
          'Developed a Flutter mobile application connected to a Laravel API for order and delivery management.',
        tasks: [
          'Laravel API integration with Flutter',
          'Real-time order and delivery management',
          'Dynamic filters and mobile workflows',
        ],
      },
      {
        title: 'Observation internship - Maintenance and web',
        company: 'Abattoirs de Casablanca',
        period: 'July 2023',
        description: 'IT maintenance, user support and static website creation.',
        tasks: [
          'Computer maintenance and workstation setup',
          'Network configuration and hardware diagnostics',
          'Static website creation',
        ],
      },
    ],
    educationSection: {
      badge: 'Education',
      title: 'Academic path.',
    },
    education: [
      {
        degree: 'Engineering cycle in computer science',
        school: 'ENIAD - Mohammed Premier University',
        period: '2024 - Present',
        description:
          'Advanced training in software development, architecture, systems, databases and emerging technologies.',
      },
      {
        degree: 'DUT in computer science',
        school: 'EST Guelmim',
        period: '2022 - 2024',
        description: 'Strong foundations in programming, design, databases and applied projects.',
      },
    ],
    skillsSection: {
      badge: 'Stack',
      title: 'Technical skills.',
      description:
        'A fast domain-by-domain read, designed to show depth without overwhelming recruiters.',
      labels: {
        languages: 'Languages',
        web: 'Web',
        mobile: 'Mobile',
        databases: 'Databases',
        tools: 'Tools',
        ai: 'ML, DL & Agentic AI',
        methods: 'Methods',
      },
    },
    skills: commonSkills,
    contact: {
      badge: 'Contact',
      title: "Let's talk internship, project or collaboration.",
      description:
        'Available for a PFA internship and open to full-stack, mobile, ML/DL and Agentic AI projects.',
      email: 'Email',
      phone: 'Phone',
      footer: 'Portfolio',
    },
    carousel: {
      close: 'Close',
      previous: 'Previous screenshot',
      next: 'Next screenshot',
      fallbackType: 'Project',
      labels: {
        problem: 'Problem',
        solution: 'Solution',
        impact: 'Impact',
      },
      capture: 'screenshot',
    },
  },
};

export const techIcons: Record<string, LucideIcon> = {
  Laravel: Server,
  React: Layers3,
  'React.js': Layers3,
  MySQL: Database,
  Java: FileCode2,
  Python: Bot,
  'C++': Code2,
  'C#': Code2,
  Dart: Smartphone,
  Flutter: Smartphone,
  HTML: Globe2,
  CSS: Palette,
  JavaScript: Braces,
  Git: GitBranch,
  GitHub: GitBranch,
  'VS Code': MonitorCog,
  Postman: TerminalSquare,
  Figma: Palette,
  Docker: Container,
  Oracle: Database,
  SQLite: Database,
  IA: Bot,
  AI: Bot,
  'Machine Learning': Bot,
  'Deep Learning': Bot,
  'Agentic AI': Bot,
  Evaluation: Bot,
  Évaluation: Bot,
  Automation: MonitorCog,
  Automatisation: MonitorCog,
  Security: MonitorCog,
  Sécurité: MonitorCog,
  'API Architecture': Server,
  'Architecture API': Server,
  'MLOps basics': MonitorCog,
  RSA: FileCode2,
  C: Code2,
  'PL/SQL': Database,
  'Spring Boot': Server,
  'ASP.NET': Server,
};
