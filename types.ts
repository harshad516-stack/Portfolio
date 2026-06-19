
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'Language' | 'Framework' | 'Tool' | 'Cloud';
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  skills: string[];
}
