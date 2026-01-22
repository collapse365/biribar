
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCMS } from '../CMSContext';
import { LayoutDashboard, FileText, Image, MessageSquare, LogOut, Save, Plus, Trash2, Home, X, Star } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { auth, content, updateContent, logout } = useCMS();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'general' | 'home' | 'about' | 'gallery' | 'services' | 'testimonials'>('general');
  const [formData, setFormData] = useState(content);

  if (!auth.isLoggedIn) {
    navigate('/login');
    return null;
  }

  const handleSave = () => {
    updateContent(formData);
    alert('Conteúdo atualizado com sucesso!');
  };

  // Gallery Handlers
  const handleAddGallery = () => {
    const newId = `g${Date.now()}`;
    const newItem = {
      id: newId,
      url: 'https://picsum.photos/seed/' + newId + '/600/600',
      category: 'event' as const,
      caption: 'Nova Foto'
    };
    setFormData({ ...formData, gallery: [...formData.gallery, newItem] });
  };

  const removeGalleryItem = (id: string) => {
    setFormData({
      ...formData,
      gallery: formData.gallery.filter(item => item.id !== id)
    });
  };

  // Service Handlers
  const addServiceFeature = (serviceIndex: number) => {
    const newServices = [...formData.services];
    newServices[serviceIndex].features.push("Novo Diferencial");
    setFormData({ ...formData, services: newServices });
  };

  const removeServiceFeature = (serviceIndex: number, featureIndex: number) => {
    const newServices = [...formData.services];
    newServices[serviceIndex].features.splice(featureIndex, 1);
    setFormData({ ...formData, services: newServices });
  };

  const updateServiceFeature = (serviceIndex: number, featureIndex: number, value: string) => {
    const newServices = [...formData.services];
    newServices[serviceIndex].features[featureIndex] = value;
    setFormData({ ...formData, services: newServices });
  };

  // About Handlers
  const addAboutValue = () => {
    setFormData({ ...formData, about: { ...formData.about, values: [...formData.about.values, "Novo Valor"] } });
  };

  const removeAboutValue = (index: number) => {
    const newValues = [...formData.about.values];
    newValues.splice(index, 1);
    setFormData({ ...formData, about: { ...formData.about, values: newValues } });
  };

  const updateAboutValue = (index: number, value: string) => {
    const newValues = [...formData.about.values];
    newValues[index] = value;
    setFormData({ ...formData, about: { ...formData.about, values: newValues } });
  };

  // Testimonial Handlers
  const addTestimonial = () => {
    const newTestimonial = {
      id: `t${Date.now()}`,
      name: "Nome do Cliente",
      role: "Noiva / Empresa",
      content: "Escreva aqui o depoimento...",
      rating: 5
    };
    setFormData({ ...formData, testimonials: [...formData.testimonials, newTestimonial] });
  };

  const removeTestimonial = (id: string) => {
    setFormData({ ...formData, testimonials: formData.testimonials.filter(t => t.id !== id) });
  };

  const updateTestimonial = (id: string, field: string, value: any) => {
    const newTestimonials = formData.testimonials.map(t => 
      t.id === id ? { ...t, [field]: value } : t
    );
    setFormData({ ...formData, testimonials: newTestimonials });
  };

  const navItems = [
    { id: 'general', label: 'Geral', icon: <LayoutDashboard size={20} /> },
    { id: 'home', label: 'Início', icon: <Home size={20} /> },
    { id: 'services', label: 'Serviços', icon: <FileText size={20} /> },
    { id: 'about', label: 'Sobre', icon: <FileText size={20} /> },
    { id: 'gallery', label: 'Galeria', icon: <Image size={20} /> },
    { id: 'testimonials', label: 'Depoimentos', icon: <MessageSquare size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-950 border-r border-zinc-900 flex flex-col fixed h-full">
        <div className="p-8 border-b border-zinc-900">
           <div className="flex items-center space-x-2">
            <span className="text-xl font-black text-white tracking-tighter uppercase">BIRIBAR<span className="text-yellow-400">ADMIN</span></span>
          </div>
        </div>
        <nav className="flex-grow py-6 px-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-xs transition-all tracking-widest uppercase ${
                activeTab === item.id ? 'bg-yellow-400 text-black font-black' : 'text-zinc-500 hover:text-white hover:bg-zinc-900'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-zinc-900">
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
            className="w-full flex items-center gap-4 px-4 py-3 text-red-500 font-bold text-xs uppercase tracking-widest hover:bg-red-500/10 rounded-xl transition-all"
          >
            <LogOut size={20} />
            Sair do Painel
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-64 p-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Gerenciar <span className="text-yellow-400">{activeTab}</span></h1>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-yellow-400 text-black px-8 py-3 rounded-xl font-black tracking-widest hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-400/20 text-[10px] uppercase"
            >
              <Save size={20} /> SALVAR ALTERAÇÕES
            </button>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-10 space-y-8">
            {activeTab === 'general' && (
              <div className="space-y-6">
                <div>
                  <label className="font-heading block text-zinc-500 font-bold uppercase text-[10px] tracking-widest mb-2">Link do Orçamento (Google Forms, etc.)</label>
                  <input
                    type="text"
                    value={formData.externalBudgetUrl}
                    onChange={(e) => setFormData({ ...formData, externalBudgetUrl: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="font-heading block text-zinc-500 font-bold uppercase text-[10px] tracking-widest mb-2">WhatsApp (ex: 5511999999999)</label>
                  <input
                    type="text"
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-yellow-400"
                  />
                </div>
              </div>
            )}

            {activeTab === 'home' && (
              <div className="space-y-6">
                <div>
                  <label className="font-heading block text-zinc-500 font-bold uppercase text-[10px] tracking-widest mb-2">Título do Hero</label>
                  <input
                    type="text"
                    value={formData.home.heroTitle}
                    onChange={(e) => setFormData({ ...formData, home: { ...formData.home, heroTitle: e.target.value } })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="font-heading block text-zinc-500 font-bold uppercase text-[10px] tracking-widest mb-2">Subtítulo do Hero</label>
                  <textarea
                    value={formData.home.heroSubtitle}
                    onChange={(e) => setFormData({ ...formData, home: { ...formData.home, heroSubtitle: e.target.value } })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white h-32 focus:outline-none focus:border-yellow-400"
                  />
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  {formData.gallery.map((item, index) => (
                    <div key={item.id} className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 relative group">
                      <img src={item.url} alt="Thumbnail" className="w-full h-32 object-cover rounded-xl mb-4" />
                      <input 
                        className="w-full bg-black border border-zinc-800 rounded-lg p-2 text-xs mb-2 text-white" 
                        value={item.caption} 
                        onChange={(e) => {
                          const newGallery = [...formData.gallery];
                          newGallery[index].caption = e.target.value;
                          setFormData({...formData, gallery: newGallery});
                        }}
                      />
                      <select 
                        className="w-full bg-black border border-zinc-800 rounded-lg p-2 text-xs text-zinc-400"
                        value={item.category}
                        onChange={(e) => {
                          const newGallery = [...formData.gallery];
                          newGallery[index].category = e.target.value as any;
                          setFormData({...formData, gallery: newGallery});
                        }}
                      >
                        <option value="event">Eventos</option>
                        <option value="drink">Drinks</option>
                        <option value="team">Equipe</option>
                      </select>
                      <button 
                        onClick={() => removeGalleryItem(item.id)}
                        className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleAddGallery}
                  className="w-full border-2 border-dashed border-zinc-800 py-8 rounded-2xl text-zinc-600 hover:text-yellow-400 hover:border-yellow-400/50 transition-all font-black flex flex-col items-center gap-2 text-[10px] tracking-widest uppercase"
                >
                  <Plus size={32} /> ADICIONAR NOVA IMAGEM
                </button>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="space-y-6">
                 <div>
                  <label className="font-heading block text-zinc-500 font-bold uppercase text-[10px] tracking-widest mb-2">História da Marca</label>
                  <textarea
                    value={formData.about.history}
                    onChange={(e) => setFormData({ ...formData, about: { ...formData.about, history: e.target.value } })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white h-32 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="font-heading block text-zinc-500 font-bold uppercase text-[10px] tracking-widest mb-2">Essência (Destaque)</label>
                  <textarea
                    value={formData.about.essence}
                    onChange={(e) => setFormData({ ...formData, about: { ...formData.about, essence: e.target.value } })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white h-24 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-heading block text-zinc-500 font-bold uppercase text-[10px] tracking-widest mb-2">Missão</label>
                    <textarea
                      value={formData.about.mission}
                      onChange={(e) => setFormData({ ...formData, about: { ...formData.about, mission: e.target.value } })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white h-24 focus:outline-none focus:border-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="font-heading block text-zinc-500 font-bold uppercase text-[10px] tracking-widest mb-2">Visão</label>
                    <textarea
                      value={formData.about.vision}
                      onChange={(e) => setFormData({ ...formData, about: { ...formData.about, vision: e.target.value } })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white h-24 focus:outline-none focus:border-yellow-400"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="font-heading text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Nossos Valores</label>
                    <button 
                      onClick={addAboutValue}
                      className="text-yellow-400 text-[10px] font-bold uppercase flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <Plus size={14} /> Adicionar
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {formData.about.values.map((val, idx) => (
                      <div key={idx} className="relative flex items-center">
                        <input
                          type="text"
                          value={val}
                          onChange={(e) => updateAboutValue(idx, e.target.value)}
                          className="w-full bg-black border border-zinc-800 rounded-lg py-2 pl-3 pr-10 text-xs text-white focus:border-yellow-400"
                        />
                        <button 
                          onClick={() => removeAboutValue(idx)}
                          className="absolute right-2 text-zinc-600 hover:text-red-500 transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="space-y-12">
                {formData.services.map((service, serviceIndex) => (
                  <div key={service.id} className="p-8 border border-zinc-800 rounded-3xl bg-zinc-900/50 space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-white font-black uppercase text-sm tracking-widest">Serviço: {service.title}</h3>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-heading text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Título do Serviço</label>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => {
                          const newServices = [...formData.services];
                          newServices[serviceIndex].title = e.target.value;
                          setFormData({ ...formData, services: newServices });
                        }}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-yellow-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-heading text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Descrição Detalhada</label>
                      <textarea
                        value={service.description}
                        onChange={(e) => {
                          const newServices = [...formData.services];
                          newServices[serviceIndex].description = e.target.value;
                          setFormData({ ...formData, services: newServices });
                        }}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white h-32 focus:outline-none focus:border-yellow-400"
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <label className="font-heading text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Diferenciais / Features</label>
                        <button 
                          onClick={() => addServiceFeature(serviceIndex)}
                          className="text-yellow-400 text-[10px] font-bold uppercase flex items-center gap-1 hover:text-white transition-colors"
                        >
                          <Plus size={14} /> Adicionar
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="relative flex items-center">
                            <input
                              type="text"
                              value={feature}
                              onChange={(e) => updateServiceFeature(serviceIndex, featureIndex, e.target.value)}
                              className="w-full bg-black border border-zinc-800 rounded-lg py-2 pl-3 pr-10 text-xs text-white focus:border-yellow-400"
                            />
                            <button 
                              onClick={() => removeServiceFeature(serviceIndex, featureIndex)}
                              className="absolute right-2 text-zinc-600 hover:text-red-500 transition-colors"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div className="space-y-8">
                <div className="flex justify-between items-center mb-6">
                  <p className="text-zinc-500 text-sm">Gerencie o que seus clientes dizem sobre a Biribar.</p>
                  <button 
                    onClick={addTestimonial}
                    className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold text-[10px] uppercase hover:bg-white transition-all tracking-widest"
                  >
                    <Plus size={16} /> Novo Depoimento
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {formData.testimonials.map((test) => (
                    <div key={test.id} className="p-8 border border-zinc-800 rounded-3xl bg-zinc-900/50 space-y-6 relative group">
                      <button 
                        onClick={() => removeTestimonial(test.id)}
                        className="absolute top-6 right-6 text-zinc-600 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-heading text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Nome do Cliente</label>
                          <input
                            type="text"
                            value={test.name}
                            onChange={(e) => updateTestimonial(test.id, 'name', e.target.value)}
                            className="w-full bg-black border border-zinc-800 rounded-xl py-2 px-4 text-white focus:border-yellow-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="font-heading text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Papel / Evento (Ex: Noiva)</label>
                          <input
                            type="text"
                            value={test.role}
                            onChange={(e) => updateTestimonial(test.id, 'role', e.target.value)}
                            className="w-full bg-black border border-zinc-800 rounded-xl py-2 px-4 text-white focus:border-yellow-400"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-heading text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Conteúdo do Depoimento</label>
                        <textarea
                          value={test.content}
                          onChange={(e) => updateTestimonial(test.id, 'content', e.target.value)}
                          className="w-full bg-black border border-zinc-800 rounded-xl py-2 px-4 text-white h-24 focus:border-yellow-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="font-heading text-[10px] text-zinc-500 uppercase font-bold tracking-widest flex items-center gap-2">Avaliação <Star size={12} className="text-yellow-400 fill-yellow-400" /></label>
                        <select
                          value={test.rating}
                          onChange={(e) => updateTestimonial(test.id, 'rating', parseInt(e.target.value))}
                          className="w-full bg-black border border-zinc-800 rounded-xl py-2 px-4 text-white focus:border-yellow-400"
                        >
                          {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} Estrelas</option>)}
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
