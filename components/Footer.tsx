
import React from 'react';
import { Link } from 'react-router-dom';
import { Martini, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { useCMS } from '../CMSContext';

const Footer: React.FC = () => {
  const { content } = useCMS();

  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Martini className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-black tracking-tighter text-white">BIRIBAR<span className="text-yellow-400">DRINKS</span></span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Especialistas em bar móvel para eventos. Levamos sofisticação, sabor e uma vibe incrível para sua celebração.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-yellow-400 transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-zinc-400 hover:text-yellow-400 transition-colors"><Facebook size={24} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest text-sm mb-6 uppercase">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><Link to="/servicos" className="text-zinc-400 hover:text-yellow-400 transition-colors text-sm">Serviços</Link></li>
              <li><Link to="/sobre" className="text-zinc-400 hover:text-yellow-400 transition-colors text-sm">Sobre Nós</Link></li>
              <li><Link to="/galeria" className="text-zinc-400 hover:text-yellow-400 transition-colors text-sm">Galeria de Eventos</Link></li>
              <li><Link to="/depoimentos" className="text-zinc-400 hover:text-yellow-400 transition-colors text-sm">Depoimentos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest text-sm mb-6 uppercase">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-zinc-400 text-sm">
                <Phone size={18} className="text-yellow-400" />
                <span>{content.whatsappNumber}</span>
              </li>
              <li className="flex items-center space-x-3 text-zinc-400 text-sm">
                <Mail size={18} className="text-yellow-400" />
                <span>contato@biribardrinks.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest text-sm mb-6 uppercase">Orçamentos</h4>
            <p className="text-zinc-400 text-sm mb-6">Solicite uma proposta personalizada para seu evento agora mesmo.</p>
            <a
              href={content.externalBudgetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-white text-black font-black py-3 rounded-lg text-center hover:bg-yellow-400 transition-all duration-300"
            >
              SOLICITAR AGORA
            </a>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs gap-4">
          <p>&copy; {new Date().getFullYear()} BIRIBAR DRINK'S. Todos os direitos reservados.</p>
          <Link to="/login" className="hover:text-zinc-400 transition-colors">Acesso Restrito</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
