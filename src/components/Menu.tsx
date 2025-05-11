import React from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  
  const menuItems = [
    { id: 1, name: 'Principal', path: '/principal' },
    { id: 2, name: 'Emisión de boletas y Facturas', path: '/emision' },
    { id: 3, name: 'Historial de comprobantes', path: '/historial' },
    { id: 4, name: 'Suscripción', path: '/suscripcion' },
    { id: 5, name: 'Quipu', path: '/quipu' },
    { id: 6, name: 'Asesoría por GenAI', path: '/asesoria' },
    { id: 7, name: 'Mis Métricas', path: '/metricas' },
    { id: 8, name: 'Declaración del Mes', path: '/declaracion' },
    { id: 9, name: 'Alertas', path: '/alertas' },
    { id: 10, name: 'Preguntas frecuentes', path: '/preguntas' }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative w-80 h-full bg-gradient-to-br from-yellow-400 to-orange-500 p-6 shadow-xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Menú</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-slate-800" />
          </button>
        </div>
        
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className="w-full text-left px-4 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors flex items-center"
                  onClick={() => handleNavigation(item.path)}
                >
                  <span className="mr-3 font-bold">{item.id}</span>
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;