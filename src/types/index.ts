export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export interface Profile {
  name: string;
  title: string;
  description: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface PortfolioData {
  profile: Profile;
  skills: string[];
  projects: Project[];
}
