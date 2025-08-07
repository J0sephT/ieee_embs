import React from 'react';
import { BookOpen, Users } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            ¿Listo para transformar el futuro de la salud?
          </h2>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed text-white/90">
            Únete al capítulo IEEE EMBS Yachay Tech y conecta con entusiastas, profesionales e investigadores en ingeniería biomédica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-base font-semibold">
            {/* Enlace externo */}
            <a
              href="https://r9.ieee.org/ecuador/capitulos-tecnicos/embs-ec/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2 shadow hover:scale-105"
            >
              <Users className="w-5 h-5" />
              <span>Hazte Miembro</span>
            </a>

            {/* Enlace interno */}
            <a
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-all duration-300 inline-flex items-center space-x-2 hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              <span>Saber más</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
