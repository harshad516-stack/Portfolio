
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? 'w-[90%] md:w-auto px-6 py-3 bg-white/80 backdrop-blur-md shadow-lg rounded-full' : 'w-full px-8 py-6'
      }`}
    >
      <div className="flex items-center justify-between gap-12">
        {!scrolled && (
          <div className="text-xl font-bold text-slate-900 hidden md:block">
            HKS <span className="text-blue-600">.</span>
          </div>
        )}
        <div className="flex items-center gap-6 md:gap-8 mx-auto md:mx-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
