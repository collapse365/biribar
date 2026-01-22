
import React from 'react';
import { useCMS } from '../CMSContext';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { content } = useCMS();

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">O QUE ELES <span className="text-yellow-400">DIZEM</span></h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
            A opinião de quem confiou na Biribar para tornar seu evento inesquecível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.testimonials.map((item) => (
            <div key={item.id} className="bg-zinc-950 p-10 rounded-[2.5rem] border border-zinc-900 flex flex-col h-full hover:border-yellow-400/30 transition-all duration-500">
              <Quote className="text-yellow-400 w-12 h-12 mb-8 opacity-40" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-zinc-800"} />
                ))}
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8 flex-grow font-medium italic">
                "{item.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center font-black text-yellow-400 tracking-tighter">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-sm tracking-tighter">{item.name}</h4>
                  <p className="font-heading text-zinc-600 font-bold text-[10px] uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-yellow-400 rounded-[3rem] p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8 uppercase tracking-tighter">QUER APARECER POR AQUI TAMBÉM?</h2>
          <p className="text-xl text-black/80 max-w-2xl mx-auto mb-10 font-bold">
            Realize seu evento com a gente e prepare-se para ser surpreendido!
          </p>
          <a
            href={content.externalBudgetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-12 py-5 rounded-full font-black tracking-widest hover:scale-105 transition-all uppercase text-[10px]"
          >
            SOLICITAR MEU ORÇAMENTO
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
