import React from 'react';
import { LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const username = "Yobel";
  
  const handleLogin = () => {
    navigate('/principal');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 transform transition-all hover:scale-[1.01]">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="w-32 h-32 mb-4 flex items-center justify-center">
            <img 
              src="/assets/logo-quipu.png" 
              alt="Logo Quipu.ai" 
              className="w-auto h-full object-contain"
            />
          </div>
          
          <h1 className="text-3xl font-bold text-slate-800 mb-2">¡Bienvenido!</h1>
          <p className="text-xl font-medium text-slate-700 mb-6">{username}</p>
          
          {/* User Avatar */}
          <div className="relative w-24 h-24 mb-6">
            <img 
              src="/assets/avatar-user.png" 
              alt="Avatar del usuario" 
              className="w-auto h-full rounded-full object-cover"
            />
          </div>
          
          <button 
            onClick={handleLogin}
            className="bg-blue-700 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 font-medium hover:bg-blue-800 transition-all transform hover:scale-105 shadow-md"
          >
            <span>Ingresar</span>
            <LogIn size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;