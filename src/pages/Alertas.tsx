import React from 'react';
import Layout from '../layouts/Layout';
import { Bell, CalendarCheck, NotebookPen, ChevronRight } from 'lucide-react';

const alertas = [
  {
    titulo: 'Sube tus boletas y Facturas',
    subtitulo: '1 vez por semana, 8pm',
    icono: <Bell className="text-orange-500 w-6 h-6" />,
  },
  {
    titulo: 'Declara tus impuestos',
    subtitulo: '5 may. 2025',
    icono: <Bell className="text-orange-500 w-6 h-6" />,
  },
  {
    titulo: 'Pagar cuota mensual',
    subtitulo: '1 may. 2025',
    icono: <CalendarCheck className="text-blue-700 w-6 h-6" />,
  },
  {
    titulo: 'Preparar tu inventario',
    subtitulo: '30 abr. 2025',
    icono: <NotebookPen className="text-orange-500 w-6 h-6" />,
  },
];

const Alertas: React.FC = () => {
  return (
    <Layout title="Alertas">
      <div className="max-w-sm mx-auto py-6 space-y-4">
        {alertas.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md px-4 py-3 flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              {item.icono}
              <div>
                <p className="font-bold text-blue-900 text-sm leading-tight">
                  {item.titulo}
                </p>
                <p className="text-slate-500 text-xs">{item.subtitulo}</p>
              </div>
            </div>
            <ChevronRight className="text-slate-400 w-5 h-5" />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Alertas;
