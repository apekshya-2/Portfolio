// src/constants.js

// Skills Section Logos
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import pythonLogo from './assets/tech_logo/python.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import cLogo from './assets/tech_logo/c.png';
import python from './assets/company_logo/python.jpeg';
import offerlatter from './assets/company_logo/offerlatter.jpg';
import digitalmarketing from './assets/company_logo/digitalmarketing.png';

// Work / Projects Logos
import eshop from './assets/work_logo/eshop.png';
import aksunova from './assets/work_logo/aksunova.png';
import ovs from './assets/work_logo/ovs.png';
import todolist from './assets/work_logo/todolist.png';
import calculator from './assets/work_logo/calculator.png';
import portfolio from './assets/work_logo/portfolio.png';
import blog from './assets/work_logo/blog.png';


// Education Logos
import nepalmega from './assets/education_logo/nepalmega.png';
import baluddhar from './assets/education_logo/baluddhar.png';
import janata from './assets/education_logo/janata.png';

// Skills Data
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

// Experiences Data
export const experiences = [
  {
    id: 0,
    role: "Content Writing",
    date: "Feb 2024 - Sep 2024",
    desc: "Created engaging and SEO-friendly content for blogs, articles, and website pages, enhancing online presence.",
    skills: ["Content Writing", "SEO", "Research", "WordPress"],
    img: offerlatter,
    company: "Softbenz Info Tech",
  },
  {
    id: 1,
    role: "Google Digital Marketing",
    date: "2023",
    desc: "Learned and implemented digital marketing strategies including Google Ads, SEO, and social media campaigns.",
    skills: ["Google Ads", "SEO", "Social Media Marketing"],
    img: digitalmarketing,
    company: "Google Digital Marketing",
  },
  {
    id: 2,
    role: "Python Developer",
    date: "2023 - Present",
    desc: "Developed Python-based projects, including automation scripts, data processing, and AI/ML experiments.",
    skills: ["Python", "Data Analysis", "Automation", "APIs"],
    img: python,
    company: "CODE_IT",
  },
];

// Education Data
export const education = [
  {
    id: 0,
    img: nepalmega,
    school: "Nepal Mega College",
    date: "2022 - Present",
    grade: "",
    desc: "Pursuing Bachelor's degree in Computer Science at Nepal Mega College. Learning programming, database management, web development, and software engineering concepts.",
    degree: "Bachelor of Computer Application",
  },
  {
    id: 1,
    img: baluddhar,
    school: "+2 Baluddhar",
    date: "2020 - 2022",
    grade: "Pass",
    desc: "Completed Higher Secondary (+2) education focusing on Law including civil law, Criminal law, Drafting, and Constitution.",
    degree: "Higher Secondary (+2) - Law/NEB",
  },
  {
    id: 2,
    img: janata,
    school: "Janata Secondary School",
    date: "2018 - 2020",
    grade: "Pass",
    desc: "Completed School Leaving Certificate (SLC/10th) with Computer subjects.",
    degree: "School Leaving Certificate (SLC/10th) -  with Computer",
  },
];

// Projects Data
export const projects = [
  {
    id: 0,
    title: "E-Shop",
    role: "Developer",
    date: "2023 - Present",
    img: eshop,
    github: "https://github.com/apekshya-2/E-Shop",
    webapp: "https://e-shop-vysk.vercel.app/",
    description: "Built an e-commerce web application using React, Tailwind CSS, Django, and MySQL. Implemented cart, PayPal checkout, and invoice system.",
    skills: ["React JS", "Tailwind CSS", "Django", "MySQL", "JavaScript"]
  },
  {
    id: 1,
    title: "Online Voting System",
    role: "Developer",
    date: "2023 - Present",
    img: ovs,
    github: "https://github.com/apekshya-2/online_voting_system",
    webapp: "",
    description: "Developed a secure voting platform using PHP, MySQL, and JavaScript. Features include voter registration, authentication, and admin management.",
    skills: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"]
  },
  {
    id: 2,
    title: "AksuNova",
    role: "Developer",
    date: "2023 - Present",
    img: aksunova,
    github: "https://github.com/apekshya-2/AksuNova",
    webapp: "",
    description: "Created a web application that summarizes uploaded images and PDFs, and allows user queries using the Gemini API.",
    skills: ["React JS", "JavaScript", "Tailwind CSS", "API Integration"]
  },
  {
    id: 3,
    title: "To-Do List App",
    role: "Developer",
    date: "2023",
    img: todolist,
    github: "https://github.com/apekshya-2/To-Do-Lists",
    webapp: "",
    description: "Built a task management application using React and JavaScript allowing users to add, edit, and delete tasks.",
    skills: ["React JS", "JavaScript", "CSS"]
  },
  {
    id: 4,
    title: "Calculator",
    role: "Developer",
    date: "2023",
    img: calculator,
    github: "https://github.com/apekshya-2/Calculator",
    webapp: "",
    description: "Developed a fully functional calculator using HTML, CSS, and JavaScript with responsive design and interactive UI.",
    skills: ["JavaScript", "HTML", "CSS"]
  },
  {
    id: 5,
    title: "Portfolio Website",
    role: "Developer",
    date: "2023",
    img: portfolio,
    github: "https://github.com/apekshya-2/portfolio-website",
    webapp: "https://apekshadhungana.com.np/",
    description: "Created a personal portfolio website to showcase projects, blogs, and coding skills using HTML, CSS, and JavaScript.",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
  id: 6,
  title: "Blogger",
  role: "Content Creator",
  date: "2023",
  img: blog, // make sure this is imported
  blog: "https://www.blogger.com/profile/02633851685872423705",
  webapp:"https://www.blogger.com/profile/02633851685872423705",
  description: "Created a blog to showcase poems, jokes, works, and content skills.",
  skills: ["HTML", "CSS", "WordPress" ,"Canva","SEO"], // example tools/skills
},


];
