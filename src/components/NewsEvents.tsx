import React from 'react';

interface NewsItem {
  title: string;
  description: string;
  image: string;
}

const NewsEvents = ({ news }: { news: NewsItem[] }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Noticias y Eventos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden border"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
