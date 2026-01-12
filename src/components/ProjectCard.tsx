import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink} from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative group"
    >
      <div className="relative overflow-hidden aspect-video bg-[var(--bg-secondary)] mb-6 border border-[var(--bg-tertiary)] rounded-md shadow-sm">
         <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 filter sepia-[0.3] hover:sepia-0 group-hover:sepia-0"
         />
         {/* Removed dark overlay for light theme, added subtle warm gradient instead if needed, keeping it clean for now */}
         <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
         
         <div className="absolute bottom-4 right-4 flex gap-2">
            <a href={project.link} className="p-2 bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-full hover:bg-[var(--text-accent)] hover:text-white shadow-md transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-300">
               <ExternalLink size={18} />
            </a>
            {/* Assuming github link is same for demo or added in types later */}
             {/* <a href="#" className="p-2 bg-black text-white rounded-full hover:bg-gray-900 border border-white/20 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
               <Github size={18} />
            </a> */}
         </div>
      </div>
      
      <h3 className="text-2xl text-[var(--text-primary)] font-medium mb-2 group-hover:text-[var(--text-accent)] transition-colors">{project.title}</h3>
      <p className="text-[var(--text-secondary)] mb-4 text-sm leading-relaxed max-w-md">{project.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {project.technologies.map(tech => (
          <span key={tech} className="text-xs uppercase tracking-wider text-[var(--text-secondary)] border border-[var(--bg-tertiary)] bg-[var(--bg-secondary)] px-2 py-1 rounded-sm">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
