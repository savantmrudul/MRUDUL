// ─── Personal Info ───────────────────────────────────────────────────────────
export const personal = {
  name: 'Mrudul Milind Savant',
  tagline: 'MCA Graduate | Cloud DevOps & Full Stack Developer',
  heroSubline: 'Available for opportunities — let\'s connect',
  email: 'mrudulsavant0000@gmail.com',
  phone: '6361390008',
  location: 'Londa, Belgaum, Karnataka 591301',
  linkedin: 'https://www.linkedin.com/in/mrudul-savant-713106400',
  github: null, // to be added later
  resumePdf: '/assets/Mrudul_Milind_Savant_Resume.pdf',
  photo: '/assets/mrudul-profile.jpg',
  languages: ['English', 'Hindi', 'Marathi', 'Kannada'],
};

// ─── About / Summary ─────────────────────────────────────────────────────────
export const summary =
  'MCA graduate specializing in Data Science & Analytics with hands-on experience ' +
  'in Cloud DevOps, Full Stack Development, and MERN Stack applications. Proficient ' +
  'in AWS, Docker, Kubernetes, Linux, Git, JavaScript, React.js, Node.js, MongoDB, ' +
  'SQL, and Python. Built end-to-end web applications and practiced CI/CD pipelines, ' +
  'containerization, cloud deployment, and REST API development. Passionate about ' +
  'solving real-world problems through scalable software and cloud technologies.';

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: 'Programming',
    icon: '</>',
    items: ['Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: '◻',
    items: ['HTML5', 'CSS3', 'React.js', 'Bootstrap'],
  },
  {
    category: 'Backend',
    icon: '⚙',
    items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁',
    items: [
      'AWS EC2', 'AWS S3', 'IAM', 'VPC',
      'Docker', 'Kubernetes', 'Linux',
      'Git', 'GitHub', 'CI/CD', 'Shell Scripting',
    ],
  },
];

// ─── Experience ──────────────────────────────────────────────────────────────
export const experience = [
  {
    role: 'Cloud DevOps Trainee',
    type: 'Self Learning',
    period: '2025 – Present',
    bullets: [
      'Configured Linux systems and automated administrative tasks using Bash Shell.',
      'Worked with AWS EC2, S3, IAM, and VPC.',
      'Built Docker images and deployed containerized applications.',
      'Managed Kubernetes Pods and Deployments.',
      'Practiced Git workflows including branching, merging, and version control.',
      'Implemented CI/CD pipelines using GitHub and automation tools.',
      'Deployed cloud-native applications through hands-on DevOps labs.',
      'Learned monitoring, troubleshooting, networking, and cloud security best practices.',
    ],
    technologies: [
      'Linux', 'AWS', 'Docker', 'Kubernetes', 'Git',
      'GitHub', 'CI/CD', 'Shell Scripting', 'Networking',
      'Cloud Computing', 'DevOps',
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: 'Homzy',
    subtitle: 'Online Real-Estate System',
    context: 'BCA Final Project',
    emoji: '🏠',
    description:
      'A web-based platform for buying, selling, and renting properties. ' +
      'Features interactive listings, search functionality, and user interaction capabilities ' +
      'with a focus on clean frontend design and reliable backend data handling.',
    features: [
      'Property listings with detailed views',
      'Search and filter functionality',
      'Basic user interactions and contact features',
      'Interactive UI built for usability and navigation',
      'Frontend design with backend data handling',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'MERN Stack'],
    github: null, // to be added later
    live: null,
  },
  {
    title: 'Pet Horizon',
    subtitle: 'Pet Care & Adoption Platform',
    context: 'MCA Final Project',
    emoji: '🐾',
    description:
      'A full-stack web application for pet adoption and pet-care services. ' +
      'Provides a responsive, user-friendly interface for browsing adoptable pets, ' +
      'accessing pet care resources, and connecting with service providers.',
    features: [
      'User authentication (register / login)',
      'Pet listings with search functionality',
      'Responsive UI built with React.js',
      'Backend REST APIs for data management',
      'MongoDB database integration',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
    github: null, // to be added later
    live: null,
  },
];

// ─── Education ───────────────────────────────────────────────────────────────
export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Visvesvaraya Technological University',
    location: 'Belgaum',
    grade: '7.36 CGPA',
    icon: '🎓',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'DMS Mandal College of Computer Applications',
    location: 'Belagavi, Belgaum',
    grade: '6.9 CGPA',
    icon: '🎓',
  },
  {
    degree: 'Pre-University College (Commerce)',
    institution: "Maratha Mandal's PU College",
    location: 'Khanapur',
    grade: '58%',
    icon: '📚',
  },
  {
    degree: 'SSLC',
    institution: 'Indira Vidyalaya English Medium School',
    location: 'Londa',
    grade: '53%',
    icon: '📚',
  },
];

// ─── Certifications ──────────────────────────────────────────────────────────
export const certifications = [
  {
    name: 'Python Fundamentals',
    issuer: 'Computronix, Belgaum',
    icon: '🏅',
  },
  {
    name: 'Cloud DevOps using AI',
    issuer: 'Softmusk Pvt. Ltd.',
    icon: '🏅',
  },
];
