
import React from 'react';
import { useCMS } from '../CMSContext';
import { Martini, Users, Zap, Target, Eye, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

const About: React.FC = () => {
  const { content } = useCMS();

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section - About */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Bar Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="font-heading text-yellow-400 text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Nossa História</span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
            MUITO ALÉM DE <br />
            <span className="text-yellow-400">APENAS UM BAR</span>
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight tracking-tighter">
                A ESSÊNCIA DA <span className="text-yellow-400">BIRIBAR</span>
              </h2>
              <div className="w-20 h-1.5 bg-yellow-400 rounded-full"></div>
            </div>
            <div className="space-y-6">
              <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                {content.about.history}
              </p>
              <div className="p-8 bg-zinc-950 border-l-4 border-yellow-400 rounded-r-3xl">
                <p className="text-zinc-400 italic text-lg leading-relaxed">
                  "{content.about.essence}"
                </p>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-yellow-400/20 rounded-[3rem] blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1541301623028-67446214d5f3?auto=format&fit=crop&q=80&w=1200"
                alt="Mixology"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </section>

        {/* MVV Section - Premium Cards */}
        <section className="py-24">
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">O QUE NOS <span className="text-yellow-400">MOVE</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Missão */}
            <div className="group p-1 bg-gradient-to-b from-zinc-800 to-transparent rounded-[3rem] hover:from-yellow-400/50 transition-all duration-500">
              <div className="h-full bg-zinc-950 p-12 rounded-[2.8rem] space-y-8 flex flex-col">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-400/20 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Missão</h3>
                <p className="text-zinc-400 leading-relaxed flex-grow italic">
                  "{content.about.mission}"
                </p>
              </div>
            </div>

            {/* Visão */}
            <div className="group p-1 bg-gradient-to-b from-zinc-800 to-transparent rounded-[3rem] hover:from-yellow-400/50 transition-all duration-500">
              <div className="h-full bg-zinc-950 p-12 rounded-[2.8rem] space-y-8 flex flex-col">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-white/10 group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Visão</h3>
                <p className="text-zinc-400 leading-relaxed flex-grow italic">
                  "{content.about.vision}"
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="group p-1 bg-gradient-to-b from-zinc-800 to-transparent rounded-[3rem] hover:from-yellow-400/50 transition-all duration-500">
              <div className="h-full bg-zinc-950 p-12 rounded-[2.8rem] space-y-8 flex flex-col">
                <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center border border-zinc-700 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-colors">
                  <ShieldCheck className="w-8 h-8 text-yellow-400 group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Valores</h3>
                <ul className="space-y-4 flex-grow">
                  {content.about.values.map((val, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-zinc-300 font-bold uppercase text-[10px] tracking-widest group-hover:text-white transition-colors">
                      <CheckCircle2 className="text-yellow-400 w-4 h-4 flex-shrink-0" />
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section - Icon Grid */}
        <section className="py-24 border-t border-zinc-900">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Martini className="w-10 h-10 text-yellow-400" />, title: 'Mixologia Premium', text: 'Combinações únicas com insumos de altíssima qualidade.' },
              { icon: <Users className="w-10 h-10 text-yellow-400" />, title: 'Equipe VIP', text: 'Profissionais altamente treinados e uniformizados.' },
              { icon: <Zap className="w-10 h-10 text-yellow-400" />, title: 'Vibe Incomparável', text: 'Levamos a energia certa para sua celebração.' },
              { icon: <Award className="w-10 h-10 text-yellow-400" />, title: 'Padrão de Ouro', text: 'Cada detalhe é planejado para superar expectativas.' },
            ].map((pillar, i) => (
              <div key={i} className="space-y-6 text-center lg:text-left">
                <div className="mx-auto lg:mx-0 w-20 h-20 bg-zinc-900/50 border border-zinc-800 rounded-full flex items-center justify-center hover:bg-yellow-400/10 hover:border-yellow-400 transition-all">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-bold text-white uppercase tracking-tighter">{pillar.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Final CTA for About Page */}
      <section className="py-32 text-center bg-zinc-950 mt-24">
         <h2 className="text-4xl md:text-5xl font-black text-white mb-10 uppercase tracking-tighter">VAMOS CRIAR ALGO <span className="text-yellow-400">ÉPICO?</span></h2>
         <a
            href={content.externalBudgetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-yellow-400 text-black px-12 py-6 rounded-full text-lg font-black tracking-widest hover:bg-white transition-all transform hover:scale-105 uppercase"
          >
            SOLICITAR ORÇAMENTO
          </a>
      </section>
    </div>
  );
};

export default About;
