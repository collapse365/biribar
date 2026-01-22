
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCMS } from '../CMSContext';
import { Martini, Lock, AlertCircle, ArrowLeft } from 'lucide-react';

const Login: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { login, auth } = useCMS();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin');
    } else {
      setError(true);
    }
  };

  if (auth.isLoggedIn) {
    navigate('/admin');
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-400/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-white/5 rounded-full blur-[100px]"></div>

      <div className="max-w-md w-full relative z-10">
        <button 
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Voltar ao site
        </button>

        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Martini className="w-12 h-12 text-yellow-400" />
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase">
              BIRIBAR<span className="text-yellow-400">ADMIN</span>
            </h1>
          </div>
          <p className="font-heading text-zinc-500 uppercase tracking-[0.2em] font-bold text-[10px]">Acesso Restrito & Gestão de Conteúdo</p>
        </div>

        <div className="glass-card p-10 rounded-[2.5rem] shadow-2xl space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl font-black text-white uppercase tracking-tighter">Login Administrativo</h2>
            <p className="text-zinc-500 text-sm">Insira suas credenciais para gerenciar o Biribar Drink's.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="font-heading text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] block ml-1">Senha Mestra</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-600" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-zinc-700 focus:outline-none focus:border-yellow-400 transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-3 text-red-400 bg-red-500/10 p-4 rounded-xl text-xs font-semibold animate-in fade-in slide-in-from-top-2">
                <AlertCircle size={16} className="flex-shrink-0" />
                Credencial inválida. Verifique os dados e tente novamente.
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-4 rounded-2xl font-black tracking-widest hover:bg-white transition-all transform hover:scale-[1.02] shadow-xl shadow-yellow-400/5 uppercase text-[10px]"
            >
              AUTENTICAR ACESSO
            </button>
          </form>
        </div>
        
        <p className="text-center mt-12 text-[10px] text-zinc-600 uppercase font-bold tracking-widest">
          Copyright &copy; {new Date().getFullYear()} Biribar Drink's • v1.0.0
        </p>
      </div>
    </div>
  );
};

export default Login;
