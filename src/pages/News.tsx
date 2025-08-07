import React from 'react';
import { Calendar, User, ChevronRight } from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      id: 101,
      title: "Taller: Mano Robótica con Visión Artificial",
      excerpt: "Ensamble de prótesis robótica controlada por visión artificial.",
      content: "Full article content would go here...",
      author: "IEEE EMBS YT",
      date: "06-07-2025",
      category: "events",
      image: "/13_taller_mano_robotica_info.png",
      featured: true
    },
    {
      id: 102,
      title: "Taller \"Disability is Power\"",
      excerpt: "Promoviendo el deporte adaptado y el empoderamiento de personas con discapacidad.",
      content: "Full article content would go here...",
      author: "IEEE EMBS YT",
      date: "20-06-2025",
      category: "events",
      image: "/11_taller_disability_is_power.png",
      featured: false
    },
    {
      id: 103,
      title: "Entrega de kits Wired for the Future",
      excerpt: "Entrega de kits de electrónica básica a estudiantes de la Unidad Educativa del Milenio Yachay.",
      content: "Full article content would go here...",
      author: "IEEE EMBS YT",
      date: "06-08-2025",
      category: "events",
      image: "/16_wired_entrega_kits.png",
      featured: false
    },
    {
      id: 104,
      title: "Nueva Directiva 2025 EMBS YT",
      excerpt: "Presentación de la nueva directiva del capítulo estudiantil IEEE EMBS.",
      content: "Full article content would go here...",
      author: "IEEE EMBS YT",
      date: "06-04-2025",
      category: "news",
      image: "/07_directiva_2025.png",
      featured: true
    },
    {
      id: 105,
      title: "¡1000 Seguidores en Instagram!",
      excerpt: "Celebración por alcanzar los 1000 seguidores en la cuenta oficial de Instagram.",
      content: "Full article content would go here...",
      author: "IEEE EMBS YT",
      date: "24-06-2025",
      category: "news",
      image: "/12_1000_followers.png",
      featured: false
    },
    {
      id: 106,
      title: "Presencia en XIII Taller de Directivos",
      excerpt: "EMBS Yachay Tech participó en la reunión nacional de líderes estudiantiles IEEE en Latacunga.",
      content: "Full article content would go here...",
      author: "IEEE EMBS YT",
      date: "02-05-2025",
      category: "events",
      image: "/10_taller_directivos_latacunga.png",
      featured: false
    },
    {
      id: 107,
      title: "Primera Reunión EMBS",
      excerpt: "Charla para nuevos miembros, con sorteo de membresía.",
      content: "Full article content would go here...",
      author: "IEEE EMBS YT",
      date: "16-02-2025",
      category: "events",
      image: "/06_primera_reunion_embs.png",
      featured: false
    },
    {
      id: 108,
      title: "Taller: Biomecánica de los Sólidos",
      excerpt: "Introducción a principios de biomecánica aplicada a sólidos.",
      content: "Full article content would go here...",
      author: "IEEE EMBS YT",
      date: "27-03-2025",
      category: "events",
      image: "/08_taller_biomecanica.png",
      featured: false
    },
    {
      id: 109,
      title: "Charla Biomédic@s por el Mundo",
      excerpt: "Investigación en bioimpresión 3D de tumores desde la USP Brasil.",
      content: "Full article content would go here...",
      author: "IEEE EMBS YT",
      date: "17-04-2025",
      category: "research",
      image: "/09_biomedicxs_por_el_mundo.png",
      featured: false
    },
    {
      id: 110,
      title: "2do Congreso de Ingeniería Biomédica",
      excerpt: "Conferencias, networking, y actualización profesional.",
      content: "Full article content would go here...",
      author: "Organización IEEE EMBS",
      date: "28-07-2025",
      category: "events",
      image: "/15_congreso_ingenieria_biomedica.png",
      featured: true
    }
  ];

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      research: 'bg-blue-100 text-blue-800',
      events: 'bg-green-100 text-green-800',
      news: 'bg-yellow-100 text-yellow-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-EC', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Noticias y Eventos</h1>
          <p className="text-xl text-gray-600">
            Conoce las últimas actividades, logros y talleres del capítulo IEEE EMBS Yachay Tech.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Destacados</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <article key={article.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
                    <img src={article.image} alt={article.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-400 italic">Próximamente</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center"><User className="w-4 h-4 mr-1" />{article.author}</span>
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{formatDate(article.date)}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Todas las Noticias</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <article key={article.id} className="bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all overflow-hidden group">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-400 italic">Próximamente</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center"><User className="w-3 h-3 mr-1" />{article.author}</span>
                      <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" />{formatDate(article.date)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
