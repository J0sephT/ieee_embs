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
        ? 'bg-white/90 backdrop-blur-md shadow-lg'
        : 'bg-white/55 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Logo + Texto */}
          <Link to="/home" className="flex items-center space-x-4">
            <img
            src="/ieee.png"
            alt="IEEE EMBS"
            className={`w-16 h-16 sm:w-20 sm:h-20 object-contain transition-transform duration-300 ease-in-out ${
              isScrolled ? 'scale-95' : 'scale-100'
            }`}
          />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-neutral">Yachay Tech</h1>
            </div>
          </Link>

          {/* Navegación de escritorio */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg sm:text-xl font-semibold transition-colors relative group ${
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
              className="text-base sm:text-lg bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:from-hover hover:to-secondary transition transform hover:scale-105 shadow"
            >
              Únete ahora
            </Link>
          </div>

          {/* Botón de menú móvil */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-medium transition-colors px-4 py-2 rounded-lg ${
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
                className="text-lg bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold mx-4 text-center"
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
