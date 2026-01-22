
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Martini, User } from 'lucide-react';
import { useCMS } from '../CMSContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { content, auth } = useCMS();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INÍCIO', path: '/' },
    { name: 'SERVIÇOS', path: '/servicos' },
    { name: 'SOBRE NÓS', path: '/sobre' },
    { name: 'GALERIA', path: '/galeria' },
    { name: 'DEPOIMENTOS', path: '/depoimentos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-zinc-900' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Martini className="w-6 h-6 text-yellow-400" />
            <span className="text-xl font-black tracking-tighter text-white uppercase">
              BIRIBAR<span className="text-yellow-400">DRINKS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] font-bold tracking-[0.2em] transition-all relative ${
                  isActive(link.path) ? 'text-yellow-400' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {auth.isLoggedIn && (
              <Link
                to="/admin"
                className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-yellow-400 hover:text-white transition-colors"
              >
                <User size={14} /> PAINEL
              </Link>
            )}

            <a
              href={content.externalBudgetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest hover:bg-white transition-all uppercase"
            >
              ORÇAMENTO
            </a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 fixed inset-0 z-50 flex flex-col p-8 pt-24 animate-in fade-in duration-300">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white">
            <X size={32} />
          </button>
          <div className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-black tracking-tight uppercase ${
                  isActive(link.path) ? 'text-yellow-400' : 'text-zinc-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {auth.isLoggedIn && (
               <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black tracking-tight uppercase text-yellow-400"
              >
                PAINEL ADMIN
              </Link>
            )}
            <a
              href={content.externalBudgetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold tracking-widest text-sm mt-8 uppercase"
            >
              SOLICITAR ORÇAMENTO
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
