import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface EventItem {
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string; // 👈 soporta imagen opcional
}

const UpcomingEvents = ({ events }: { events: EventItem[] }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Próximos Eventos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg overflow-hidden border-l-4 border-purple-600 transition-all"
            >
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-52 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-900 mb-3">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <strong>Fecha:</strong> {event.date}
                </p>
                <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <strong>Lugar:</strong> {event.location}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
