import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  History,
  BarChart3,
  Bell,
  MessageSquare,
  Calendar,
  DollarSign,
  BotIcon,
  HelpCircle,
  UserCheck,
  LucideIcon,
} from 'lucide-react';

import Layout from '../layouts/Layout';
import cardsData from '../db/collections/1_principal.json'; // ←  ⚠️  ruta relativa

/** Relación nombre‑icono (los mismos valores que guardaste en el JSON) */
const iconMap: Record<string, LucideIcon> = {
  FileText,
  History,
  BarChart3,
  Bell,
  MessageSquare,
  Calendar,
  DollarSign,
  BotIcon,
  HelpCircle,
  UserCheck,
};

interface Card {
  id: number;
  title: string;
  path: string;            //  ←  usa “path” en lugar de “route”
  icon: keyof typeof iconMap;
  action: string;
}

const Principal: React.FC = () => {
  const navigate = useNavigate();
  const cards = cardsData as Card[];

  return (
    <Layout title="Principal">
      {/* Saludo */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800 max-w-[60%] leading-tight">
          ¡Hola! soy Kappi,<br /> tu contador virtual…
        </h2>
        <img
          src="/assets/avatar.png"
          alt="Kappi"
          className="h-24 w-auto object-contain"
        />
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-2 gap-4">
        {cards.map(({ id, title, path, icon, action }) => {
          const IconComp = iconMap[icon];
          return (
            <div
              key={id}
              className="bg-white rounded-2xl border border-gray-300 p-5 shadow min-h-[180px] flex flex-col justify-between items-center text-center"
            >
              <div className="flex flex-col items-center justify-center flex-1">
                <IconComp className="w-10 h-10 text-orange-500 mb-2" />
                <h3 className="text-[13px] font-bold text-orange-600 mb-4 leading-tight">
                  {title}
                </h3>
              </div>
              <button
                onClick={() => navigate(path)}
                className="bg-green-500 text-white px-6 py-1 text-sm rounded-full hover:bg-green-600 transition"
              >
                {action}
              </button>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Principal;
