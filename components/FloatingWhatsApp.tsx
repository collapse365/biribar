
import React from 'react';
import { useCMS } from '../CMSContext';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const { content } = useCMS();
  const whatsappLink = `https://wa.me/${content.whatsappNumber.replace(/\D/g, '')}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center group"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 group-hover:mr-2 font-bold">
        Falar no WhatsApp
      </span>
      <MessageCircle size={32} />
    </a>
  );
};

export default FloatingWhatsApp;
