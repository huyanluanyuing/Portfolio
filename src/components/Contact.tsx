import { useSelector } from 'react-redux';
import { selectProfile } from '../store/portfolioSlice';
import { motion } from 'framer-motion';

const Contact = () => {
  const profile = useSelector(selectProfile);

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-20 bg-[var(--bg-primary)] text-center">
      <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className="max-w-3xl mx-auto"
      >
         <h3 className="text-sm text-[var(--text-secondary)] uppercase tracking-widest mb-6">03. What's Next?</h3>
         <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-8">Contact Me!</h2>
         <p className="text-xl text-[var(--text-secondary)] mb-12 leading-relaxed">
            Get in touch!
         </p>
         
         <a 
            href={profile.social.email}
            className="inline-block px-10 py-5 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium text-lg tracking-wide hover:bg-[var(--text-accent)] hover:text-white transition-colors duration-300 rounded-sm"
         >
            Say Hello
         </a>

         <div className="mt-20 flex justify-center gap-8 border-t border-[var(--bg-tertiary)] pt-10">
             <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors uppercase text-sm tracking-widest">Github</a>
             <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors uppercase text-sm tracking-widest">LinkedIn</a>
         </div>
      </motion.div>
    </section>
  );
};

export default Contact;
