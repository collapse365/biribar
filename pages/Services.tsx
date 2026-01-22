
import React from 'react';
import { useCMS } from '../CMSContext';
import { Heart, Briefcase, PartyPopper, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const { content } = useCMS();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart': return <Heart className="w-10 h-10 text-yellow-400" />;
      case 'Briefcase': return <Briefcase className="w-10 h-10 text-yellow-400" />;
      case 'PartyPopper': return <PartyPopper className="w-10 h-10 text-yellow-400" />;
      default: return <Heart className="w-10 h-10 text-yellow-400" />;
    }
  };

  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <span className="font-heading text-yellow-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Experiências Personalizadas</span>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight tracking-tighter">Soluções <span className="text-yellow-400">Premium</span> de Bar</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-6 text-lg">
            Combinamos técnica, hospitalidade e os melhores insumos para criar o cenário perfeito para o seu brinde.
          </p>
        </div>

        <div className="space-y-40">
          {content.services.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full relative group">
                <div className="absolute -inset-4 bg-yellow-400/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="relative w-full h-[550px] object-cover rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-800">
                    {getIcon(service.icon)}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">{service.title}</h2>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-zinc-300 font-bold uppercase text-[10px] tracking-widest border-b border-zinc-900 pb-3">
                      <CheckCircle2 className="text-yellow-400 w-5 h-5 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="pt-10">
                  <a
                    href={content.externalBudgetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-yellow-400 text-black px-10 py-5 rounded-full font-black tracking-widest hover:bg-white transition-all transform hover:scale-105 uppercase text-[10px]"
                  >
                    SOLICITAR PROPOSTA EXCLUSIVA
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
