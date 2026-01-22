
import { CMSContent } from './types';

export const INITIAL_CMS_CONTENT: CMSContent = {
  home: {
    heroTitle: "CRIAMOS O BAR DOS SEUS SONHOS",
    heroSubtitle: "Sofisticação, coquetelaria premium e uma energia contagiante para tornar seu evento uma experiência inesquecível.",
    heroImageUrl: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=2000",
    aboutSummaryImageUrl: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { label: "Eventos Realizados", value: "850+" },
      { label: "Clientes Encantados", value: "15k+" },
      { label: "Drinks Criativos", value: "60+" },
      { label: "Anos no Mercado", value: "08" }
    ]
  },
  about: {
    title: "Nossa Essência: Paixão por Celebrar",
    history: "A BIRIBAR não é apenas um bar móvel; somos arquitetos de momentos. Nascemos da vontade de transformar a forma como as pessoas celebram, trazendo a sofisticação dos melhores bares do mundo para dentro do seu evento.",
    essence: "Com um espírito jovem e equipe altamente treinada, garantimos que cada drink servido seja um espetáculo à parte, unindo técnica clássica e inovação constante.",
    mission: "Proporcionar experiências memoráveis através de uma coquetelaria de excelência, unindo hospitalidade, criatividade e uma energia contagiante em cada celebração.",
    vision: "Ser a principal referência em bar móvel premium no Brasil, reconhecida pela inovação constante e pelo padrão impecável de atendimento e mixologia.",
    values: ["Excelência no Atendimento", "Inovação Criativa", "Integridade e Ética", "Paixão por Celebrar", "Qualidade Inegociável"],
    heroImageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000",
    storyImageUrl: "https://images.unsplash.com/photo-1541301623028-67446214d5f3?auto=format&fit=crop&q=80&w=1200"
  },
  services: [
    {
      id: '1',
      title: "CASAMENTOS",
      description: "Sua união merece um brinde à altura da sua história. Criamos um menu de coquetelaria fina que harmoniza com o estilo da sua festa, desde clássicos atemporais até criações exclusivas que refletem a personalidade do casal.",
      icon: "Heart",
      imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd458ad20?auto=format&fit=crop&q=80&w=1200",
      features: ["Menu Personalizado", "Cristalaria Premium", "Bartenders Trajados", "Mixologia Autoral"]
    },
    {
      id: '2',
      title: "CORPORATIVO",
      description: "Impressione parceiros e colaboradores com um serviço de bar ágil, elegante e extremamente profissional. Ideal para ativações de marca e confraternizações, onde a excelência no atendimento é a nossa prioridade.",
      icon: "Briefcase",
      imageUrl: "https://images.unsplash.com/photo-1516997121675-4c2d04fe1301?auto=format&fit=crop&q=80&w=1200",
      features: ["Logotipo no Drink", "Equipe Bilíngue", "Gestão de Consumo", "Setup High-Tech"]
    },
    {
      id: '3',
      title: "FESTAS EXCLUSIVAS",
      description: "A energia que a sua celebração precisa. Nossos bartenders não apenas servem drinks, eles criam um show de entretenimento com coquetéis vibrantes, apresentações interativas e uma vibe que contagia a pista de dança.",
      icon: "PartyPopper",
      imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
      features: ["Shows com Gelo Seco", "Drinks Interativos", "Cardápio Teen", "Estrutura Led"]
    }
  ],
  gallery: [
    { id: 'g1', url: 'https://images.unsplash.com/photo-1541301623028-67446214d5f3?auto=format&fit=crop&q=80&w=800', category: 'drink', caption: 'Cocktail de Frutas Tropicais' },
    { id: 'g2', url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800', category: 'event', caption: 'Nosso Bar em Ação' },
    { id: 'g3', url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800', category: 'team', caption: 'Mixologia com Precisão' },
    { id: 'g4', url: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&q=80&w=800', category: 'drink', caption: 'Aperol Spritz Signature' },
    { id: 'g5', url: 'https://images.unsplash.com/photo-1527661596776-43458d2b624d?auto=format&fit=crop&q=80&w=800', category: 'event', caption: 'Ambiente Sofisticado' },
    { id: 'g6', url: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=800', category: 'drink', caption: 'Gin Tonic Premium' }
  ],
  testimonials: [
    { id: 't1', name: 'Juliana Torres', role: 'Noiva', content: 'Superaram todas as expectativas! O bar foi o coração da festa, a apresentação dos drinks é de outro mundo.', rating: 5 },
    { id: 't2', name: 'Roberto Lima', role: 'Event Manager', content: 'A Biribar é sinônimo de tranquilidade. Entrega pontual, equipe educada e coquetéis de altíssima qualidade.', rating: 5 },
    { id: 't3', name: 'Felipe Rocha', role: 'Aniversariante', content: 'Contratei para meu aniversário de 30 anos e foi sensacional. Todo mundo elogiou a energia da equipe!', rating: 5 }
  ],
  externalBudgetUrl: "https://forms.gle/biribar-demo-budget",
  whatsappNumber: "5511999999999"
};
