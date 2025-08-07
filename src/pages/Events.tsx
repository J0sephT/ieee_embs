// Events.tsx

import React from 'react';
import { Calendar, MapPin, Clock, Users, ExternalLink, ChevronRight } from 'lucide-react';

const Events = () => {
  const event = {
    id: 1,
    date: '22–24 Ago',
    fullDate: '2025-08-22',
    day: 'Jueves a Sábado',
    title: '2º Congreso de Actualización de Ingeniería Biomédica',
    speaker: 'Ponentes internacionales y nacionales',
    location: 'Auditorio José Mejía Lequerica, UCE (Quito)',
    time: '08:00 AM – 05:00 PM',
    type: 'congreso',
    description: `EMBS Yachay Tech es auspiciante del evento. Con 40 horas académicas, el congreso tiene como objetivo actualizar los conocimientos técnicos, normativos y operativos en el área biomédica, promoviendo innovación tecnológica y fortaleciendo redes entre academia, sector público y empresa privada.

Temas:
- Inteligencia artificial en salud
- Cirugía robótica
- Biomodelos y biomateriales
- Normativas nacionales e internacionales
- Bioseguridad en mantenimiento biomédico
- Calibración y verificación técnica
- Innovación en equipos biomédicos y odontológicos
- Equipos de rayos X

🎓 Estudiantes y miembros EMBS acceden a descuento especial. 
📞 Contacto Yachay Tech: 0962788597`,
    capacity: 'Abierto a estudiantes y profesionales',
    registration: 'https://docs.google.com/forms/d/e/1FAIpQLSdm7jfPsv61Tral14Nsg3amMS7X-OZukMye2E-GQAjQwd_zcw/viewform',
    image: '/15_congreso_ingenieria_biomedica.png'
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Eventos Destacados</h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Explora los eventos auspiciados o organizados por EMBS Yachay Tech para mantenerte a la vanguardia en el área biomédica.
            </p>
          </div>
        </div>
      </section>

      {/* Evento principal */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Imagen */}
                <div className="lg:w-1/3">
                  <div
                    className="h-64 lg:h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${event.image})` }}
                  ></div>
                </div>

                {/* Contenido */}
                <div className="lg:w-2/3 p-8 flex flex-col">
                  {/* Encabezado */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-blue-600 text-white px-4 py-3 rounded-lg text-center min-w-fit">
                      <div className="text-lg font-bold">{event.date}</div>
                      <div className="text-sm opacity-90">{event.day}</div>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                        Congreso
                      </span>
                    </div>
                  </div>

                  {/* Detalles */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-blue-600 font-medium mb-4">{event.speaker}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{event.capacity}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">22 al 24 de agosto, 2025</span>
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-600 whitespace-pre-line mb-6 flex-grow">{event.description}</p>

                  {/* Botón de registro */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={event.registration}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2"
                    >
                      <span>Inscribirse</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Únete a nuestra comunidad
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Forma parte del capítulo EMBS Ecuador y accede a oportunidades de crecimiento, eventos, mentorías y más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://r9.ieee.org/ecuador/capitulos-tecnicos/embs-ec/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Hazte Miembro</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
