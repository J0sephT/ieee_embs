import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import NewsEvents from '../components/NewsEvents';
import UpcomingEvents from '../components/UpcomingEvents';
import CTA from '../components/CTA';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const news = [
    {
      title: "Curso Básico de Diseño e Impresión 3D",
      description: "Aprendizaje desde cero de herramientas de diseño 3D con Fusion 360 y Cura.",
      image: "/05_curso_diseno_impresion_3d.png"
    },
    {
      title: "Taller: Mano Robótica con Visión Artificial",
      description: "Ensamble de prótesis robótica controlada por visión artificial.",
      image: "/13_taller_mano_robotica_info.png"
    },
    {
      title: "Taller \"Disability is Power\"",
      description: "Promoviendo el deporte adaptado y el empoderamiento de personas con discapacidad.",
      image: "/11_taller_disability_is_power.png"
    },
    {
      title: "Entrega de kits Wired for the Future",
      description: "Entrega de kits de electrónica básica a estudiantes de la Unidad Educativa del Milenio Yachay.",
      image: "/16_wired_entrega_kits.png"
    },
    {
      title: "Nueva Directiva 2025 EMBS YT",
      description: "Presentación de la nueva directiva del capítulo estudiantil IEEE EMBS.",
      image: "/07_directiva_2025.png"
    },
    {
      title: "¡1000 Seguidores en Instagram!",
      description: "Celebración por alcanzar los 1000 seguidores en la cuenta oficial de Instagram.",
      image: "/12_1000_followers.png"
    },
    {
      title: "Presencia en XIII Taller de Directivos",
      description: "EMBS Yachay Tech participó en la reunión nacional de líderes estudiantiles IEEE en Latacunga.",
      image: "/10_taller_directivos_latacunga.png"
    },
    {
      title: "Primera Reunión EMBS",
      description: "Charla para nuevos miembros, con sorteo de membresía.",
      image: "/06_primera_reunion_embs.png"
    },
    {
      title: "Taller: Biomecánica de los Sólidos",
      description: "Introducción a principios de biomecánica aplicada a sólidos.",
      image: "/08_taller_biomecanica.png"
    },
    {
      title: "Charla Biomédic@s por el Mundo",
      description: "Investigación en bioimpresión 3D de tumores desde la USP Brasil.",
      image: "/09_biomedicxs_por_el_mundo.png"
    }
  ];

  const events = [
    {
      title: "2do Congreso de Ingeniería Biomédica",
      date: "22–24 agosto 2025",
      location: "UCE (Quito)",
      description: "Conferencias, networking, y actualización profesional.",
      image: "/15_congreso_ingenieria_biomedica.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Hero isVisible={isVisible} />

      <div className="bg-gradient-to-b from-white to-gray-50 py-16">
        <NewsEvents news={news} />
      </div>

      <div className="bg-white py-16">
        <UpcomingEvents events={events} />
      </div>

      <div className="bg-primary py-20">
        <CTA />
      </div>
    </div>
  );
};

export default Home;
