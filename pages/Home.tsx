
import React from 'react';
import { useCMS } from '../CMSContext';
import { ArrowRight, Martini, Image as ImageIcon, Users, MessageSquare, Check, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { content } = useCMS();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-30"
            alt="Hero Cocktails"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-8 px-4">
          <span className="font-heading inline-block px-5 py-2 border border-yellow-400/20 rounded-full bg-yellow-400/5 text-yellow-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
            A Experiência Definitiva em Bar Móvel
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
            {content.home.heroTitle.split(' ').map((word, i) => (
              <span key={i} className={word === 'BAR' || word === 'SONHOS' ? "text-yellow-400" : ""}>{word} </span>
            ))}
          </h1>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
            {content.home.heroSubtitle}
          </p>
          <div className="pt-8">
            <a
              href={content.externalBudgetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-10 py-5 rounded-full text-sm font-bold tracking-widest hover:bg-white transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl shadow-yellow-400/10 mx-auto w-fit"
            >
              SOLICITAR ORÇAMENTO <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.home.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-yellow-400 mb-1">{stat.value}</div>
                <div className="font-heading text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="text-center md:text-left">
              <span className="font-heading text-yellow-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-3 block">Nossas Soluções</span>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">O que <span className="text-yellow-400">Entregamos</span></h2>
            </div>
            <Link to="/servicos" className="border border-zinc-800 text-white px-8 py-3 rounded-full font-bold text-xs tracking-widest hover:bg-yellow-400 hover:text-black transition-all">
              VER DETALHES DOS SERVIÇOS
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.services.map((service) => (
              <div key={service.id} className="group glass-card rounded-3xl overflow-hidden flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">{service.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    {service.description.substring(0, 100)}...
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                        <Check size={14} className="text-yellow-400 flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0 mt-auto">
                   <Link to="/servicos" className="text-yellow-400 text-[10px] font-black tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                     Ver Detalhes <ArrowRight size={14} />
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <span className="font-heading text-yellow-400 text-[10px] font-bold tracking-[0.4em] uppercase block">Quem Somos</span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">A Arte da <span className="text-yellow-400">Coquetelaria</span></h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {content.about.history}
            </p>
            <div className="pt-4">
              <Link to="/sobre" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold tracking-widest hover:bg-yellow-400 transition-all uppercase text-[10px]">
                NOSSA HISTÓRIA <Users size={16} />
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&q=80&w=1200" 
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Sobre a Biribar" 
            />
          </div>
        </div>
      </section>

      {/* Gallery Summary */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <span className="font-heading text-yellow-400 text-[10px] font-bold tracking-[0.4em] uppercase block">Galeria</span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">Portfólio de <span className="text-yellow-400">Sucesso</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {content.gallery.slice(0, 4).map((item) => (
              <div key={item.id} className="aspect-square rounded-2xl overflow-hidden">
                <img src={item.url} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Job" />
              </div>
            ))}
          </div>

          <div className="text-center">
             <Link to="/galeria" className="inline-flex items-center gap-3 border border-zinc-800 text-white px-8 py-4 rounded-full font-bold tracking-widest hover:border-yellow-400 hover:text-yellow-400 transition-all uppercase text-[10px]">
                VER MAIS FOTOS <ImageIcon size={16} />
              </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Summary */}
      <section className="py-24 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <span className="font-heading text-yellow-400 text-[10px] font-bold tracking-[0.4em] uppercase block">Depoimentos</span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">O QUE DIZEM NOSSOS <span className="text-yellow-400">CLIENTES</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {content.testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-zinc-950 p-8 rounded-[2rem] border border-zinc-900 flex flex-col hover:border-yellow-400/30 transition-all duration-500 relative group">
                <Quote className="text-yellow-400 w-10 h-10 mb-6 opacity-20 absolute top-8 right-8" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-zinc-800"} />
                  ))}
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 italic flex-grow">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center font-black text-yellow-400 text-xs">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-xs tracking-widest">{testimonial.name}</h4>
                    <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/depoimentos" className="inline-flex items-center gap-3 bg-yellow-400 text-black px-10 py-4 rounded-full font-bold tracking-widest hover:bg-white transition-all transform hover:scale-105 uppercase text-[10px]">
              LER TODOS OS DEPOIMENTOS <MessageSquare size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-zinc-950 text-center px-4">
         <h2 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase tracking-tighter">Vamos <span className="text-yellow-400">Elevar</span> seu Evento?</h2>
         <a
            href={content.externalBudgetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-yellow-400 text-black px-12 py-6 rounded-full text-lg font-bold tracking-widest hover:bg-white transition-all transform hover:scale-105 uppercase"
          >
            GARANTIR MINHA DATA
          </a>
      </section>
    </div>
  );
};

export default Home;
