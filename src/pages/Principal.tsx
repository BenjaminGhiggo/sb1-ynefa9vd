import React, { useState } from 'react';
import {
  FileText,
  History,
  BarChart3,
  Bell,
  MessageSquare,
  Calendar,
} from 'lucide-react';
import Layout from '../layouts/Layout';

const Principal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');

  const cards = [
    {
      title: 'Emisión de boletas y Facturas',
      icon: <FileText className="w-10 h-10 text-orange-500" />,
      action: 'Crear',
    },
    {
      title: 'Historial de documentos',
      icon: <History className="w-10 h-10 text-orange-500" />,
      action: 'Ver',
    },
    {
      title: 'Métricas',
      icon: <BarChart3 className="w-10 h-10 text-orange-500" />,
      action: 'Ver',
    },
    {
      title: 'Alertas',
      icon: <Bell className="w-10 h-10 text-orange-500" />,
      action: 'Ver',
    },
    {
      title: 'Asesorías',
      icon: <MessageSquare className="w-10 h-10 text-orange-500" />,
      action: 'Ver',
    },
    {
      title: 'Declaración del mes',
      icon: <Calendar className="w-10 h-10 text-orange-500" />,
      action: 'Ver',
    },
  ];

  const handleCardClick = (cardTitle: string) => {
    setSelectedCard(cardTitle);
    setIsModalOpen(true);
  };

  return (
    <Layout title="Principal">
      {/* Texto saludo y avatar */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800 max-w-[60%] leading-tight">
          ¡Hola! soy Kappi,<br /> tu contador virtual...
        </h2>
        <img
          src="/assets/avatar.png"
          alt="Kappi"
          className="h-24 w-auto object-contain"
        />
      </div>

      {/* Tarjetas de funcionalidades */}
      <div className="grid grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-300 p-5 shadow min-h-[180px] flex flex-col justify-between items-center text-center"
          >
            <div className="flex flex-col items-center justify-center flex-1">
              <div className="mb-2">{card.icon}</div>
              <h3 className="text-[13px] font-bold text-orange-600 mb-4 leading-tight">
                {card.title}
              </h3>
            </div>
            <button
              onClick={() => handleCardClick(card.title)}
              className="bg-green-500 text-white px-6 py-1 text-sm rounded-full hover:bg-green-600 transition"
            >
              {card.action}
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-xl max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">
              Has seleccionado: {selectedCard}
            </h3>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Principal;
