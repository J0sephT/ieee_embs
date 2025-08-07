import React, { useState } from 'react';
import { X } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className="w-8 h-8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.003 2.003C8.278 2.003 2 8.282 2 16.007c0 2.713.747 5.365 2.165 7.676L2 30l6.456-2.123A13.93 13.93 0 0 0 16.003 30C23.722 30 30 23.721 30 16.003 30.002 8.278 23.722 2.003 16.003 2.003zm0 25.96a12.025 12.025 0 0 1-6.14-1.69l-.44-.26-3.83 1.258 1.263-3.729-.288-.456a11.983 11.983 0 0 1-1.846-6.4c0-6.63 5.393-12.025 12.025-12.025 6.63 0 12.025 5.395 12.025 12.025 0 6.63-5.393 12.025-12.025 12.025zm6.31-8.777c-.345-.172-2.045-1.01-2.362-1.122-.316-.116-.546-.172-.776.172-.23.345-.89 1.122-1.09 1.353-.202.23-.402.26-.747.087-.344-.172-1.45-.534-2.76-1.704-1.02-.91-1.71-2.03-1.91-2.374-.202-.345-.022-.532.152-.703.156-.154.344-.402.518-.6.172-.2.23-.344.345-.575.115-.23.058-.43-.03-.604-.086-.173-.776-1.875-1.063-2.573-.28-.67-.565-.577-.776-.587l-.662-.012c-.23 0-.6.086-.91.43-.31.345-1.193 1.163-1.193 2.836 0 1.67 1.225 3.287 1.396 3.514.172.23 2.414 3.69 5.85 5.176.818.353 1.456.563 1.952.72.82.26 1.56.22 2.145.134.655-.097 2.045-.835 2.333-1.64.287-.807.287-1.498.202-1.64-.086-.144-.316-.23-.66-.402z"/>
  </svg>
);

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href="https://wa.me/593962788597?text=Hola! Estoy interesado en unirme al capítulo IEEE EMBS en Yachay Tech."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip */}
        <div
          className={`absolute bottom-full left-0 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          Escríbenos por WhatsApp
          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>

        {/* Botón principal */}
        <div className="bg-green-500 text-white p-5 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 group-hover:shadow-xl">
          <WhatsAppIcon />
        </div>

        {/* Efecto de pulso */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
