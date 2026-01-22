
import React, { useState } from 'react';
import { useCMS } from '../CMSContext';

const Gallery: React.FC = () => {
  const { content } = useCMS();
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'TODAS' },
    { id: 'event', name: 'EVENTOS' },
    { id: 'drink', name: 'DRINKS' },
    { id: 'team', name: 'EQUIPE' }
  ];

  const filteredGallery = filter === 'all' 
    ? content.gallery 
    : content.gallery.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">NOSSOS <span className="text-yellow-400">MOMENTOS</span></h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Um olhar sobre as experiências incríveis que levamos para os melhores eventos.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-8 py-3 rounded-full text-[10px] font-black tracking-widest transition-all ${
                filter === cat.id 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-zinc-900 text-zinc-500 hover:text-white border border-zinc-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div key={item.id} className="group relative aspect-square overflow-hidden rounded-2xl bg-zinc-900">
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8 text-center">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-heading text-yellow-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">{item.category}</span>
                  <p className="text-white text-lg font-black uppercase tracking-tighter">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-24 text-zinc-600 font-bold uppercase tracking-widest">
            Nenhuma imagem encontrada nesta categoria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
