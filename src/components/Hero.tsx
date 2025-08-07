import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, Calendar } from 'lucide-react';

const Hero = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#7A1E86] via-[#1E88E5] to-[#007396] overflow-hidden">
      
      {/* Imagen de fondo con desplazamiento para mostrar los rostros */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/fondo-grupal.jpeg')",
          backgroundPosition: 'center 15%',
        }}
      />

      {/* Capa oscura para contraste y legibilidad */}
      <div className="absolute inset-0 bg-black/40 z-10 backdrop-blur-sm" />

      {/* Contenido central con transición de entrada */}
      <div
        className={`relative z-20 max-w-6xl mx-auto px-6 lg:px-8 text-center sm:text-left transition-all duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight drop-shadow-lg">
          IEEE EMBS: la sociedad internacional líder en{' '}
          <span className="underline decoration-purple-300">ingeniería biomédica</span>.
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-10 max-w-3xl leading-relaxed drop-shadow-md mx-auto sm:mx-0">
          Capítulo Yachay Tech — Impulsando la innovación biomédica a través de la investigación, tecnología y liderazgo estudiantil.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start text-lg font-semibold">
          <Link
            to="/about"
            className="bg-white text-primary px-8 py-3 rounded-md hover:bg-gray-100 transition-transform duration-300 inline-flex items-center space-x-2 shadow-md hover:scale-105"
          >
            <span>Conócenos</span>
            <ChevronRight className="w-5 h-5" />
          </Link>

          <Link
            to="/events"
            className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-transform duration-300 inline-flex items-center space-x-2 hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            <span>Ver Eventos</span>
          </Link>
        </div>
      </div>

      {/* Icono de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
