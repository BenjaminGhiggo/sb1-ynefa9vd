import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MisMetricas: React.FC = () => {
  const [periodo, setPeriodo] = useState<'Semana' | 'Mes' | 'Año'>('Mes');
  const [desde, setDesde] = useState<Date | null>(new Date('2025-04-01'));
  const [hasta, setHasta] = useState<Date | null>(new Date('2025-04-30'));
  const [tipo, setTipo] = useState<'Ventas' | 'Compras' | 'Total'>('Total');

  const data = {
    ventas: 32835,
    compras: 15400,
    igv: 5910,
    creditoFiscal: 2772,
    isrl: 492.525,
  };

  const chartData =
    tipo === 'Ventas'
      ? [{ name: 'Ventas', value: data.ventas, igv: data.igv }]
      : tipo === 'Compras'
      ? [{ name: 'Compras', value: data.compras, igv: data.creditoFiscal }]
      : [
          { name: 'Compras', value: data.compras, igv: data.creditoFiscal },
          { name: 'Ventas', value: data.ventas, igv: data.igv },
        ];

  return (
    <Layout title="Mis Métricas">
      <div className="max-w-md mx-auto py-6 space-y-6">
        <div className="bg-white rounded-2xl shadow-md p-4 flex justify-between items-center">
          <div>
            <p className="text-slate-600 text-sm">Monto Declarado</p>
            <p className="text-3xl font-bold text-blue-900">S/ 3,630.825</p>
            <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mt-2">
              +49,89%
            </div>
          </div>
          <img src="/assets/avatar.png" alt="Kappi" className="w-20 h-auto object-contain" />
        </div>

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
          <DatePicker
            selected={desde}
            onChange={(date) => date && setDesde(date)}
            dateFormat="dd/MM/yy"
            className="w-full px-4 py-2 rounded-xl bg-white shadow font-bold text-blue-900 text-center"
            placeholderText="Desde"
          />
          <DatePicker
            selected={hasta}
            onChange={(date) => date && setHasta(date)}
            dateFormat="dd/MM/yy"
            className="w-full px-4 py-2 rounded-xl bg-white shadow font-bold text-blue-900 text-center"
            placeholderText="Hasta"
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          {['Ventas', 'Compras', 'Total'].map((op) => (
            <button
              key={op}
              onClick={() => setTipo(op as 'Ventas' | 'Compras' | 'Total')}
              className={`px-4 py-2 rounded-xl font-bold ${
                tipo === op
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-blue-900 shadow'
              }`}
            >
              {op}
            </button>
          ))}
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#60A5FA" />
            <Bar dataKey="igv" fill="#F87171" />
          </BarChart>
        </ResponsiveContainer>

        <div className="bg-white rounded-2xl shadow p-4 flex items-center gap-4">
          <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
            S/
          </div>
          <div className="flex-1">
            <p className="font-bold text-blue-900 text-lg">IGV Total</p>
          </div>
          <div className="font-bold text-blue-900">S/ 3,138.3</div>
        </div>

        <div className="bg-white rounded-2xl shadow p-4 flex items-center gap-4">
          <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
            S/
          </div>
          <div className="flex-1">
            <p className="font-bold text-blue-900 text-lg">ISRL Mensual</p>
          </div>
          <div className="font-bold text-blue-900">S/ 492.525</div>
        </div>
      </div>
    </Layout>
  );
};

export default MisMetricas;
