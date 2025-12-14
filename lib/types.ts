// Type definitions for portfolio data

export interface Social {
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
}

export interface Personal {
  name: string;
  username: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  avatar: string;
  social: Social;
}

export interface Skills {
  [category: string]: string[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  responsibilities: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface Achievement {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface PortfolioData {
  personal: Personal;
  skills: Skills;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  achievements: Achievement[];
}
