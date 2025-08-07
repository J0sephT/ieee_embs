import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre EMBS</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li><Link to="/about" className="hover:text-white transition-colors">Quiénes somos</Link></li>
              <li><Link to="/membership" className="hover:text-white transition-colors">Membresía</Link></li>
              <li><Link to="/publications" className="hover:text-white transition-colors">Publicaciones</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Estudiantes</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li><Link to="/students" className="hover:text-white transition-colors">Programas estudiantiles</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Eventos</Link></li>
              <li><Link to="/awards" className="hover:text-white transition-colors">Premios</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li><Link to="/technical" className="hover:text-white transition-colors">Comunidades técnicas</Link></li>
              <li><Link to="/research" className="hover:text-white transition-colors">Investigación</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Carreras</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="text-sm text-white/90 space-y-2">
              <p>IEEE EMBS Yachay Tech</p>
              <p>Universidad Yachay Tech</p>
              <p>San Miguel de Urcuquí, Ecuador</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm text-white/70">
            © 2025 IEEE EMBS Yachay Tech. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
