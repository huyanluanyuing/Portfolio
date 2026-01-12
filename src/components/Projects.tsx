import { useSelector } from 'react-redux';
import { selectProjects } from '../store/portfolioSlice';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = useSelector(selectProjects);

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-20 bg-[var(--bg-primary)]">
       <div className="max-w-7xl mx-auto">
          <div className="mb-20">
             <h3 className="text-sm text-[var(--text-secondary)] uppercase tracking-widest mb-2">02. Selected Work</h3>
             <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)]">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-20">
             {projects.map((project, index) => (
               <ProjectCard key={project.id} project={project} index={index} />
             ))}
          </div>
       </div>
    </section>
  );
};

export default Projects;
