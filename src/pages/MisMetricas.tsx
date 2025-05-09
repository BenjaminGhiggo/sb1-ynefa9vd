import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const data = [
  { name: 'Elemento 1', value: 7 },
  { name: 'Elemento 2', value: 11 },
  { name: 'Elemento 3', value: 16 },
  { name: 'Elemento 4', value: 20 },
];

const MisMetricas: React.FC = () => {
  const [periodo, setPeriodo] = useState<'Semana' | 'Mes' | 'Año'>('Mes');

  return (
    <Layout title="Mis Métricas">
      <div className="max-w-md mx-auto py-6 space-y-6">
        {/* Monto declarado */}
        <div className="bg-white rounded-2xl shadow-md p-4 flex justify-between items-center">
          <div>
            <p className="text-slate-600 text-sm">Monto Declarado</p>
            <p className="text-2xl font-bold text-blue-900">S/ 256.84</p>
            <p className="text-green-600 font-semibold text-sm">+49,89%</p>
          </div>
          <img src="/assets/avatar.png" alt="Kappi" className="w-16 h-auto object-contain" />
        </div>

        {/* Filtros */}
        <div className="flex justify-center gap-6">
          {['Semana', 'Mes', 'Año'].map((tipo) => (
            <button
              key={tipo}
              onClick={() => setPeriodo(tipo as 'Semana' | 'Mes' | 'Año')}
              className={`font-bold px-2 py-1 rounded ${
                periodo === tipo ? 'bg-slate-300 text-blue-900' : 'text-slate-600'
              }`}
            >
              {tipo}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <select className="px-4 py-2 rounded-xl bg-white shadow font-bold text-slate-800">
            <option>Desde</option>
          </select>
          <select className="px-4 py-2 rounded-xl bg-white shadow font-bold text-slate-800">
            <option>Hasta</option>
          </select>
        </div>

        {/* Gráfico */}
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#FBBF24" />
          </BarChart>
        </ResponsiveContainer>

        {/* IGV total */}
        <div className="flex items-center justify-between bg-white rounded-2xl shadow px-4 py-3">
          <ChevronLeft className="text-slate-500" />
          <div className="flex items-center gap-2">
            <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">S/</div>
            <span className="font-semibold text-slate-800">IGV Total</span>
          </div>
          <span className="font-bold text-slate-800">S/ 46.23</span>
          <ChevronRight className="text-slate-500" />
        </div>
      </div>
    </Layout>
  );
};

export default MisMetricas;
