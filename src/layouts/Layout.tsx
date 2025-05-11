import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Menu from '../components/Menu';
import Retroceder from '../components/Retroceder';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
  /** Muestra el botón flotante abajo‑derecha */
  showFloatingBack?: boolean;
  /** Función a ejecutar cuando se pulse el botón flotante */
  onFloatingBack?: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  title,
  children,
  showFloatingBack = false,
  onFloatingBack,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 to-orange-400 p-6 text-slate-800">
      {/* ---------- Header ---------- */}
      <div className="flex items-center justify-between mb-4">
        {/* ☰ Menú */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="p-1 hover:bg-white/20 rounded transition-colors text-blue-900"
        >
          <div className="w-7 h-1 bg-blue-900 mb-1 rounded" />
          <div className="w-7 h-1 bg-blue-900 mb-1 rounded" />
          <div className="w-7 h-1 bg-blue-900 rounded" />
        </button>

        {/* Título */}
        <span className="text-xl font-semibold text-blue-900">{title}</span>

        {/* ← retroceso del header */}
        <button
          onClick={() => navigate(-1)}
          className="p-1 hover:bg-white/20 rounded transition-colors text-blue-900"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      {/* ---------- Contenido dinámico ---------- */}
      <div className="max-w-6xl mx-auto">{children}</div>

      {/* ---------- Menú lateral ---------- */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* ---------- Botón flotante global ---------- */}
      {showFloatingBack && onFloatingBack && (
        <Retroceder onClick={onFloatingBack} />
      )}
    </div>
  );
};

export default Layout;
