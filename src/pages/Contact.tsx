import React from 'react';
import {
  Mail, Phone, MapPin, Globe,
  Instagram, Linkedin, Facebook, MessageCircle
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'embs@yachaytech.edu.ec',
      description: 'Escríbenos para cualquier consulta',
      action: 'mailto:embs@yachaytech.edu.ec'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: '0962788597',
      description: 'Contáctanos directamente',
      action: 'tel:0962788597'
    },
    {
      icon: MapPin,
      title: 'Dirección',
      details: 'Yachay Tech University',
      description: 'Hacienda San José s/n, Urcuquí, Ecuador',
      action: 'https://maps.google.com/?q=Yachay+Tech+University'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/EMBSYachayTech',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/embs_yt',
      color: 'hover:text-pink-600',
      bgColor: 'hover:bg-pink-50'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/embs-yachay-tech',
      color: 'hover:text-blue-700',
      bgColor: 'hover:bg-blue-50'
    },
    {
      name: 'Threads',
      icon: MessageCircle,
      url: 'https://www.threads.com/@embs_yt?xmt=AQF0e8BBRFkINf2v7s5_CioDHtNnCvINsTelccUdgdykcf8',
      color: 'hover:text-gray-800',
      bgColor: 'hover:bg-gray-50'
    }
  ];

  const faqs = [
    {
      question: '¿Cómo puedo unirme al capítulo IEEE EMBS Yachay Tech?',
      answer: 'Puedes unirte asistiendo a nuestras reuniones introductorias o escribiendo a embs@yachaytech.edu.ec. También puedes registrarte durante eventos activos. La membresía IEEE no es obligatoria al inicio, pero es altamente recomendada.'
    },
    {
      question: '¿Qué actividades realiza el capítulo?',
      answer: 'Organizamos talleres técnicos (como biomecánica, impresión 3D, visión artificial), charlas académicas, entregas sociales, y participaciones en congresos nacionales como el CIB. Además, impulsamos proyectos de investigación estudiantil.'
    },
    {
      question: '¿Es solo para estudiantes de biomédica?',
      answer: 'No. Aceptamos estudiantes de todas las carreras con interés en la tecnología y salud. En nuestro equipo hay miembros de física, computación, electrónica y biología.'
    },
    {
      question: '¿Tienen redes sociales activas?',
      answer: 'Sí, nos puedes seguir en Instagram, Facebook, Threads y LinkedIn para conocer nuestras actividades, convocatorias y eventos.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contáctanos</h1>
          <p className="text-xl text-gray-600">
            ¿Tienes dudas sobre eventos, membresías o proyectos? Estamos para ayudarte.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Información de contacto</h2>
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <div key={i} className="flex space-x-4 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{info.title}</h3>
                  <a
                    href={info.action}
                    className="text-blue-600 hover:text-blue-700 block"
                    target={info.action.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                  >
                    {info.details}
                  </a>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Redes Sociales */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Síguenos en redes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center space-x-2 p-3 border border-gray-200 rounded-lg ${social.bgColor} ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visítanos en Campus</h2>
            <p className="text-xl text-gray-600 mb-8">
              Encuéntranos en la Universidad Yachay Tech, provincia de Imbabura
            </p>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                <div>
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Mapa Interactivo</h3>
                  <p className="text-gray-600 mb-4">Hacienda San José s/n, Urcuquí, Imbabura, Ecuador</p>
                  <a
                    href="https://maps.google.com/?q=Yachay+Tech+University"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    <span>Ver en Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
