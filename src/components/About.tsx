import { useSelector } from 'react-redux';
import { selectProfile, selectSkills } from '../store/portfolioSlice';
import { motion } from 'framer-motion';

const About = () => {
  const profile = useSelector(selectProfile);
  const skills = useSelector(selectSkills);

  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-20 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h3 className="text-sm text-[var(--text-secondary)] uppercase tracking-widest mb-2">01. About Me</h3>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[var(--text-primary)]">Full-Stack Developer</h2>
          <div className="text-[var(--text-secondary)] leading-relaxed text-lg space-y-6">
            <p>
              I am currently pursuing a Master of Electrical and Computer Engineering at the University of Waterloo (Expected Aug 2026). 
            </p>
            <p>
              Previously, I worked as a Backend Software Engineer Intern at DXC Technology, where I refactored legacy monolithic systems into modern web-based architecture. 
            </p>
            <a 
              href={profile.social.email} 
              className="inline-block mt-4 border-b border-[var(--text-primary)] text-[var(--text-primary)] visited:text-[var(--text-primary)] hover:text-[var(--text-accent)] pb-1 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
           <h3 className="text-sm text-[var(--text-secondary)] uppercase tracking-widest mb-8">Role & Skills</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[var(--bg-secondary)] p-6 rounded-sm border border-[var(--bg-tertiary)] shadow-sm">
                <h4 className="text-[var(--text-primary)] font-bold mb-4">Skills</h4>
                <ul className="space-y-2">
                  {skills.slice(0, 6).map(skill => (
                    <li key={skill} className="text-[var(--text-secondary)] text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[var(--bg-secondary)] p-6 rounded-sm border border-[var(--bg-tertiary)] shadow-sm">
                <h4 className="text-[var(--text-primary)] font-bold mb-4">Tools</h4>
                <ul className="space-y-2">
                  {skills.slice(6).map(skill => (
                    <li key={skill} className="text-[var(--text-secondary)] text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
