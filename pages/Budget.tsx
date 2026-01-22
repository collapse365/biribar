
import React, { useEffect } from 'react';
import { useCMS } from '../CMSContext';
import { Martini, ExternalLink, Loader2 } from 'lucide-react';

const Budget: React.FC = () => {
  const { content } = useCMS();

  // Automatic redirect simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open(content.externalBudgetUrl, '_blank');
    }, 2000);
    return () => clearTimeout(timer);
  }, [content.externalBudgetUrl]);

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full px-4 text-center">
        <div className="bg-zinc-950 p-12 rounded-[3rem] border border-zinc-900 shadow-2xl space-y-8">
          <div className="flex justify-center">
            <Martini className="w-16 h-16 text-yellow-400 animate-pulse" />
          </div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight">SOLICITANDO <span className="text-yellow-400">ORÇAMENTO</span></h1>
          <p className="text-zinc-400 font-medium">
            Você está sendo redirecionado para o nosso sistema seguro de orçamentos...
          </p>
          <div className="flex justify-center py-4">
             <Loader2 className="w-10 h-10 text-yellow-400 animate-spin" />
          </div>
          <a
            href={content.externalBudgetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-full font-black tracking-widest hover:bg-yellow-500 transition-all uppercase w-full justify-center text-[10px]"
          >
            CLIQUE AQUI SE NÃO FOR <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Budget;
