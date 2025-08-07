import React from 'react';
import { BookOpen, Target, Lightbulb, Users, Calendar } from 'lucide-react';

const About = () => {
  const missionCards = [
    {
      icon: BookOpen,
      title: 'Misión',
      description: 'Fomentar y promover innovación, investigación y educación en ingeniería biomédica a nivel local y global.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Visión',
      description: 'Dar forma al futuro de la atención médica mediante tecnologías innovadoras que mejoren la salud y el bienestar.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'Áreas de enfoque',
      description: 'Imágenes médicas, salud digital, dispositivos médicos, bioingeniería, prótesis y bioelectrónica.',
      color: 'from-green-500 to-green-600'
    }
  ];

  const teamMembers = [
    {
      name: 'Anthony Anrango',
      role: 'Presidente EMBS YT',
      image: '/directiva/anthony.jpg'
    },
    {
      name: 'Dayana Murillo',
      role: 'Vicepresidenta EMBS YT',
      image: '/directiva/dayana.jpg'
    },
    {
      name: 'Emilia Lucas',
      role: 'Tesorera EMBS YT',
      image: '/directiva/emilia.jpg'
    },
    {
      name: 'Salomé Verdugo',
      role: 'Secretaria EMBS YT',
      image: '/directiva/salome.jpg'
    },
    {
      name: 'Cristhofer Guaman',
      role: 'Web Master EMBS YT',
      image: '/directiva/cristhofer.jpg'
    }
  ];

  const benefits = [
    "Pertenecer a una comunidad global de ingenieros biomédicos.",
    "Participación en eventos, talleres y proyectos internacionales.",
    "Desarrollo de habilidades de liderazgo y comunicación.",
    "Acceso a contenido especializado y publicaciones científicas.",
    "Oportunidades de voluntariado y networking académico.",
    "Descuentos en conferencias y recursos de IEEE EMBS."
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Sobre el Capítulo
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              El capítulo IEEE Engineering in Medicine and Biology Society de la Universidad Yachay Tech está dedicado 
              a fomentar la innovación en ingeniería biomédica e inspirar a la próxima generación de líderes en tecnología médica.
            </p>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Enfoques */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {missionCards.map((card, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    El capítulo EMBS de Yachay Tech fue fundado con el propósito de construir una comunidad académica comprometida con la excelencia en ingeniería biomédica.
                  </p>
                  <p>
                    Desde sus inicios, ha servido como un puente entre el conocimiento científico y la aplicación práctica, impulsando el desarrollo profesional de sus miembros a través de experiencias significativas.
                  </p>
                  <p>
                    Promovemos la formación integral mediante investigación, liderazgo, colaboración internacional y el compromiso activo con la innovación biomédica.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/directiva/group-banner.jpg" 
                    alt="Grupo Directiva EMBS Yachay Tech" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directiva 2025 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Directiva 2025</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Conoce a los líderes estudiantiles que dirigen y representan nuestro capítulo en este nuevo periodo.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow hover:shadow-md p-4">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-60 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-purple-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios de la Membresía */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Beneficios de la Membresía EMBS</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Ser parte de IEEE EMBS te brinda acceso a múltiples oportunidades de crecimiento académico, profesional y personal.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow hover:shadow-md border border-gray-200">
                <span className="text-blue-600 text-2xl font-bold mr-2">✔</span>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Únete a nuestra comunidad
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Sé parte de un capítulo dinámico que está transformando la ingeniería biomédica. Conecta, aprende e innova con nosotros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105 inline-flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Hazte Miembro</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 inline-flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Asiste a un Evento</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
