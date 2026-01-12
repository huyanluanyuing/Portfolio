import React from 'react';
import classNames from 'classnames';

const Navigation = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = classNames(
    'fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4 md:px-12 flex justify-between items-center',
    {
      'bg-[var(--bg-primary)]/90 backdrop-blur-sm border-b border-[var(--bg-tertiary)]': scrolled,
      'bg-transparent': !scrolled,
    }
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={navClasses}>
      <div className="text-xl font-bold tracking-tighter text-[var(--text-primary)] cursor-pointer" onClick={() => scrollToSection('hero')}>
        Me.
      </div>
      <div className="flex gap-6 md:gap-10 text-sm font-medium text-[var(--text-secondary)]">
        {['About', 'Projects', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="hover:text-[var(--text-primary)] transition-colors uppercase tracking-wide"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
