import React, { useState } from 'react';
import Menu from '../components/Menu';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 to-orange-400 p-6 text-slate-800">
      {/* Encabezado con botón de menú y título */}
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => setIsMenuOpen(true)} className="text-blue-900">
          <div className="w-7 h-1 bg-blue-900 mb-1 rounded"></div>
          <div className="w-7 h-1 bg-blue-900 mb-1 rounded"></div>
          <div className="w-7 h-1 bg-blue-900 rounded"></div>
        </button>
        <span className="text-xl font-semibold text-blue-900">{title}</span>
      </div>

      {/* Contenido dinámico */}
      <div className="max-w-6xl mx-auto">{children}</div>

      {/* Menú lateral */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default Layout;
