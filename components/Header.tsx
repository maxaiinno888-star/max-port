
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm border-b border-zinc-300' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-bold text-xl tracking-tighter uppercase group leading-[0.85] flex flex-col">
          <span className="group-hover:text-zinc-400 transition-colors">Max</span>
          <span className="group-hover:text-zinc-400 transition-colors">Portfolio</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
