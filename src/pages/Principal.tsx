import React from 'react';
import {
  FileText,
  History,
  BarChart3,
  Bell,
  MessageSquare,
  Calendar,
  UserCheck,
  DollarSign,
  HelpCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../layouts/Layout';

const Principal: React.FC = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Emisión de boletas y Facturas',
      icon: <FileText className="w-10 h-10 text-orange-500" />,
      action: 'Crear',
      path: '/emision',
    },
    {
      title: 'Historial de comprobantes',
      icon: <History className="w-10 h-10 text-orange-500" />,
      action: 'Ver',
      path: '/historial',
    },
    {
      title: 'Métricas',
      icon: <BarChart3 className="w-10 h-10 text-orange-500" />,
      action: 'Ver',
      path: '/metricas',
    },
    {
      title: 'Alertas',
      icon: <Bell className="w-10 h-10 text-orange-500" />,
      action: 'Ver',
      path: '/alertas',
    },
    {
      title: 'Asesoría por GenAI',
      icon: <MessageSquare className="w-10 h-10 text-orange-500" />,
      action: 'Ver',
      path: '/asesoria',
    },
    {
      title: 'Declaración del mes',
      icon: <Calendar className="w-10 h-10 text-orange-500" />,
      action: 'Ver',
      path: '/declaracion',
    },
    {
      title: 'Suscripción',
      icon: <DollarSign className="w-10 h-10 text-orange-500" />,
      action: 'Ver',
      path: '/suscripcion',
    },
    {
      title: 'Quipu',
      icon: <UserCheck className="w-10 h-10 text-orange-500" />,
      action: 'Ver',
      path: '/quipu',
    },
    {
      title: 'Preguntas frecuentes',
      icon: <HelpCircle className="w-10 h-10 text-orange-500" />,
      action: 'Ver',
      path: '/preguntas',
    },
    {
      title: 'Bienvenido',
      icon: <UserCheck className="w-10 h-10 text-orange-500" />,
      action: 'Ver',
      path: '/',
    },
  ];

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

      {/* Tarjetas */}
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
              onClick={() => navigate(card.path)}
              className="bg-green-500 text-white px-6 py-1 text-sm rounded-full hover:bg-green-600 transition"
            >
              {card.action}
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Principal;
