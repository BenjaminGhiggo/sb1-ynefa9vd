import React from 'react';
import { Menu as MenuIcon } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
      >
        <MenuIcon className="w-6 h-6 text-slate-800" />
      </button>
      <div className="flex items-center gap-4">
        <img 
          src="/assets/avatar-user.png" 
          alt="Kappi" 
          className="w-16 h-16 rounded-full border-4 border-white"
        />
        <h2 className="text-2xl text-slate-800">¡Hola! soy Kappi, tu contador virtual...</h2>
      </div>
    </div>
  );
};

export default Header;