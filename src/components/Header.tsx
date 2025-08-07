import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) =>
    location.pathname === path || (path === '/home' && location.pathname === '/');

  const navItems = [
    { path: '/home', label: 'Inicio' },
    { path: '/about', label: 'Sobre nosotros' },
    { path: '/events', label: 'Eventos' },
    { path: '/news', label: 'Noticias' },
    { path: '/contact', label: 'Contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-md'
        : 'bg-white/60 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-3 py-1">
        <div className="flex items-center justify-between">
          {/* Logo + Texto */}
          <Link to="/home" className="flex items-center space-x-2">
            <img
              src="/ieee.png"
              alt="IEEE EMBS"
              className={`w-10 h-10 object-contain transition-transform duration-300 ${
                isScrolled ? 'scale-95' : 'scale-100'
              }`}
            />
            <h1 className="text-sm sm:text-base font-semibold text-neutral">
              Yachay Tech
            </h1>
          </Link>

          {/* Navegación escritorio */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm sm:text-base font-medium transition-colors relative group ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-gray-800 hover:text-primary'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-transform origin-left ${
                  isActive(item.path)
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-sm bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-md font-medium hover:from-hover hover:to-secondary transition transform hover:scale-105 shadow"
            >
              Únete ahora
            </Link>
          </div>

          {/* Botón menú móvil */}
          <button
            className="lg:hidden p-1 rounded hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 py-2 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-lg">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                    isActive(item.path)
                      ? 'text-primary bg-gray-100'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="text-sm bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-md font-medium mx-3 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Únete ahora
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
