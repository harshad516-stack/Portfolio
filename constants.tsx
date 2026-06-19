
import React from 'react';
import { Project, Skill, Experience } from './types';
import { 
  Code2, 
  Layers, 
  Wrench, 
  Cloud, 
  Database,
  Github,
  Linkedin,
  Mail,
  Phone
} from 'lucide-react';

export const SOCIAL_LINKS = [
  { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:hsalunke516@gmail.com' },
  { icon: <Phone className="w-5 h-5" />, label: 'Mobile', href: 'tel:+918108252577' },
  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshad-salunke-981b64350?' },
  { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com/harshad516-stack' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Departmental Portal',
    description: 'A comprehensive management system for college departments handling student data, faculty coordination, and event tracking.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/harshad516-stack/IT-Department-Management-System',
    image: '/images/1.jpeg'
  },
  {
    id: '2',
    title: 'Real-Time Chat App',
    description: 'High-performance messaging platform with instant delivery, image sharing via Cloudinary, and secure JWT authentication.',
    tech: ['Socket.IO', 'React', 'JWT', 'Cloudinary'],
    github: '#',
    image: '/images/2.jpeg'
  },
  {
    id: '3',
    title: 'Study Planner',
    description: 'Smart scheduling assistant with an analytics dashboard to track learning progress and optimize study hours.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Chart.js'],
    github: '#',
    image: '/images/3.jpeg'
  },
  {
    id: '4',
    title: 'Site Master',
    description: 'Construction field management tool designed for mobile-first usage to track site progress and resource allocation.',
    tech: ['React', 'PWA', 'Firebase', 'Material UI'],
    github: '#',
    image: '/images/4.jpeg'
  }
  ,
   {
    id: '5',
    title: 'Speech Recognition System',
    description: 'A Python-based desktop application that converts speech to text and text to speech using voice recognition technology.',
    tech: ['Python', 'Voice Recognition', 'GUI'],
    github: 'https://github.com/harshad516-stack/Speech-Recognition-System',
    image: '/images/5.jpeg'
  }
];

export const SKILLS: Skill[] = [
  { name: 'JavaScript', level: 90, icon: 'Code2', category: 'Language' },
  { name: 'C++', level: 85, icon: 'Code2', category: 'Language' },
  { name: 'Python', level: 80, icon: 'Code2', category: 'Language' },
  { name: 'React', level: 88, icon: 'Layers', category: 'Framework' },
  { name: 'Node.js', level: 82, icon: 'Layers', category: 'Framework' },
  { name: 'Express.js', level: 80, icon: 'Layers', category: 'Framework' },
  { name: 'Git/GitHub', level: 90, icon: 'Wrench', category: 'Tool' },
  { name: 'Postman', level: 85, icon: 'Wrench', category: 'Tool' },
  { name: 'MySQL', level: 80, icon: 'Database', category: 'Cloud' },
  { name: 'MongoDB', level: 82, icon: 'Database', category: 'Cloud' },
  { name: 'AWS', level: 70, icon: 'Cloud', category: 'Cloud' }, 
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Ignitech',
    role: 'Python & NLP Intern',
    duration: 'Jun 2023 - Aug 2023',
    description: [
      'Developed email automation scripts using Python to streamline client communication.',
      'Implemented NLP techniques for basic sentiment analysis of incoming customer feedback.',
      'Integrated third-party APIs for data synchronization across platforms.'
    ],
    skills: ['Python', 'NLP', 'API Integration', 'Automation']
  }
];
