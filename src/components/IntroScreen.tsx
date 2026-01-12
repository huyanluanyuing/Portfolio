import React, { useEffect } from 'react';
import { motion} from 'framer-motion';

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    // Automatically transition after animation (e.g. 3-4 seconds)
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "circInOut" }}
          className="h-[2px] bg-[var(--text-primary)] mb-4"
          style={{ maxWidth: '200px' }}
        />
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl font-light tracking-widest uppercase"
        >
          Portfolio
        </motion.h1>

        <motion.p
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 1.0, duration: 0.8 }}
           className="mt-2 text-sm md:text-base text-[var(--text-secondary)] tracking-[0.2em]"
        >
          Wenxuan
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute -bottom-20 text-xs text-gray-600 tracking-widest"
        >
          LOADING EXPERIENCE
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroScreen;
