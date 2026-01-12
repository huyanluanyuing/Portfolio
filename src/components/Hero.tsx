import { useSelector } from 'react-redux';
import { selectProfile } from '../store/portfolioSlice';
import { motion } from 'framer-motion';
// import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const profile = useSelector(selectProfile);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 pt-20 relative overflow-hidden bg-[var(--bg-primary)] text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl z-10 flex flex-col items-center"
      >
        <h2 className="text-[var(--text-accent)] text-lg md:text-xl mb-6 tracking-[0.2em] uppercase font-medium">
          Introduction
        </h2>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 text-[var(--text-primary)] leading-tight tracking-tight">
          Hello, I'm <span className="text-[var(--text-secondary)] italic">{profile.name}</span>
        </h1>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-[var(--text-primary)] mb-10 opacity-90">
          {profile.title}
        </h2>

        <p className="text-lg md:text-2xl text-[var(--text-secondary)] max-w-3xl leading-relaxed mx-auto">
          {profile.description}
        </p>

        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.5, duration: 0.5 }}
           className="mt-12 flex gap-4"
        >
           {/* <button 
             onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-8 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded-full hover:bg-[var(--text-accent)] hover:text-white transition-all duration-300"
           >
             View Work
           </button>
           <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-8 py-3 border border-[var(--text-secondary)] text-[var(--text-primary)] font-medium rounded-full hover:border-[var(--text-primary)] transition-all duration-300"
           >
             Contact Me
           </button> */}
        </motion.div>
      </motion.div>

      {/* Balanced Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] opacity-[0.03] pointer-events-none z-0">
         <div className="w-full h-full rounded-full border-[2px] border-[var(--text-primary)] animate-[spin_60s_linear_infinite]" />
         <div className="absolute inset-[10%] border border-[var(--text-primary)] rounded-full opacity-50" />
         <div className="absolute inset-[20%] border border-[var(--text-accent)] rounded-full opacity-30" />
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--text-secondary)] animate-bounce cursor-pointer items-center flex flex-col gap-2 hover:text-[var(--text-primary)] transition-colors z-20"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {/* <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={20} /> */}
      </motion.div>
    </section>
  );
};

export default Hero;
